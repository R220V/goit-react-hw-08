import { Formik, Form, Field, ErrorMessage } from 'formik';
import { addContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";


import * as Yup from 'yup';
import css from './ContactForm.module.css'; 

const ContactSchema = Yup.object().shape({
name:
	 Yup.string()
	 	.trim()
        .min(4, 'Must be at least 4 characters')
        .max(20, 'Must be less  than 20 characters')
        .required('This field is required'),
number: 
	 Yup.string()
		.min(7, 'Must be at least 7 characters')
		.max(14, 'Must be less  than 13 characters')
		// .matches(/^\d+$/, "Тільки цифри!")
		
		.matches(
			/^(?:\(\d{3}\)[*-\s.]?\d{3}[*-\s.]?\d{2}[*-\s.]?\d{2}|\d{3}[*-.\s]?\d{2}[*-\s.]?\d{2}|\d{3}[*-.\s]?\d{3}[*-.\s]?\d{2}[*-.\s]?\d{2})$/,
			"format: 111-11-11 or 097-11-11-11")
		
		.required('This field is required')
})

export default function ContactForm(){

	const dispatch = useDispatch();

	const handleSubmit = (values, actions) => {
		
	 dispatch(addContact(( values)));
    actions.resetForm();

	
	
  }
  return (
	<Formik   initialValues={{
        name: '',
        number: '',
      }}  
	  onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
	<Form className = {css.form}>
		<div className = {css.group}>
			
			<label className = {css.label}> Name: </label>
				<Field name='name' type='text'/>
				<ErrorMessage className={css.error} component="span" name="name" />
		</div>

		<div className = {css.group}>
			
			<label className = {css.label}> Number: </label>
				<Field name='number' type='tel'/>
				<ErrorMessage className={css.error} component="span" name="number" />
		</div>
		<button className={css.button} type="submit">
          Add Contact
        </button>
	</Form>

	</Formik>
  )
  
};