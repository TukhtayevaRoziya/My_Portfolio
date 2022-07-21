<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
=======
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals'
import { HashRouter } from 'react-router-dom'
>>>>>>> 0cf6fd1575611366c3476634340333e9bd730cd3

import store from "./redux/store";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);

// r21122005q
reportWebVitals();
