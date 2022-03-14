import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
/**
 * Lectuere 16
 * Lecture 17
 * Lecture 18 
 * Lecture 19
 * Lecture 20
 * Lecture 21
 * Its a simple Blog Project
 */
ReactDOM.render(
  <Router>
    <Route path="/" component={App}></Route>
  </Router>,
  document.getElementById('root')
);
