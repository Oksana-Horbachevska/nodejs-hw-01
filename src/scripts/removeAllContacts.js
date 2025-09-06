import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  const initContacts = [];
  await writeContacts(initContacts);
};

removeAllContacts();
