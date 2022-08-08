import React, { ReactElement, ReactNode } from "react";
import PropTypes from "prop-types";
import NavbarOne from "./NavbarOne";
import SecondNavbar from "./SecondNavbar";
import Footer from "./Footer";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <div>
      <NavbarOne />
      <SecondNavbar />

      <main>{children}</main>

        <Footer />
    </div>
  );
};

Layout.propTypes = {};

export default Layout;
