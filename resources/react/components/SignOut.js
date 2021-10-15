import React, { useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const SignOut = ({ setSignOut, signOut }) => {
    const history = useHistory();

    const handleSigOut = (e) => {
        e.preventDefault();
        setSignOut(!signOut);
        return history.push("/home");
    };

    const logout = (e) => {
        e.preventDefault();

        axios
            .get("/logout")
            .then((res) => {
                history.push("/login");
                alert("User logout");
            })
            .catch((err) => err);
    };

    return (
        <>
            <div className="signOut">
                <div className="modal_content">
                    <div className="frame"></div>
                    <h1>Sign Out Account</h1>
                    <div className="signOut_text">
                        Are you sure you want to sign out this account? You
                        would have to sign in back to use the system.
                    </div>
                    <div className="button_group">
                        <button
                            className="btn btn_signOut"
                            type="submit"
                            onClick={logout}
                        >
                            Sign Out
                        </button>
                        {/* <Link to="/login" className="btn btn_signOut">Sign up</Link> */}

                        <button
                            className="btn btn_signOut_outline"
                            type="submit"
                            onClick={handleSigOut}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignOut;
