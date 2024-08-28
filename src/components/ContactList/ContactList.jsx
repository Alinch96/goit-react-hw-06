import Contact from "../Contact/Contact.jsx"
import css from './ContactList.module.css'


const ContactList = ({contacts, onDelete}) => {
  return (
    <ul className={css["contact-list"]}>
          {contacts.map(contact => (
              <li key={contact.id} className={css["contactList-item"]}>
              <Contact contact={contact} onDelete={onDelete} />
              </li>
          ))}
    </ul>
  )
}

export default ContactList;