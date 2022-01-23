defmodule WhatsappInactiveMembersHandlerWeb.PageController do
  use WhatsappInactiveMembersHandlerWeb, :controller

  def index(conn, _params) do
    IO.inspect "1 - ******************"
    IO.inspect Routes.static_path(conn, "/js/bundle.js")
    render(conn, "index.html")
  end
end
