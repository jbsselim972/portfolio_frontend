import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/selimj"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/jbsselim972"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/jbsselim"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
