import React, { Component } from "react";
import PropTypes from "prop-types";

import FaTumblrSquare from "react-icons/lib/fa/tumblr-square";

const Tumblr = props => {
  const url = `url=${props.url || location.href}`;
  const name = `&name=${props.name || document.title}`;
  const description = props.description
    ? `&description=${props.description}`
    : "";

  const shareUrl = encodeURI(
    `http://www.tumblr.com/share/link?${url}${name}${description}`
  );

  return (
    <a
      style={{ color: "#35465D" }}
      href={shareUrl}
      target="popup"
      onClick={function() {
        window.open(shareUrl, "popup", "width=400,height=480");
        return false;
      }}
    >
      <FaTumblrSquare />
    </a>
  );
};

Tumblr.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string
};

export default Tumblr;
