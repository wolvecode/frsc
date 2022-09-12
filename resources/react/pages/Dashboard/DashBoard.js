import React, { useEffect, useState } from "react";
import PageWrapper from "../../components/PageWrapper";
import { FaMarker } from "react-icons/fa";
import ProfilePic from "../../assest/image/userDone.png";
import UserDeatils from "./components/UserDeatils";
import AddOffense from "./components/AddOffense";
import Table from "./components/Table";
import FilesAndDocument from "./components/FilesAndDocument";
import Sort from "./components/Sort";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import TableRecord from "./components/TableRecord";
import SearchRecord from "../Search/components/SearchRecord";
import axios from "axios";
import AllOffense from "./components/AllOffense";
import Criminal from "./components/Criminal";
import NonCriminal from "./components/NonCriminal";
import * as Icon from "react-icons/gi";

const DashBoard = () => {
    const { path, url } = useRouteMatch();

    useEffect(() => {
        axios
            .post("/home/user/offense", { driver_id: 1})
            .then((res) => {
                console.log(res.data.data)
                setData(res.data.data);
            })
            .catch((err) => err);
    }, []);

    const [addOffence, setAddOffence] = useState(false);

    const [data, setData] = useState([]);

    const handleOffense = () => {
        setAddOffence(!addOffence);
    };

    return (
        <>
            <div className="page_content">
                <PageWrapper>
                    <div className="col_content">
                        <div className="heading">
                            <div className="heading_text">
                                <h3>Driver Record</h3>
                                <span>Enter crimes to record</span>
                            </div>
                            {/* <button className="btn" onClick={handleOffense}>
                                <span>
                                    <Icon.GiCheckMark />
                                </span>
                                Enter crimes to record
                            </button> */}
                        </div>
                        <hr className="line" />
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <UserDeatils />
                            <FilesAndDocument />
                        </div>

                        <h1 className="offenceRecord">Offense Records</h1>

                        <Sort data={data} setData={setData} />

                        <div className="offence_box">
                            <div className="offence_nav">
                                <NavLink
                                    to={`${url}`}
                                    className="navLink"
                                    activeClassName="dash_active"
                                >
                                    All Offences
                                </NavLink>
                                {/*<NavLink*/}
                                {/*    to={`${url}/criminal`}*/}
                                {/*    className="navLink"*/}
                                {/*    activeClassName="dash_active"*/}
                                {/*>*/}
                                {/*    Criminal Offenses*/}
                                {/*</NavLink>*/}

                                {/*<NavLink*/}
                                {/*    to={`${url}/nonCriminal`}*/}
                                {/*    className="navLink"*/}
                                {/*    activeClassName="dash_active"*/}
                                {/*>*/}
                                {/*    Non-Criminal Offenses*/}
                                {/*</NavLink>*/}
                            </div>

                            {addOffence ? (
                                <AddOffense
                                    setAddOffence={setAddOffence}
                                    addOffence={addOffence}
                                />
                            ) : null}

                            <hr className="" />
                            <div className="offence_result">
                                <Switch>
                                    <Route exact path={`${path}/`}>
                                        <NonCriminal data={data} />
                                    </Route>

                                    <Route to={`${path}/criminal`}>
                                        <Criminal data={data} />
                                    </Route>

                                    <Route exact path={`${path}/`}>
                                        <AllOffense data={data} />
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </PageWrapper>
            </div>
        </>
    );
};

export default DashBoard;
