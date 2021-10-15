import React from "react";
import PageWrapper from "../../components/PageWrapper";
import scanImage from "../../assest/image/scanRecord.svg";
import { Link } from "react-router-dom";
import FingerPrint from "../../components/FingerPrint";

const ScanNotFound = () => {
  return (
    <>
      <div className="page_content">
        <PageWrapper>
          <div className="col_content">
            <div className="heading ">
              <div className="heading_text">
                <h3>Driver Record</h3>
                <span>Enter crimes to record</span>
              </div>
            </div>

            <div className="record_scan">
              <div className="record_scan_content">
                <div className="img_box">
                  <img src={scanImage} alt="" />
                </div>
                <Link to="/home/register" className="scan_image_btn">
                  <button className="scan_button">Register Driver </button>
                </Link>
              </div>
            </div>
          </div>
        </PageWrapper>
      </div>
    </>
  );
};

export default ScanNotFound;
