import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/contactsSlice";

import css from "./ContactList.module.css"
import Contact from "../Contact/Contact";

export default function ContactList() {

	const contacts = useSelector(selectFilter);
  
	return (
		<>

		<ul className={css.list}>

		{contacts

          .map((contact) => (
			<li className={css.item} key={contact.id}>
			<Contact contact={contact}/>
			</li>
			))}
		</ul>
		</>
	)
}
