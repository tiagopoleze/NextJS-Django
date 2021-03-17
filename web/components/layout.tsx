// React.JS
import React from "react";
import Heading from "./heading";
import Footer from "./footer";

const Layout = (props) => {
  return (
    <React.Fragment>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <Heading />
        {props.children}
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Layout;
