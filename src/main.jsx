import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {store} from './redux/store.js'
import { Provider } from "react-redux";

import App from './components/App/App.jsx';
import './index.css';
import 'modern-normalize';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h2 style={{textAlign: 'center'}}>Homework #7</h2>
    <hr/>
    <Provider store={store}>
         <App />
    </Provider>
  </StrictMode>
)
