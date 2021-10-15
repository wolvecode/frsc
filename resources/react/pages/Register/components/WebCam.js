import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import ImagePreview from './ImagePreview';

const WebCam = () => {
    const [dataUri, setDataUri] = useState('')

    useEffect(() => {
       
      axios.post('/home/register/upload', { left_thumb : 'dhdhd', right_thumb:  'dgdgd',driver_id: localStorage.getItem('created_id'), passport : dataUri} )
      .then(res => {
      })
      .catch(err => err);
  }, [{dataUri}])

    function handleTakePhotoAnimationDone (dataUri) {
        setDataUri(dataUri);
      }

      const isFullscreen = true;
    return (
        <div className="webcam">
            {
                (dataUri) ? (<ImagePreview dataUri={dataUri}     isFullscreen={isFullscreen} /> )  : (<div className="camera">  <Camera onTakePhotoAnimationDone = {handleTakePhotoAnimationDone}
                  style={{display: "none"}}
                /> </div>)
            }
        </div>
    )
}

export default WebCam
