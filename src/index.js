import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bulma';
import '@fortawesome/fontawesome-free/css/all.css';
import './index.scss';
import App from './App';
import { Context } from './Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context>
    <App />
  </Context>
);
