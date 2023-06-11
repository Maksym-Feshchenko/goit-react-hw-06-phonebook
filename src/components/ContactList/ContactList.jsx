import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContact } from '../redux/contactsSlice';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const removeContactHandler = (id) => {
    dispatch(removeContact(id));
  };

  return (
    <ul>
      {Array.isArray(contacts) &&
        contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button
              data-id={id}
              onClick={() => removeContactHandler(id)}
              type="button"
              className='Button'
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};

export default ContactList;
