import { useId } from 'react';
import css from './SearchBox.module.css'

const SearchBox = ({ filter, setFilter }) => {
  const inputID = useId();
  return (
    <div className={css['filter-wrapper']}>
      <label htmlFor="inputID">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        value={filter}
        id={inputID}
        onChange={e => setFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
