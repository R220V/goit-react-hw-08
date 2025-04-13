import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor} from './redux/store';
import { PersistGate } from "redux-persist/integration/react";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import 'modern-normalize';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <div >
    <h2  style={{ color: 'teal', display:'flex'}}>   Homework №8 </h2>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
      </PersistGate>
    </Provider>
      </div>
  </React.StrictMode>
);