import React, { useEffect } from 'react'
import axios from "axios";
import { Link, useHistory, } from 'react-router-dom';


const SignOut = ({setSignOut, signOut}) => {
    const history = useHistory()

    const handleSigOut = (e)=>{
        setSignOut(!signOut)
        return history.push('/')
      }

      const logout =  (e) => {
        // e.preventDefault()
          axios.get('/logout')
              .then(res => console.log('user is successfully logout'))
              .catch(err => err);
             
            //   let path = "/login"; 
            //   let history = useHistory();
            //   history.push(path);
        }

    
    return (
        <>
            <div className="signOut">
                <div className="modal_content">
                   <div className="frame">
                   </div>
                   <h1>Sign Out Account</h1>
                   <div className="signOut_text">
                       Are you sure you want to sign out this account? You would have to sign in back to use the system.
                    </div>
                    <div className="button_group">
                        <button className="btn btn_signOut" type="submit" onClick={logout}>
                             Sign Out
                        </button>
                        {/* <Link to="/login" className="btn btn_signOut">Sign up</Link> */}

                        <button className="btn btn_signOut_outline" type="reset" onClick={handleSigOut} >
                        Cancel
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignOut
