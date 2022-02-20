import loadDataUrlAndCall from './loadDataUrlAndCall';

async function readFile(file) {
  if (!file) return null;

  const { io } = await loadDataUrlAndCall(file);
  const { name, size, type } = file;

  return { io, name, size, type };
}

async function buildValuesFromElementsWithFiles(values) {
  const messagesFile = await readFile(values.messagesFile);
  const contactsFile = await readFile(values.contactsFile);

  return {
    ...values,
    messagesFile,
    contactsFile,
  };
}

export default buildValuesFromElementsWithFiles;
