import React, { Component } from "react";
import PropTypes from "prop-types";

import FaLinkedinSquare from "react-icons/lib/fa/linkedin-square";

const LinkedIn = props => {
  const url = `url=${props.url || location.href}`;
  const title = `&title=${props.title || document.title}`;
  const summary = props.summary ? `&summary=${props.summary}` : "";

  const shareUrl = encodeURI(
    `https://www.linkedin.com/shareArticle?mini=true&${url}${title}${summary}`
  );

  return (
    <a
      style={{ color: "#007BB5" }}
      href={shareUrl}
      target="popup"
      onClick={function() {
        window.open(shareUrl, "popup", "width=400,height=480");
        return false;
      }}
    >
      <FaLinkedinSquare />
    </a>
  );
};

LinkedIn.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string
};

export default LinkedIn;
