import React, { useState } from "react";
import quote from "../assest/image/d_quote.png";
import {Link, NavLink} from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineScan,
  AiOutlineLogout,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { FaSignOutAlt } from "react-icons/fa";

import Logo from "../assest/image/FRSC-logo.png";
import Dquote from "../assest/image/d_quote.png";
import dwn_quote from "../assest/image/quote_bottom.png";
import SignOut from "../components/SignOut";

const MainMenu = () => {
  const [signOut, setSignOut] = useState(false)
  const handleSigOut = ()=>{
    setSignOut(!signOut)
  }
  return (
    <div className="row sign_up">
      <div className="col auth">
        <div className="col-text-content">
          <div>
            <img src={quote} alt="quote" />
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
            <NavLink to="/home" exact>
                <img src={Logo} alt="" className="logo" />
            </NavLink>
        </div>
        <div className=" welcome_page">
          <h3>Welcome!</h3>
          <div className="info">
            To begin, select action you want to proceed with.
          </div>

          {/* <!-- BOX SHADOW  --> */}
          <Link to="/home/register" className="option_box">
            <div className="option_box_img">
              <span>
                <AiOutlineUser />
              </span>
            </div>

            <div className="option_box_des">
              <div className="title">Register</div>
              <div className="title_info">
                Click here to register new drivers details.
              </div>
            </div>
            <div className="right_arrow">
              <span>
                <AiOutlineArrowRight />
              </span>
            </div>
          </Link>

          {/* <!-- Box shadow   --> */}

          <Link to="/home/Scan" className="option_box">
            <div className="option_box_img">
              <span>
                <AiOutlineScan />
              </span>
            </div>

            <div className="option_box_des">
              <div className="title">Scan</div>
              <div className="title_info">
                Click to here search for drivers details from record.
              </div>
            </div>
            <div className="right_arrow">
              <span>
                <AiOutlineArrowRight />
              </span>
            </div>
          </Link>

          {/* <!-- BOX SHADOW --> */}
          <Link to="/home/searchMain" className="option_box">
            <div className="option_box_img">
              <span>
                <AiOutlineSearch />
              </span>
            </div>

            <Link to="/home/searchMain" className="option_box_des">
              <div className="title">Search</div>
              <div className="title_info">
                Click to here search through all records in the database.
              </div>
            </Link>

            <div className="right_arrow">
              <span>
                <AiOutlineArrowRight />
              </span>
            </div>
          </Link>

          {/* <!-- BOX SHADOW  --> */}

          <div className="option_box last" onClick={handleSigOut} >
            <div className="option_box_img ">
              {/* <span> */}
              <FaSignOutAlt />
              {/* </span> */}
            </div>

            <div className="option_box_des"  >
              <div className="title red">Sign Out</div>
              <div className="title_info ">
                  Click here to sign out your account from the platform.
              </div>
            </div>

            <div className="right_arrow red">
              <span>
                <AiOutlineArrowRight />
              </span>
            </div>


          </div>

          {/* SIGN OUT MODAL */}
          { signOut ? <SignOut signOut={signOut} setSignOut={setSignOut}  /> : null }
        </div>
        {/* <div className="water_mark">
          By Jimoh Lawal
          <br />
          17/47CS/707
        </div> */}
      </div>
    </div>
  );
};

export default MainMenu;
