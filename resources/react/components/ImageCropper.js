import React from "react";
import Profile from "../assest/image/use_pic.png";
import { FaCamera, FaTimes } from "react-icons/fa";

const ImageCropper = () => {
  return (
    <div>
      <div className="modal">
        <img src={Profile} alt="" />
        <div className="modal_layer">
          <div className="close_modal">
            
            <span>
              <FaTimes />
            </span>

          </div>
          <div className="face_box"></div>
          <div className="action">
            <div className="sub_action">
              {/* <i className="fas fas fa-camera"></i> */}
              <span>
                <FaCamera />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCropper;
