import * as React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaStackOverflow
} from "react-icons/fa";

import "./socialLink.scss";

enum profile {
  github = "https://github.com/duwalanise",
  linkedin = "https://www.linkedin.com/in/anishduwal/",
  stcakoverflow = "https://stackoverflow.com/users/7193872/duwalanise",
  twitter = "https://twitter.com/duwalanise"
}

const openProfile = (value: profile) => () => {
  window.open(value, "_blank");
};

interface SocialLinkProps {}

const SocialLink: React.FunctionComponent<SocialLinkProps> = () => {
  return (
    <div className="social-link">
      <FaGithub
        className="sl-item github"
        onClick={openProfile(profile.github)}
      />
      <FaLinkedin
        className="sl-item linkedin"
        onClick={openProfile(profile.github)}
      />
      <FaStackOverflow
        className="sl-item stack"
        onClick={openProfile(profile.github)}
      />
      <FaTwitter
        className="sl-item twitter"
        onClick={openProfile(profile.github)}
      />
    </div>
  );
};

export default SocialLink;
