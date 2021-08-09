import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import tw from "twin.macro";
import Header from "./components/app/Header";
import Footer from "./components/app/Footer";
import Home from "./views/Home";
import Placeholder from "./views/Placeholder";
import "./index.css";
import Insights from "./views/Insights";
import PrivacyDashboard from "./views/PrivacyDashboard";
import Authentication from "./views/Authentication";
import Profile from "./views/Profile";

const GlobalStyle = tw.div`bg-primary-background text-primary-text`;


ReactDOM.render(
    <GlobalStyle>
        <Router>
            <Header/>
            <Switch>
                <Route path="/authentication" exact render={() => <Authentication/>}/>
                <Route path="/privacy" exact render={() => <PrivacyDashboard/>}/>
                <Route path="/insights" exact render={() => <Insights/>}/>
                <Route path="/profile" exact render={() => <Profile/>}/>
                <Route path="/imprint" exact render={() => <Placeholder/>}/>
                <Route path="/gdpr" exact render={() => <Placeholder/>}/>
                <Route path="/" render={() => <Home/>}/>
            </Switch>
            <Footer/>
        </Router>
    </GlobalStyle>,
    document.getElementById('root')
);



