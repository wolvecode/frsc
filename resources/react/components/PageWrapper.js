import React from "react";
import Nav from "./Nav";

const PageWrapper = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default PageWrapper;
