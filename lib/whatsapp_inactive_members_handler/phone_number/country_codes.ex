defmodule WhatsappInactiveMembersHandler.PhoneNumber.CountryCodes do
  def build_phone_number_by_country_code(number) do
    cond do
      String.contains?(number, "+1 ") ->
        build_us_number(number)

      String.contains?(number, "+7 ") ->
        build_rus_number(number)

      String.contains?(number, "+54 ") ->
        build_arg_number(number)

      String.contains?(number, "+55 ") ->
        build_braz_number(number)

      String.contains?(number, "+972 ") ->
        build_isr_number(number)

      true ->
        number
    end
  end

  defp build_us_number(number) do
    split = String.split(number, " ")

    second = split |> Enum.at(1)
    third = split |> Enum.at(2)
    fourth = split |> Enum.at(3)

    "+1 (#{second}) #{third}-#{fourth}"
  end

  defp build_rus_number(number) do
    split = String.split(number, " ")

    second = split |> Enum.at(1)
    third = split |> Enum.at(2)
    fourth = split |> Enum.at(3)
    fifth = split |> Enum.at(4)

    "+7 #{second} #{third}-#{fourth}-#{fifth}"
  end

  defp build_arg_number(number) do
    split = String.split(number, " ")

    second = split |> Enum.at(1)
    third = split |> Enum.at(2)
    fourth = split |> Enum.at(3)
    fifth = split |> Enum.at(4)

    "+54 #{second} #{third} #{fourth}-#{fifth}"
  end

  defp build_braz_number(number) do
    split = String.split(number, " ")

    second = split |> Enum.at(1)
    third = split |> Enum.at(2)
    fourth = split |> Enum.at(3)

    "+55 #{second} #{third}-#{fourth}"
  end

  defp build_isr_number(number) do
    split = String.split(number, " ")

    second = split |> Enum.at(1)
    third = split |> Enum.at(2)
    fourth = split |> Enum.at(3)

    "+972 #{second}-#{third}-#{fourth}"
  end
end
