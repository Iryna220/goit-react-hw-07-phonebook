import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contactSelectors';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import css from './App.module.css';
import Notification from './Notification/Notification';

function App() {
  const contacts = useSelector(getContacts);
  const isContacts = Boolean(contacts.length);

  return (
    <div className={css.phonebookSection}>
      <h1 className={css.phonebookTitle}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.phonebookContacts}>Contacts</h2>
      <div className={css.allContacts}>All contacts: {contacts.length}</div>
      {isContacts ? (
        <div>
          <Filter />
          <ContactList />
        </div>
      ) : (
        <Notification message="Contact list is empty" />
      )}
    </div>
  );
}

export default App;
