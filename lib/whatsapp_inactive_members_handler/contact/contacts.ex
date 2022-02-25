defmodule WhatsappInactiveMembersHandler.Contact.Contacts do
  def prepare_list_from_contents(contents) do
    data = Poison.decode!(contents)
    prepare_data(data)
  end

  defp prepare_data(data) do
    first_key = List.first(Map.keys(data))
    list = data[first_key]
    # Remove yourself
    List.delete_at(list, length(list) - 1)
  end
end
