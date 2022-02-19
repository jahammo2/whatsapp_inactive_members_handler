defmodule WhatsappInactiveMembersHandler.PhoneNumber.TxtContentsTest do
  use WhatsappInactiveMembersHandler.DataCase, async: true

  alias WhatsappInactiveMembersHandler.PhoneNumber.TxtContents

  @txt_path "test/fixtures/messages.txt"

  # NOTE: dates are DD/MM/YY
  describe "prepare_list_from_file/2" do
    test "it returns a list of strings from the file based upon the date needed" do
      list = TxtContents.prepare_list_from_file(@txt_path, "10/12/21")

      assert String.contains? Enum.at(list, 0), "10/12/21 10:24 a. m."
      assert String.contains? Enum.at(list, length(list) - 1), "03/02/22 12:30 p. m."
    end

    test "it returns a list of strings from the file for the most recent date if the passed date cannot be found" do
      list = TxtContents.prepare_list_from_file(@txt_path, "11/12/21")

      assert String.contains? Enum.at(list, 0), "01/02/22 3:35 p. m."
      assert String.contains? Enum.at(list, length(list) - 1), "03/02/22 12:30 p. m."
    end

    test "it returns a list of strings from the file and only uses the last line if the date passed is in the future" do
      list = TxtContents.prepare_list_from_file(@txt_path, "10/01/29")

      assert String.contains? Enum.at(list, 0), "03/02/22 12:30 p. m."
      assert String.contains? Enum.at(list, length(list) - 1), "03/02/22 12:30 p. m."
    end
  end

  describe "prepare_list_from_file/1" do
    test "it returns a list of strings from the file and uses the whole file if no date is passed" do
      list = TxtContents.prepare_list_from_file(@txt_path)

      assert Enum.at(list, 0) == "1. Foo"
      assert String.contains? Enum.at(list, length(list) - 1), "03/02/22 12:30 p. m."
    end
  end
end
