import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import * as basePropTypes from 'src/lib/constants/propTypes/base';

import styles from './styles.module.scss';

function FileUpload({ dataTestId, name, setValue }) {
  const onDrop = useCallback(acceptedFiles => {
    setValue(name, acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className={ styles.Root } { ...getRootProps() }>
      <input
        data-testid={ dataTestId }
        accept="txt"
        { ...getInputProps() }
      />

      <Choose>
        <When condition={ isDragActive }>
          <p>dropping files...</p>
        </When>

        <Otherwise>
          <p>Drag ’n’ drop some files here, or click to select files</p>
        </Otherwise>
      </Choose>
    </div>
  );
}

FileUpload.propTypes = {
  dataTestId : basePropTypes.dataTestId,
  name       : basePropTypes.dataTestId,
  setValue   : basePropTypes.setValue.isRequired,
};

export default FileUpload;
