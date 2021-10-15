import axios from "axios";
import React, { useEffect, useState } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import ImagePreview from "./ImagePreview";

const WebCam = ({ setPreview, preview, WebCam, setWebCam }) => {
    const [dataUri, setDataUri] = useState("");

    function handleTakePhotoAnimationDone(dataUri) {
        setDataUri(dataUri);
        setPreview(true);
        setWebCam(false);
    }

    useEffect(() => {
        localStorage.setItem("image", JSON.stringify(dataUri));
    }, [dataUri]);

    const isFullscreen = true;
    return (
        <div className="webcam">
            {dataUri ? null : (
                <div className="camera">
                    <Camera
                        onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
                    />
                </div>
            )}
        </div>
    );
};

export default WebCam;
