defmodule WhatsappInactiveMembersHandler.Message.Messages do
  def prepare_list_from_file(txt_file) do
    {:ok, contents} = File.read(txt_file)
    data = Poison.decode!(contents)
    prepare_data(data)
  end

  defp prepare_data(data) do
    first_key = List.first(Map.keys(data))
    list = data[first_key]
    List.delete_at(list, length(list) - 1) # Remove yourself
  end
end
