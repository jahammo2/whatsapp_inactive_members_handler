import React, {useCallback} from 'react'
import { useForm } from "react-hook-form";

import * as phoneNumberPropTypes from 'src/lib/constants/propTypes/phoneNumber';

import FileUpload from 'src/ui/components/FileUpload';

import PhoneNumberRow from './PhoneNumberRow';
import styles from './styles.module.scss';

function PhoneNumbersAll(props) {
  const {
    handleSubmit,
    phoneNumbers,
  } = props;

  const { register, handleSubmit : formSubmit, setValue, watch, formState: { errors } } = useForm();

  return (
    <div className={ styles.Root }>
      <form onSubmit={formSubmit(handleSubmit)}>
        <h3>
          1. Export all contacts without archives <a href="https://faq.whatsapp.com/android/chats/how-to-save-your-chat-history/?lang=en">here</a>.
        </h3>

        <h3>
          Upload your messages file here:
        </h3>

        <FileUpload
          dataTestId="messages-file-upload-area"
          name="messagesFile"
          setValue={ setValue }
        />

        <h3>
          Choose your start date.
        </h3>

        <input
          className={ styles.StartDateInput }
          data-testid="start-date"
          type="text"
          {...register("startDate")}
        />

        <h3>
          Upload your contacts file here:
        </h3>

        <FileUpload
          dataTestId="contacts-file-upload-area"
          name="contactsFile"
          setValue={ setValue }
        />

        <div><input type="submit" /></div>
      </form>

      <h3>Phone Numbers:</h3>

      <If condition={ phoneNumbers }>
        <ul>
          <For each="phoneNumber" of={ phoneNumbers }>
            <PhoneNumberRow
              phoneNumber={ phoneNumber }
              key={ phoneNumber.get('id') }
            />
          </For>
        </ul>
      </If>
    </div>
  );
}

PhoneNumbersAll.propTypes = {
  phoneNumbers : phoneNumberPropTypes.phoneNumbers.isRequired,
};

export default PhoneNumbersAll;
