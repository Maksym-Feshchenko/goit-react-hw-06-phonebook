import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from '../../redux/filterSlice';

const Filter = function () {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <label>
      Find contacts by name
      <input
        placeholder="Enter a name"
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(addFilter(e.currentTarget.value))}
      />
    </label>
  );
};

export default Filter;