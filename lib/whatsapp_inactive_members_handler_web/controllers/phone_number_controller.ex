defmodule WhatsappInactiveMembersHandlerWeb.PhoneNumberController do
  use WhatsappInactiveMembersHandlerWeb, :controller

  alias WhatsappInactiveMembersHandler.PhoneNumber.PhoneNumbers

  def find_inactive_contacts(conn, params) do
    phone_numbers = PhoneNumbers.find_inactive_contacts(params)
    render(conn, "index.json", phone_numbers: [])
  end
end
