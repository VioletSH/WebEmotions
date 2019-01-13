import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom";
import Main from './components/Main';
import './index.css'

render(
    <Router>
      <Main />
    </Router>,
    document.getElementById("root")
  );
