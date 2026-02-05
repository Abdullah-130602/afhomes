import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const index = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default index;
