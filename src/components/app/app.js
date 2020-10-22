import React from "react";
import { Switch, Route } from "react-router-dom";
import { HeaderContainer, FooterContainer } from "../../containers";
import { HomePage, CartPage, ProductDetailsPage, RegistrationPage, LoginPage } from "../pages";

import "./app.css";

const App = () => {
    return (
        <div className="app">
            <HeaderContainer />
            <Switch>
                <Route path="/sardormarket/" component={HomePage} exact />
                <Route path="/cart" component={CartPage} />
                <Route path="/products/:id" component={ProductDetailsPage} />
                <Route path="/account/registration" component={RegistrationPage} />
                <Route path="/account/login" component={LoginPage} />
            </Switch>
            <FooterContainer />
        </div>
    )
};

export default App;