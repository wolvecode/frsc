import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";

const LoginApp = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' component={SignUp} />
            </Switch>
        </Router>
    )
}

ReactDOM.render(<LoginApp />, document.getElementById("root"));
