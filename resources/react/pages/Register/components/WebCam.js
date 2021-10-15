import React, { useState } from 'react'
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import ImagePreview from './ImagePreview';

const WebCam = () => {
    const [dataUri, setDataUri] = useState('')

    function handleTakePhotoAnimationDone (dataUri) {
        console.log('takePhoto');
        setDataUri(dataUri);
      }

      const isFullscreen = true;
    return (
        <div>
            {
                (dataUri) ? (<ImagePreview dataUri={dataUri}  isFullscreen={isFullscreen} /> )  : <Camera onTakePhotoAnimationDone = {handleTakePhotoAnimationDone}
                isFullscreen={isFullscreen}
              />
            }
        </div>
    )
}

export default WebCam
