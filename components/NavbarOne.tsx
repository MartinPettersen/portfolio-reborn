import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from 'next/router';

const NavbarOne = () => {
    const router = useRouter();


  return (
    <div className="navigationBar">
      <Link href="/">
        <a className={router.pathname == "/" ? "navButton activeNav" : "navButton"}>Home</a>
      </Link>
      <Link href="/portfolio/portfolio">
        <a className={router.pathname.match("/portfolio") ? "navButton activeNav" : "navButton"}>Portfolio</a>
      </Link>
      <Link href="/about/about">
        <a className={router.pathname.match("/about") ? "navButton activeNav" : "navButton"}>About</a>
      </Link>
      <Link href="/blog/blog">
        <a className={router.pathname == "/blog/blog" ? "navButton activeNav" : "navButton"}>Blog</a>
      </Link>
    </div>
  );
};

NavbarOne.propTypes = {};

export default NavbarOne;
