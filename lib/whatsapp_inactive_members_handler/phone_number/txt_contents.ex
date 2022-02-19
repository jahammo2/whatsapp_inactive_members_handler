defmodule WhatsappInactiveMembersHandler.PhoneNumber.TxtContents do
  def prepare_from_file(txt_file) do
    {:ok, contents} = File.read(txt_file)
    String.split(contents, "\n")
  end
end
