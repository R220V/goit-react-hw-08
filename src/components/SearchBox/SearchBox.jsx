import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filterSlice";

import css from './SearchBox.module.css';

export default function SearchBox () {

	const filter = useSelector((state) => state.filters.name);

	const dispatch = useDispatch();
	
	const handleFilter = (value) => {
	  dispatch(changeFilter(value));
	};

	return (
		<div className={css.search}>
			<label className={css.label}>Find name:</label>
			<input 
			type="text"
			value={filter} 
			onChange={(e) => handleFilter(e.target.value)}
			name = "search"/>
			<button  className={css.btn} onClick={() => handleFilter('')}>Clear</button>
		</div>
	)
};