defmodule WhatsappInactiveMembersHandler.Contact.Contacts do
  def prepare_list_from_contents(contents) do
    cond do
      String.contains?(contents, "\uFEFF") ->
        contents
        |> String.split("\uFEFF")
        |> Enum.at(1)
        |> Poison.decode!()
        |> prepare_data

      true ->
        Poison.decode!(contents)
        |> prepare_data
    end
  end

  defp prepare_data(data) do
    first_key = List.first(Map.keys(data))
    list = data[first_key]
    # Remove yourself
    List.delete_at(list, length(list) - 1)
  end
end
