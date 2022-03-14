import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <>
      <Routes>
        <Route path="/" component={App} />
      </Routes>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);