import React, { useState } from "react";
import Tumb from "../assest/image/tumb.png";
import { AiOutlineScan } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import Profile from "../assest/image/use_pic.png";
import fingerPrint from "../assest/image/fingerPrint.gif";
import PageWrapper from "./PageWrapper";
import { Link, Redirect, useHistory } from "react-router-dom";



const FingerPrint = ({finger, setFinger}) => {

  const history = useHistory();

  const [scaning, setScaning] = useState(false)
  const handleFinger = () =>{
    setFinger(!finger)
  }

  const handleScanning = () => {
    setScaning(!scaning);
    setTimeout(() => {
    return  history.push("/home/dashboard")
    }, 7000);
  }
  return (
    <>
      

            <div className="fingerPrint">
              
                <div className="modal_layer">
                    <div  className="close_modal" onClick={handleFinger} >
                      <span>
                        <FaTimes />
                      </span>
                    </div>
                    <div className="tumb">
                        <img src={scaning ? fingerPrint : Tumb } alt="finger print" />
                    </div>
                    <div  className="action" onClick={ handleScanning } >
                        <div className="sub_action">
                            <i className="fas fa-qrcode"></i>
                            <span  >
                                <AiOutlineScan />
                            </span>
                        </div>
                    </div>

                </div>
            </div>

    </>
  );
};

export default FingerPrint;
