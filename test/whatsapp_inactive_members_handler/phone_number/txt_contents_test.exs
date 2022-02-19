defmodule WhatsappInactiveMembersHandler.PhoneNumber.TxtContentsTest do
  use WhatsappInactiveMembersHandler.DataCase, async: true

  alias WhatsappInactiveMembersHandler.PhoneNumber.TxtContents

  @txt_path "test/fixtures/contents.txt"

  describe "prepare_from_file/1" do
    test "it returns a list of strings based upon the txt contents" do
      list = TxtContents.prepare_from_file(@txt_path)

      assert Enum.at(list, 0) == "1. Ale"
      assert String.contains? Enum.at(list, length(list) - 2), "03/02/22 12:30 p. m."
    end
  end
end
