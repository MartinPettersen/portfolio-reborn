import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from 'next/router';

const SecondNavbar = () => {
    const router = useRouter();

    console.log(router.pathname);

  return (
    <div className="secondNavigationBar">
      {router.pathname.match("/portfolio") ? 
      <>
      <Link href="/portfolio/portfolio">
        <a className={router.pathname == "/portfolio/portfolio" ? "secondNavButton activeNav" : "secondNavButton"}>Portfolio</a>
      </Link>
      <Link href="/portfolio/github">
        <a className={router.pathname == "/portfolio/github" ? "secondNavButton activeNav" : "secondNavButton"}>Github</a>
      </Link> 
      </>
      : <></>
    }
      {router.pathname.match("/about") ? 
      <>
      <Link href="/about/about">
        <a className={router.pathname == "/about/about" ? "secondNavButton activeNav" : "secondNavButton"}>About Website</a>
      </Link>
      <Link href="/about/aboutMe">
        <a className={router.pathname == "/about/aboutMe" ? "secondNavButton activeNav" : "secondNavButton"}>About Me</a>
      </Link> 
      </>
      : <></>
    }
    </div>
  );
};

SecondNavbar.propTypes = {};

export default SecondNavbar;
