import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal footer-center p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by <Link to={"https://abdurrobr34l.github.io/"}><b>ABDUR ROB</b></Link>
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
