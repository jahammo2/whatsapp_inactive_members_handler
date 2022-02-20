defmodule WhatsappInactiveMembersHandler.Message.MessagesTest do
  use WhatsappInactiveMembersHandler.DataCase, async: true

  alias WhatsappInactiveMembersHandler.Message.Messages

  @txt_path "test/fixtures/members.txt"

  describe "prepare_list_from_json/2" do
    test "it returns a list of structs from the file and does not include you" do
      assert list = Messages.prepare_list_from_file(@txt_path)

      assert Enum.at(list, 0) == %{
        "Country" => "United Kingdom",
        "Name" => "Test User 1",
        "Phone" => "+44 5555 339971"
      }

      assert Enum.at(list, length(list) - 1) == %{
        "Country" => "Israel",
        "Name" => "Test Israel User",
        "Phone" => "+972 50 555 6588"
      }
    end
  end
end
