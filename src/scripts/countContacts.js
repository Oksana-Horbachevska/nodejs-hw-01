import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const contacts = await readContacts();
  return contacts.length + 1;
};

console.log(await countContacts());
