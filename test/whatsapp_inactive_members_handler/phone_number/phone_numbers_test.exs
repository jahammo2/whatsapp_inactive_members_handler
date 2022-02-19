defmodule WhatsappInactiveMembersHandler.PhoneNumber.PhoneNumbersTest do
  use WhatsappInactiveMembersHandler.DataCase, async: true

  alias WhatsappInactiveMembersHandler.PhoneNumber.PhoneNumbers

  describe "build_phone_number_by_country_code/1" do
    @tag :authenticated
    test "it converts a +1 phone number to a specific format" do
      assert PhoneNumbers.build_phone_number_by_country_code() == 1
    end
  end
end
