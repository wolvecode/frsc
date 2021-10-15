import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import scanImage from "../../assest/image/scanPrint.svg";
import FingerPrint from '../../components/FingerPrint';

const RecordScan = () => {

  const [finger, setFinger] = useState(false);
  const handlefinger = ()=>{
    setFinger(!finger)
  }
    return (
        <>
            {finger ? <FingerPrint finger={finger} setFinger={setFinger}  /> : ( 
            <div className="record_scan">
              <div className="record_scan_content">
                <div className="img_box">
                  <img src={scanImage} alt="" />
                </div>
                <div onClick={handlefinger} className="scan_image_btn">
                  <button className="scan_button">Scan Fingerprints</button>
                </div>
              </div>
            </div>
            ) }
        </>
    )
}

export default RecordScan
