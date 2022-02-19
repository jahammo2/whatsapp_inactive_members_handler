defmodule WhatsappInactiveMembersHandlerWeb.PageController do
  use WhatsappInactiveMembersHandlerWeb, :controller

  def index(conn, _params) do
    # render(conn, "index.json", costing_requests: [])
    render(conn, "index.html")
  end
end
