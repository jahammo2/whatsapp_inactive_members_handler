defmodule WhatsappInactiveMembersHandler.PhoneNumber.CountryCodesTest do
  use WhatsappInactiveMembersHandler.DataCase, async: true

  alias WhatsappInactiveMembersHandler.PhoneNumber.CountryCodes

  describe "build_phone_number_by_country_code/1" do
    test "it converts a +1 phone number to a specific format" do
      number = "+1 555 677 7421"
      assert CountryCodes.build_phone_number_by_country_code(number) == "+1 (555) 677-7421"
      number = "+1 555 555 5555"
      assert CountryCodes.build_phone_number_by_country_code(number) == "+1 (555) 555-5555"
    end

    test "it converts a +7 phone number to a specific format" do
      number = "+7 911 555 72 50"
      assert CountryCodes.build_phone_number_by_country_code(number) == "+7 911 555-72-50"
      number = "+7 916 555 87 72"
      assert CountryCodes.build_phone_number_by_country_code(number) == "+7 916 555-87-72"
    end

    test "it converts a +54 phone number to a specific format" do
      number = "+54 9 11 4945 3219"
      assert CountryCodes.build_phone_number_by_country_code(number) == "+54 9 11 4945-3219"
      number = "+54 9 11 4945 5555"
      assert CountryCodes.build_phone_number_by_country_code(number) == "+54 9 11 4945-5555"
    end

    test "it converts a +55 phone number to a specific format" do
      number = "+55 21 99694 9813"
      assert CountryCodes.build_phone_number_by_country_code(number) == "+55 21 99694-9813"
      number = "+55 21 99694 5555"
      assert CountryCodes.build_phone_number_by_country_code(number) == "+55 21 99694-5555"
    end

    test "it converts a +972 phone number to a specific format" do
      number = "+972 50 555 6588"
      assert CountryCodes.build_phone_number_by_country_code(number) == "+972 50-555-6588"
      number = "+972 52 288 8656"
      assert CountryCodes.build_phone_number_by_country_code(number) == "+972 52-288-8656"
    end

    test "it returns the original number/name if there is no country code match" do
      number = "+555 555 677 7421"
      assert CountryCodes.build_phone_number_by_country_code(number) == number
    end
  end
end
