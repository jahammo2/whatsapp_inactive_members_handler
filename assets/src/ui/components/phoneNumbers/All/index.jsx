import React from 'react';
import { useForm } from 'react-hook-form';

import * as basePropTypes from 'src/lib/constants/propTypes/base';
import * as phoneNumberPropTypes from 'src/lib/constants/propTypes/phoneNumber';

import FileUpload from 'src/ui/components/FileUpload';

import PhoneNumberRow from './PhoneNumberRow';
import Step from './Step';
import styles from './styles.module.scss';

function PhoneNumbersAll(props) {
  const {
    handleSubmit,
    hasError,
    phoneNumbers,
  } = props;

  const { register, handleSubmit : formSubmit, setValue } = useForm();

  return (
    <div className={ styles.Root }>
      <h1>See who has been inactive in your WhatsApp group starting with a certain date.</h1>
      <p className={ styles.SubPara }>It is assumed your phone is in a language that uses the date format DD/MM/YY.</p>

      <form onSubmit={ formSubmit(handleSubmit) }>
        <Step title="1. Export all messages from the group. Choose 'without archives'. Instructions here:">
          <a href="https://faq.whatsapp.com/android/chats/how-to-save-your-chat-history/?lang=en">
            https://faq.whatsapp.com/android/chats/how-to-save-your-chat-history/?lang=en
          </a>
        </Step>

        <Step title="2. Export all contacts from the group. Instructions here:">
          <a href="https://chrome.google.com/webstore/detail/waxp-contacts-exporter-fo/mdpelimehdooponahfdneckpfnooebii/related?hl=en">
            https://chrome.google.com/webstore/detail/waxp-contacts-exporter-fo/mdpelimehdooponahfdneckpfnooebii/related?hl=en
          </a>
        </Step>

        <Step title="3. Convert your contacts file to a .txt file. First, upload the contacts excel file. Then click 'Download'.">
          <a href="https://beautifytools.com/excel-to-json-converter.php">
            https://beautifytools.com/excel-to-json-converter.php
          </a>
        </Step>

        <Step title="4. Upload your messages .txt file here:">
          <FileUpload
            dataTestId="messages-file-upload-area"
            name="messagesFile"
            setValue={ setValue }
          />
        </Step>

        <Step title="5. Choose your date for when someone must have posted a message or joined the group by. The date format must be DD/MM/YY. For example, if you choose 15/06/21, then you will see which people have not posted anything or joined since June 15th, 2021 but are still in your group.">
          <input
            className={ styles.StartDateInput }
            data-testid="start-date"
            type="text"
            { ...register('startDate') }
          />
        </Step>

        <Step title="6. Upload your contacts .txt file here:">
          <FileUpload
            dataTestId="contacts-file-upload-area"
            name="contactsFile"
            setValue={ setValue }
          />
        </Step>

        <Step title="7. What's the first contact's number that is not saved in your phone? This will appear in the group members list. If the number is a +1 number, the format must be '+1 (555) 555-5555'.">
          <input
            className={ styles.StartingContactInput }
            data-testid="starting-unsaved-contact"
            type="text"
            { ...register('startingUnsavedContact') }
          />
        </Step>

        <div><input type="submit" /></div>
      </form>

      <If condition={ hasError }>
        <div className={ styles.ErrorContainer }>
          <h4>You must:</h4>

          <ul>
            <li>* Upload a .txt messages file</li>
            <li>* Upload a .txt contacts file</li>
            <li>* Add a starting contact</li>
          </ul>
        </div>
      </If>

      <If condition={ phoneNumbers && phoneNumbers.size > 0 }>
        <div className={ styles.PhoneNumbersContainer }>
          <h2>Inactive Phone Numbers:</h2>

          <ul>
            <For each="phoneNumber" of={ phoneNumbers }>
              <PhoneNumberRow
                phoneNumber={ phoneNumber }
                key={ phoneNumber }
              />
            </For>
          </ul>
        </div>
      </If>
    </div>
  );
}

PhoneNumbersAll.propTypes = {
  handleSubmit : basePropTypes.handleSubmit.isRequired,
  hasError     : basePropTypes.hasError,
  phoneNumbers : phoneNumberPropTypes.phoneNumbers.isRequired,
};

export default PhoneNumbersAll;
