import React, { useState, useEffect } from "react";
import { FaArrowAltCircleUp, FaFingerprint, FaTrashAlt } from "react-icons/fa";
import { AiOutlineScan } from "react-icons/ai";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import Camera from "react-html5-camera-photo";
import WebCam from "./components/WebCam";
import FingerPrint from "./components/FingerPrint";
import user from "../../assest/image/userDone.png";
import Webcam from "react-webcam";
import axios from "axios";

// import 'react-html5-camera-photo/build/css/index.css';
// import ImageCropper from "../../components/ImageCropper";

const Upload = () => {
    const history = useHistory();
    const [uploadPic, setUploadPic] = useState(false);
    const [webCam, setWebCam] = useState(false);
    const [pic, setPic] = useState("");
    const [finger, setFinger] = useState(false);

    const [checkLeft, SetCheckLeft] = useState(false);
    const [checkRight, SetCheckRight] = useState(false);
    const [preview, setPreview] = useState(false);

    const { url } = useRouteMatch();

    const handleUploadPic = () => {
        setUploadPic(!uploadPic);
    };

    const handleWeb = () => {
        setWebCam(true);
    };
    const handlePic = (e) => {
        setPic(e.target.value);
        console.log(pic);
    };
    const handleFinger = () => {
        setFinger(!finger);
    };

    const handlePreview = () => {
        setWebCam(true);
        // setPreview(true);
    };

    const handleCheckLeft = () => {
        SetCheckLeft(true);
        setFinger(!finger);
    };

    const handleCheckRight = () => {
        SetCheckRight(true);
        setFinger(!finger);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("/home/register/upload", {
                left_thumb: "dhdhd",
                right_thumb: "dgdgd",
                driver_id: localStorage.getItem("created_id"),
                passport: localStorage.getItem("image"),
            })
            .then((res) => {
                alert("picure uploaded");
                localStorage.clear();
                history.push("/home/scan");
            })
            .catch((err) => err);
    };

    const image = JSON.parse(localStorage.getItem("image"));

    return (
        <div>
            {finger ? (
                <FingerPrint setFinger={setFinger} finger={finger} />
            ) : (
                <form className="user">
                    <div className="webcam">
                        {webCam ? (
                            <WebCam
                                setPreview={setPreview}
                                preview={preview}
                                setWebCam={setWebCam}
                                webCam={Webcam}
                            />
                        ) : null}
                    </div>
                    <div className="form_row">
                        {/* user info  */}
                        {preview ? (
                            <div className="form_group ">
                                <label htmlFor="surname">Passport</label>
                                <div className="uploaded_img">
                                    <img src={image} alt="" />
                                </div>
                            </div>
                        ) : (
                            <div className="form_group">
                                <label htmlFor="surname">Upload Passport</label>
                                <div>
                                    <label
                                        htmlFor="file"
                                        className="user_input upload"
                                        onClick={handlePreview}
                                    >
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
                        )}
                    </div>

                    <div className="form_row">
                        {/* check if the fingerPrint box have been clicked */}

                        {checkLeft ? (
                            <div className="form_group">
                                <label htmlFor="surname">Left Thumb</label>
                                <div className="uploaded_bttom">
                                    <div className="scanned">
                                        <span>
                                            <FaTrashAlt />
                                        </span>

                                        <FaFingerprint />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="form_group">
                                <label htmlFor="left">Scan Right Thumb</label>
                                <div>
                                    <button
                                        type="button"
                                        className="user_input upload"
                                        onClick={handleCheckLeft}
                                    >
                                        Scan finger
                                        <span className="icon">
                                            <AiOutlineScan />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* check if the fingerPrint box have been clicked */}

                        {checkRight ? (
                            <div className="form_group uploaded">
                                <label htmlFor=""> Right Thumb </label>

                                <div className="uploaded_bttom">
                                    <div className="scanned">
                                        <span>
                                            <FaTrashAlt />
                                        </span>

                                        <FaFingerprint />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="form_group">
                                <label htmlFor="left">Scan Right Thumb</label>
                                <div>
                                    <button
                                        type="button"
                                        className="user_input upload"
                                        onClick={handleCheckRight}
                                    >
                                        Scan finger
                                        <span className="icon">
                                            <AiOutlineScan />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="save">
                        <div className="">
                            <button onClick={handleSubmit} type="button">
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
};

export default Upload;
