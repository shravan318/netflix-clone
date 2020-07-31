import React, { useEffect, useState } from "react";

import "./nav.css";

function Nav() {
  const [show, navBG] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        navBG(true);
      } else navBG(false);
    });
  }, []);
  return (
    <nav className={show === true ? "nav__wrapper--bg" : "nav__wrapper"}>
      <div className="nav__left">
        <a href="/">
          <img
            src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png"
            alt="logo"
            className="nav__logo"
          />
        </a>
      </div>
      <div className="nav__right">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
          alt="avatar"
          className="nav__avatar"
        />
      </div>
    </nav>
  );
}

export default Nav;
