defmodule WhatsappInactiveMembersHandler.Repo do
  use Ecto.Repo,
    otp_app: :whatsapp_inactive_members_handler,
    adapter: Ecto.Adapters.Postgres
end
