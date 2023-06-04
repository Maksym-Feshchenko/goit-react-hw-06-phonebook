import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filters/Filter';
import { nanoid } from 'nanoid';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(storedContacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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

    setContacts([...contacts, newContact]);
  };

  const searchFilter = (filter) => {
    setFilter(filter);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const removeContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm addNewContact={addNewContact} />
      <h2>Contacts</h2>
      <Filter searchFilter={searchFilter} />
      <ContactList contacts={filteredContacts} removeContact={removeContact} />
    </div>
  );
};

export default App;
