import React from "react";

import { AiOutlineScan } from "react-icons/ai";
import { FaFingerprint, FaTrashAlt } from "react-icons/fa";
import user from "../../assest/image/userDone.png";
import tumb from "../../assest/image/figPrint.svg";

const UploadDone = () => {
  return (
    <form className="user">
      <div className="form_row">
        {/* user info  */}

        <div className="form_group ">
          <label htmlFor="surname">Passport</label>
          <div className="uploaded_img">
            <img src={user} alt="" />
          </div>
        </div>
      </div>

      <div className="form_row">
        {/* user info  */}

        <div className="form_group uploaded">
          <label htmlFor=""> Scan Right Thumb </label>

          <div className="uploaded_bttom">
            <div className="scanned">
              <span>
                <FaTrashAlt />
              </span>

              <FaFingerprint />
            </div>
          </div>
        </div>

        <div className="form_group">
          <label htmlFor="surname">Scan Left Thumb</label>
          <div className="uploaded_bttom">
            <div className="scanned">
              <span>
                <FaTrashAlt />
              </span>

              <FaFingerprint />
            </div>
          </div>
        </div>
      </div>
      <div className="save">
        <div className="">
          <button>Save</button>
        </div>
      </div>
    </form>
  );
};

export default UploadDone;
