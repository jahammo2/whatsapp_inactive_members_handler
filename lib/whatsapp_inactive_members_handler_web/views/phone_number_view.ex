defmodule WhatsappInactiveMembersHandlerWeb.PhoneNumberView do
  use WhatsappInactiveMembersHandlerWeb, :view

  def render("index.json", %{phone_numbers: phone_numbers}) do
    %{
      phone_numbers: phone_numbers
    }
  end
end
