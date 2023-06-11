import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/contactsSlice';

const Filter = ({ onChange }) => {
  const dispatch = useDispatch();

  const searchFilter = (e) => {
    dispatch(setFilter(e.target.value));
    onChange(e.target.value);
  };

  return (
    <label>
      Find contacts by name
      <input
        placeholder="Enter a name"
        type="text"
        name="filter"
        onChange={searchFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Filter;
