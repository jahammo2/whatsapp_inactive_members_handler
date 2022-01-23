import React from 'react';
import { useForm } from 'react-hook-form';

import ButtonSubmit from 'src/components/buttons/ButtonSubmit';
import TextField from 'src/components/fields/TextField';

import styles from './styles.module.scss';

function CostingRequestsNew(props) {
  const {
    errors,
    handleSubmit,
    isActive,
  } = props;

  const { handleSubmit: formSubmit, getValues, register, setValue } = useForm();

  const onSubmit = formSubmit(handleSubmit);

  return (
    <div className={ styles.Root }>
      <h3>New Costing Request</h3>

      <form onSubmit={ onSubmit }>
        <TextField
          disabled={ isActive }
          errorMessages={ errors && errors.get('opportunityId') }
          htmlFor="opportunityId"
          name="opportunityId"
          placeholder="Opportunity Id"
          register={ register }
        />

        <TextField
          disabled={ isActive }
          errorMessages={ errors && errors.get('boxFileLocation') }
          htmlFor="boxFileLocation"
          name="boxFileLocation"
          placeholder="Box File Location"
          register={ register }
        />

        <ButtonSubmit value="Save" />
      </form>
    </div>
  );
}

export default CostingRequestsNew;
