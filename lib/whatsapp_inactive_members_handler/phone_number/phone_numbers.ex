defmodule WhatsappInactiveMembersHandler.PhoneNumber.PhoneNumbers do
  def find_inactive_contacts(params) do
    io = params["messagesFile"]["io"]
    IO.inspect "2 - ************"
    IO.inspect io
    # IO.inspect IO.read(io)

    {:ok, contents} = File.read(io)
    IO.inspect contents
    []
  end
end
