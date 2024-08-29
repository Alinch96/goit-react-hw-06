import { useId } from 'react';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, getNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const inputID = useId();
  const filter = useSelector(getNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={css['filter-wrapper']}>
      <label htmlFor="inputID">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        value={filter}
        id={inputID}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
