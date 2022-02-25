defmodule WhatsappInactiveMembersHandler.PhoneNumber.PhoneNumbers do
  alias WhatsappInactiveMembersHandler.Message.Messages
  alias WhatsappInactiveMembersHandler.Contact.Contacts
  alias WhatsappInactiveMembersHandler.PhoneNumber.CountryCodes

  def find_inactive_contacts(params) do
    messages_io = params["messagesFile"]["io"]
    contacts_io = params["contactsFile"]["io"]
    start_date = params["startDate"]
    starting_unsaved_contact = params["startingUnsavedContact"]

    %URL{parsed_path: %URL.Data{data: messages_data}} = URL.parse(messages_io)
    %URL{parsed_path: %URL.Data{data: contacts_data}} = URL.parse(contacts_io)

    list_of_contacts = Contacts.prepare_list_from_contents(contacts_data)
    list_of_messages = get_list_of_messages(params)

    initial_names = get_initial_names(list_of_contacts, starting_unsaved_contact)

    searchable_numbers_and_names = convert_to_searchables(initial_names)
    IO.inspect("6 - ****************")

    inactives = check_against_messages(searchable_numbers_and_names, list_of_messages)
    IO.inspect(inactives)
    inactives
  end

  defp get_list_of_messages(params) do
    contacts_io = params["contactsFile"]["io"]
    start_date = params["startDate"]

    Messages.prepare_list_from_contents(messages_data, start_date)
  end

  defp get_message_data() do
  end

  defp get_initial_names(list_of_contacts, starting_unsaved_contact) do
    index_of_first_unsaved_contact =
      Enum.find_index(list_of_contacts, fn x -> x["Name"] == starting_unsaved_contact end)

    list_of_contacts
    |> Enum.with_index()
    |> Enum.reduce([], fn {item, i}, acc ->
      if i >= index_of_first_unsaved_contact do
        acc ++ [item["Phone"]]
      else
        acc ++ [item["Name"]]
      end
    end)
  end

  defp convert_to_searchables(initial_names) do
    initial_names
    |> Enum.map(fn item -> CountryCodes.build_phone_number_by_country_code(item) end)
  end

  defp check_against_messages(searchables, list_of_messages) do
    searchables
    |> Enum.reduce([], fn item, acc ->
      existing_message =
        Enum.find(list_of_messages, fn message ->
          # if String.contains?(item, "225") do
          #   IO.inspect "8 - ********************"
          #   IO.inspect message
          #   IO.inspect item
          # end

          String.contains?(message, item)
        end)

      if existing_message do
        acc
      else
        acc ++ [item]
      end
    end)
  end
end
