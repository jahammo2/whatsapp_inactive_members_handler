defmodule WhatsappInactiveMembersHandlerWeb.PhoneNumberController do
  use WhatsappInactiveMembersHandlerWeb, :controller

  def index(conn, _params) do
    render(conn, "index.json", phone_numbers: [])
  end
end
