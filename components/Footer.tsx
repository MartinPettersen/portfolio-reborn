import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from 'next/router';

const Footer = () => {
    const router = useRouter();


  return (
    <div className="footer">
      <div className="footerGroup">
      <p className={"footerLabel"}>Portfolio:</p>  
      <Link href="/portfolio/portfolio">
        <a className={"footerButton"}>Portfolio</a>
      </Link>
      <Link href="/portfolio/github">
        <a className={"footerButton"}>Github</a>
      </Link> 
      </div>
      <div className="footerGroup">
      <p className={"footerLabel"}>About:</p>  
      <Link href="/about/about">
        <a className={"footerButton"}>About Website</a>
      </Link>
      <Link href="/about/aboutMe">
        <a className={"footerButton"}>About Me</a>
      </Link> 
      </div>
      <div className="footerGroup">
      <p className={"footerLabel"}>More Stuff:</p>  
      <Link href="/">
        <a className={"footerButton"}>Home</a>
      </Link>
      <Link href="/blog/blog">
        <a className={"footerButton"}>Blog</a>
      </Link> 
      </div>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
