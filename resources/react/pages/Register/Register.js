import React, { useState } from "react";
import ContactAdress from "./ContactAdress";
import Upload from "./Upload";
import UserInfo from "./UserInfo";
import {
    NavLink,
    BrowserRouter as Router,
    Route,
    Switch,
    useRouteMatch,
} from "react-router-dom";
import UploadDone from "./UploadDone";
import { useHistory } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper";

const PrimaryInfo = () => {
    const history = useHistory();

    const [contact, setContact] = useState(false);
    const [upload, setUpload] = useState(false);
    const [primary, setPrimary] = useState(false);
    const { url } = useRouteMatch();

    const handleFinish = (e) => {
        e.preventDefault();
        localStorage.clear();
        //redirect to new register page
        return history.push("/home/dashboard");
        alert("Hello, you just clicked me");
    };

    return (
        <div className="page_content">
            <PageWrapper>
                <div className="col_content">
                    <div className="heading">
                        <div className="heading_text">
                            <h3>Register Driver</h3>
                            <span>Enter driver details</span>
                        </div>
                        <button onClick={handleFinish} className="btn">
                            Finish
                        </button>
                    </div>

                    <Router>
                        <div className="sub_content_box">
                            <div className="sub_content_heading">
                                <NavLink
                                    exact
                                    to={`${url}/`}
                                    activeClassName="active"
                                    className="sub_link"
                                >
                                    Primary information
                                </NavLink>

                                <NavLink
                                    exact
                                    to={`${url}/contact`}
                                    activeClassName="active"
                                    className="sub_link"
                                >
                                    Contact Address
                                </NavLink>

                                <NavLink
                                    exact
                                    to={`${url}/upload`}
                                    activeClassName="active"
                                    className="sub_link"
                                >
                                    Uploads
                                </NavLink>
                            </div>
                            <div className="sub_content_children">
                                <Switch>
                                    <Route exact path={`${url}/`}>
                                        <UserInfo />
                                    </Route>

                                    <Route exact path={`${url}/contact`}>
                                        <ContactAdress />
                                    </Route>

                                    <Route exact path={`${url}/upload`}>
                                        <Upload />
                                    </Route>

                                    <Route exact path={`${url}/uploaded`}>
                                        <UploadDone />
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                    </Router>
                </div>
            </PageWrapper>
        </div>
    );
};

export default PrimaryInfo;
