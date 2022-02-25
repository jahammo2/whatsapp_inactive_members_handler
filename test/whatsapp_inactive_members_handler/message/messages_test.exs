defmodule WhatsappInactiveMembersHandler.Message.MessagesTest do
  use WhatsappInactiveMembersHandler.DataCase, async: true

  alias WhatsappInactiveMembersHandler.Message.Messages

  @contents "1. Foo\n\n01/04/21 11:04 p. m. - Los mensajes y las llamadas están cifrados de extremo a extremo. Nadie fuera de este chat, ni siquiera WhatsApp, puede leerlos ni escucharlos. Toca para obtener más información.\n\n12/04/21 12:03 p. m. - Test User 2: 2v2 sign-up today at 4pm, Coco Beach.  We currently have 4 players so we're looking for about 4-6 more active players for this game:\n\n06/05/21 10:47 p. m. - Test User 4: Esperando este mensaje\n\n16/08/21 5:24 p. m. - +1 (204) 232-6344: Thanks! Joined that too\n\n1. Mike\n2. Tim\n3. Joshua\n4. Abril\n5. Daniel +2\n10/12/21 10:24 a. m. - Test US user: Beach 🏐 Dec 12th. 2:00pm\n\n1. Ale\n2. Christian\n3. Klaudia\n4. Steo\n5. Craig\n6. Linus\n7. Tony\n01/02/22 3:35 p. m. - +31 6 42088812: See you there around 4:10\n01/02/22 3:45 p. m. - Test France User: On my way\n01/02/22 3:56 p. m. - +34 636 15 24 66: Cool\n01/02/22 3:57 p. m. - Test Hungary User: Just got the net be there soon\n01/02/22 4:17 p. m. - Test Hungary User: <Multimedia omitido>\n01/02/22 4:17 p. m. - Test Hungary User: Where are you all??\n01/02/22 4:22 p. m. - Test Belarus User: 5 min\n01/02/22 5:05 p. m. - +39 349 849 6335 se unió usando el enlace de invitación de este grupo\n01/02/22 5:26 p. m. - +420 739 534 759 salió del grupo\n01/02/22 7:25 p. m. - +44 7944 771107: Great game today guys! Thank you 🙏\n01/02/22 7:25 p. m. - +44 7944 771107: Yeah it was fun\n01/02/22 7:32 p. m. - Test UK user: <Multimedia omitido>\n01/02/22 7:32 p. m. - Test User 1: 😎👌🏼🏐\n01/02/22 7:32 p. m. - Test Poland user: Thank you all guys!\n02/02/22 6:11 a. m. - +49 176 29067581 salió del grupo\n02/02/22 9:43 p. m. - Test Nicaragua user salió del grupo\n02/02/22 10:37 p. m. - +52 1 33 1808 1960 se unió usando el enlace de invitación de este grupo\n03/02/22 12:30 p. m. - Test Mexico user salió del grupo\n"

  # NOTE: dates are DD/MM/YY
  describe "prepare_list_from_contents/2" do
    test "it returns a list of strings from the file based upon the date needed" do
      list = Messages.prepare_list_from_contents(@contents, "10/12/21")

      assert String.contains?(Enum.at(list, 0), "10/12/21 10:24 a. m.")
      assert String.contains?(Enum.at(list, length(list) - 1), "03/02/22 12:30 p. m.")
    end

    test "it returns a list of strings from the file for the most recent date if the passed date cannot be found" do
      list = Messages.prepare_list_from_contents(@contents, "11/12/21")

      assert String.contains?(Enum.at(list, 0), "01/02/22 3:35 p. m.")
      assert String.contains?(Enum.at(list, length(list) - 1), "03/02/22 12:30 p. m.")
    end

    test "it returns a list of strings from the file and only uses the last line if the date passed is in the future" do
      list = Messages.prepare_list_from_contents(@contents, "10/01/29")

      assert String.contains?(Enum.at(list, 0), "03/02/22 12:30 p. m.")
      assert String.contains?(Enum.at(list, length(list) - 1), "03/02/22 12:30 p. m.")
    end
  end

  describe "prepare_list_from_contents/1" do
    test "it returns a list of strings from the file and uses the whole file if no date is passed" do
      list = Messages.prepare_list_from_contents(@contents)

      assert Enum.at(list, 0) == "1. Foo"
      assert String.contains?(Enum.at(list, length(list) - 1), "03/02/22 12:30 p. m.")
    end
  end
end
