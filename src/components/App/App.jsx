import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import RestrictedRoute from "../RestrictedRoute";
import PrivateRoute from "../PrivateRoute";
import css from './App.module.css'

const HomePage = lazy(() => import("../Pages/HomePage"));
const RegistrationPage = lazy(() =>
  import("../Pages/RegistrationPage")
);
const LoginPage = lazy(() => import("../Pages/LoginPage"));
const ContactsPage = lazy(() => import("../Pages/ContactsPage"));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <strong>Loading...</strong>
  ) : (
<Layout>
    <Suspense fallback={<div>Завантаження сторінки...</div>}>
		<Routes>

        	<Route path="/" element={<HomePage />} />

        	<Route 	path="/register"   	element={<RestrictedRoute           component={<RegistrationPage />}redirectTo="/contacts" /> } />
        
			<Route path="/login" element={<RestrictedRoute           component={<LoginPage />} redirectTo="/contacts" />}/>
          
		  	<Route path="/contacts" element={<PrivateRoute component={<ContactsPage />} redirectTo="/login" />} />

    	</Routes>
    </Suspense>
</Layout>
  );
}

