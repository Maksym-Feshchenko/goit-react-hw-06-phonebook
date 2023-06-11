import { useDispatch, useSelector } from 'react-redux';
import { addContact, removeContact, setFilter } from '../components/redux/contactsSlice';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filters/Filter';
import { nanoid } from 'nanoid';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);

  const addNewContact = (name, number) => {
    const newContact = { name, number, id: nanoid() };
    const isContactDuplicate = contacts.some(
      (contact) =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    if (isContactDuplicate) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact(newContact));
  };

  const removeContactHandler = (id) => {
    dispatch(removeContact(id));
  };

  const searchFilter = (value) => {
    dispatch(setFilter(value));
  };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm addNewContact={addNewContact} />
      <h2>Contacts</h2>
      <Filter onChange={searchFilter} />
      <ContactList contacts={contacts} removeContact={removeContactHandler} />
    </div>
  );
};

export default App;
