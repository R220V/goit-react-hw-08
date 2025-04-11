import { useDispatch, useSelector } from "react-redux";
import {fetchContacts} from "../../redux/contactsOps"
import { selectContacts, selectLoading, selectError } from "../../redux/contactsSlice";

import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

import css from './App.module.css';
import { useEffect } from "react";



export default function App() {
	const dispatch = useDispatch()
	const contacts = useSelector(selectContacts);
	const isLoading = useSelector(selectLoading)
	const isError = useSelector(selectError)

	useEffect(()=>{
		dispatch(fetchContacts())
	},[dispatch])

	//   console.log('Contacts:', contacts);

	  return (
		<div className={css.container}>
		  <h2>Phonebook</h2>
		  <ContactForm />
		  <SearchBox />
	  
		  {isError && <p className={css.error}>Error, plz reload page...</p>}
		  {isLoading && <p className={css.text}>Loading...</p>}
	  
		  {!isLoading && !isError && contacts.length === 0 && (
			<p className={css.empty}>There are no contacts</p>
		  )}
	  
		  {!isLoading && !isError && contacts.length > 0 && <ContactList />}
		</div>
	  );
	 }
