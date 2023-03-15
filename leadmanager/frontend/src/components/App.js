import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Header from "./layouts/Header";
import Dashboard from "./leads/Dashboard";
import Alerts from "./layouts/Alerts";
import Register from "./accounts/Register";
import Login from "./accounts/Login";
import PrivateRoute from "./common/PrivateRoute";

import { Provider } from "react-redux";
import store from "../store";

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: "top center",
};

const App = () => {
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Router>
          <>
            <Header />
            <Alerts />
            <div className="container">
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  }
                />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
              </Routes>
            </div>
          </>
        </Router>
      </AlertProvider>
    </Provider>
  );
};
export default App;
