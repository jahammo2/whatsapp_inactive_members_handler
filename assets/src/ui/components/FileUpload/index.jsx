import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

import styles from './styles.module.scss';

function FileUpload({ dataTestId, name, setValue }) {
  const onDrop = useCallback((acceptedFiles, foo) => {
    setValue(name, acceptedFiles[0]);
    console.log('foo', foo, acceptedFiles);
  }, [])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input
        data-testid={ dataTestId }
        accept="txt"
        { ...getInputProps() }
      />

      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  );
}

FileUpload.propTypes = {
};

export default FileUpload;
