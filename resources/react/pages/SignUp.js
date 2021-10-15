import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dquote from "../assest/image/d_quote.png";
import dwn_quote from "../assest/image/quote_bottom.png";
import Logo from "../assest/image/FRSC-logo.png";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import axios from "axios";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [shouldRedirect, setShouldRedirect] = useState(false);

  if (shouldRedirect) {
      window.location = shouldRedirect;
  }

  const handleShow = () => {
    setShow(!show);
  };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

  const handleSubmit = (e) => {
      event.preventDefault();

      const dataToSubmit = {
          email: email,
          password: password,
      };

      axios.post( '/login', dataToSubmit)
          .then(res => setShouldRedirect(res.data.nextURL))
          .catch(() => alert('Email or password is incorrect'))

  }

  return (
    <div className="row sign_up">
      <div className="col auth">
        <div className="col-text-content">
          <div>
            <img src={Dquote} alt="" className="" />
          </div>

          <div className="info">
            The economic waste resulting from carelessness is appalling, but
            anyone who stops for a moment to consider the sorrow and desolation
            which is brought into thousands of lives each year by utter
            thoughtlessness must feel a new resolve to make a habit of
            <span>“Safety First”</span>
            <div className="name">
              W. C. Durant <i> oo </i>
            </div>
          </div>
          <div className="dwn_quote">
            <img src={dwn_quote} alt="" className="" />
          </div>
        </div>
      </div>

      {/* <!-- second coloum --> */}

      <div className="col col-form-content">
        <div className="logo">
          <img src={Logo} alt="" className="logo" />
        </div>
        <div className=" col_box ">
          <h3>Sign In</h3>
          <div className="info">To use the platform, sign in is required.</div>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className="form_group">
              <label htmlFor="">Enter Email</label>
              <input
                type="email"
                name="email"
                className="input"
                onChange={handleEmail}
                placeholder="jimohlawal@frsc.ng"
              />
            </div>
            <div className="form_group">
              <label htmlFor="">Enter Password</label>
              <span>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  onChange={handlePassword}
                  className="input"
                  placeholder="Password"
                />
                <i onClick={handleShow}>{show ? <FaEyeSlash /> : <FaEye />}</i>
              </span>
            </div>
            <div className="btn_box">
                {/**
                    Make this a button that submits asynchronously. Then if successful, it means
                    Laravel has started an authentication session and you can redirect the user
                    to the Dashboard. You get?
                 **/}
              <div className="btn">
                <button type="submit">Sign Up</button>
              </div>
            </div>
            <div className="lock_info">
              <i>
                <FaLock />
              </i>
              Your Info is safely secured
            </div>
          </form>
        </div>
        <div className="water_mark">
          By Jimoh Lawal
          <br />
          17/47CS/707
        </div>
      </div>
    </div>
  );
};

export default SignUp;
