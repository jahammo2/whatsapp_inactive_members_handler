defmodule WhatsappInactiveMembersHandler.Message.Messages do
  def prepare_list_from_contents(txt_file), do: prepare_list_from_contents(txt_file, nil)

  def prepare_list_from_contents(contents, date_string) do
    list = String.split(contents, "\n")
    list = List.delete_at(list, length(list) - 1)

    find_starting_index(list, date_string)
    |> build_list_from_index(list)
  end

  defp find_starting_index(_list, nil), do: 0
  defp find_starting_index(_list, ""), do: 0

  defp find_starting_index(list, date_string) do
    date = convert_to_date(date_string)
    find_starting_index(list, date_string, date)
  end

  defp convert_to_date(date_string) do
    [dd, mm, yy] = String.split(date_string, "/")
    {:ok, date} = Date.from_iso8601("20#{yy}-#{mm}-#{dd}")
    date
  end

  defp find_starting_index(list, date_string, date) do
    if !is_date_in_future?(date) do
      go_through_dates_until_index_is_found(list, date_string, date)
    else
      length(list) - 1
    end
  end

  defp is_date_in_future?(date) do
    Date.diff(date, Date.utc_today()) > 0
  end

  defp go_through_dates_until_index_is_found(list, date_string, date) do
    case find_index_of_array_for_date(list, date_string) do
      nil ->
        new_date = Date.add(date, 1)
        new_date_string = Calendar.strftime(new_date, "%d/%m/%y")
        find_starting_index(list, new_date_string, new_date)

      index ->
        index
    end
  end

  defp find_index_of_array_for_date(list, date_string) do
    Enum.find_index(list, fn item ->
      if String.contains?(item, date_string) do
        first_word = Enum.at(String.split(item, " "), 0)
        first_word == date_string
      end
    end)
  end

  defp build_list_from_index(index, list) do
    list
    |> Enum.with_index()
    |> Enum.reduce([], fn {item, i}, acc ->
      if i >= index do
        acc ++ [item]
      else
        acc
      end
    end)
  end
end
