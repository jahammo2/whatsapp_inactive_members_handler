defmodule WhatsappInactiveMembersHandler.PhoneNumber.PhoneNumbers do
  alias WhatsappInactiveMembersHandler.Message.Messages
  alias WhatsappInactiveMembersHandler.Contact.Contacts
  alias WhatsappInactiveMembersHandler.PhoneNumber.CountryCodes

  def find_inactive_contacts(params) do
    list_of_messages = get_list_of_messages(params)

    get_list_of_contacts(params)
    |> get_initial_names(params["startingUnsavedContact"])
    |> convert_to_searchables
    |> check_against_messages(list_of_messages)
  end

  defp get_list_of_messages(params) do
    get_data_from_io(params["messagesFile"]["io"])
    |> Messages.prepare_list_from_contents(params["startDate"])
  end

  defp get_list_of_contacts(params) do
    get_data_from_io(params["contactsFile"]["io"])
    |> Contacts.prepare_list_from_contents()
  end

  defp get_data_from_io(io) do
    %URL{parsed_path: %URL.Data{data: contacts_data}} = URL.parse(io)
    contacts_data
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
