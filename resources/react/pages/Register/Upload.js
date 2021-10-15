import React, { useState, useEffect } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { AiOutlineScan } from "react-icons/ai";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import Camera from 'react-html5-camera-photo';
import WebCam from "./components/WebCam";
// import 'react-html5-camera-photo/build/css/index.css';
// import ImageCropper from "../../components/ImageCropper";


const Upload = () => {
  const [uploadPic, setUploadPic] = useState(false);
  const [webCam, setWebCam] = useState(false);
  const [pic, setPic] = useState("");
  const { url } = useRouteMatch();
  // const history = useHistory()

  const handleUploadPic = () => {
    setUploadPic(!uploadPic);
  };

  const handleWeb = () => {
      setWebCam(true);
  }
  const handlePic = (e) => {
    setPic(e.target.value);
    console.log(pic);
  };

  function handleTakePhoto (dataUri) {
    // Do stuff with the photo...
  }


  return (
    <form className="user">
      <div className="form_row">
        {/* user info  */}
        <div className="form_group">
          <label htmlFor="surname">Upload Passport</label>
          <div>
            <label htmlFor="file" className="user_input upload" onClick={handleWeb} >
              Snap passport
              <span className="icon">
                <FaArrowAltCircleUp />
              </span>
              
            </label>

            <input
              type="file"
              hidden
              // id="file"
              name="profile_pic"
              className="file"
              
            />
          </div>
        </div>
      </div>
        {/* Webcam component*/}
        {/* <Camera
      onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
    /> */}

        {webCam ? <WebCam />: null }

        {/* <WebCam /> */}
        <div className="form_row">
        {/* user info  */}
        <div className="form_group">
          <label htmlFor="left">Scan Right Thumb</label>
          <div>
            <button className="user_input upload">
              Scan finger
              <span className="icon">
                <AiOutlineScan />
              </span>
            </button>
          </div>
        </div>
        <div className="form_group">
          <label htmlFor="left">Scan Left Thumb</label>
          <div>
            <button className="user_input upload">
              Scan finger
              <span className="icon">
                <AiOutlineScan />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="save">
        <div className="">
          <Link to={`${url}/home/uploaded`}>
            <button type="button">Save</button>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Upload;
