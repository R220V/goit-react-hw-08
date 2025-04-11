import { useDispatch } from "react-redux";
import { FaUser, FaPhone } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsOps";

import css from './Contact.module.css'

export default function Contact({ contact }) {
  
	const dispatch = useDispatch();
	
	const handleDelete = (id) => {
		dispatch(deleteContact(id));
	  };

	return (
	<div className={css.contact}>
		<div className={css.contcont}>
			<h2 className={css.info}> 
			<FaUser className={css.icon} /> 
			&nbsp; {contact.name}</h2>
			<p className={css.info}><FaPhone  className={css.icon}/> &nbsp; {contact.numder}</p>
		</div>
			<button className={css.del}onClick={() => handleDelete(contact.id)}>Delete</button>
	</div>
	)	
}
