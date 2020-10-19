import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { OganiServiceProvider } from "./components/ogani-service-context";
import { BrowserRouter as Router } from "react-router-dom";

import ErrorBoundry from "./components/error-boundry";

import store from "./store";
import GrocerystoreService from "./services";
import App from "./components/app";

const grocerystoreService = new GrocerystoreService();


ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <OganiServiceProvider value={grocerystoreService}>
                <Router>
                    <App />
                </Router>
            </OganiServiceProvider>
        </ErrorBoundry>
    </Provider>, document.getElementById('root')
);