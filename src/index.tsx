import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './styles/global.css'
import { Header } from './components/Header'
import { Main } from './pages/Main';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Header />
    {/* <Main /> */}
  </React.StrictMode>
);