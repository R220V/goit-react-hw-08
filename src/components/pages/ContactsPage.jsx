import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../PageTitle/PageTitle";
import ContactList from "../ContactList/ContactList";
import ContactEditor from "../ContactEditor/ContactEditor";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";

import SearchBox from "../SearchBox/SearchBox";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <PageTitle>Your contacts</PageTitle>
      <ContactEditor />
      < SearchBox />
      <div>{loading && "Request in progress..."}</div>
           <ContactList />
    </>
  );
}
