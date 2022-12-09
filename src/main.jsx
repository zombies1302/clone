import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from "react-toastify";
import app from "./app/firebase/firebaseConfig";
import { store, persistor } from './app/redux/store';
import setupInterceptors from './app/axios/setupInterceptors';

import routes from './routes/routes';

import './index.css';
import "react-toastify/dist/ReactToastify.css";


setupInterceptors(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      <RouterProvider router={routes} />
    </PersistGate>
  </Provider>
);
