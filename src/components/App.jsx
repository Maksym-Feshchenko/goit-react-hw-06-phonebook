import ContactList from './ContactList/ContactList';
import Filter from './Filters/Filter';
import ContactForm from './ContactForm/ContactForm';

export const App = () => {
  return (
    <div className='container'>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};