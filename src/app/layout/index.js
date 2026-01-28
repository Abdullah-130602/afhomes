import React from "react";
import Navbar from "./navbar";
import Footer from "../components/footer";

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
