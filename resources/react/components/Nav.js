import React, { useState } from "react";
import Logo from "../assest/image/FRSC-logo.png";
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineScan,
  AiOutlineLogout,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import SignOut from "./SignOut";

const Nav = () => {
  const [signOut, setSignOut] = useState(false)
  const handleSignOut = (e) =>{
    e.preventDefault()
    setSignOut(!signOut)
  }
  return (
    <div className="page_content">
       {signOut?  <SignOut  setSignOut={setSignOut} signOut={signOut} />: null}
      <nav className="nav_content">
        <div className="logo">
            <NavLink to="/home" exact>
                <img src={Logo} alt="" />
            </NavLink>
        </div>

        <div className=" nav_item">
          <NavLink to="/home/register" activeClassName="active" exact>
            <span>
              <AiOutlineUser />
            </span>
            Register
          </NavLink>
        </div>

        <div className=" nav_item ">
          <NavLink to="/home/scan" activeClassName="active"  exact>
            <span>
              <AiOutlineScan />
            </span>
            Scan
          </NavLink>
        </div>

        <div className=" nav_item ">
          <NavLink to="/home/searchMain" activeClassName="active" exact >
            <span>
              <AiOutlineSearch />
            </span>
            Search
          </NavLink>
        </div>

        <div className=" nav_item  last">
          <NavLink to="/home/login" activeClassName="active" exact onClick={handleSignOut}  >
            <span>
              <AiOutlineLogout />
            </span>
            Logout
          </NavLink>
        </div>

      </nav>
    </div>
  );
};

export default Nav;
