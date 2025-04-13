import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.filters.name);

  const handleSearchChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  const handleClear = () => {
    dispatch(changeFilter(''));
  }
  return (
    <div className={css.search}>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.field}
        name="filter"
        type="text"
		value={filter}
        onChange={handleSearchChange}
        placeholder="Search contacts"
      />
	   <button className={css.btn} onClick={handleClear}>
          Clear
        </button>
    
    </div>
  );
};
export default SearchBox;

