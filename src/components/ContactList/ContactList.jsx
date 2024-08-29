import Contact from '../Contact/Contact.jsx';
import css from './ContactList.module.css';
import { getContacts } from '../../redux/contactsSlice.js';
import { getNameFilter } from '../../redux/filtersSlice.js';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getNameFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css['contact-list']}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={css['contactList-item']}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
