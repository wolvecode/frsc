import React from "react";
import PageWrapper from "../../components/PageWrapper";
import { Link, Route, Switch } from "react-router-dom";
import RecordScan from "./RecordScan";

const Scan = () => {
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
                <RecordScan />
          </div>
        </PageWrapper>
      </div>
    </>
  );
};

export default Scan;
