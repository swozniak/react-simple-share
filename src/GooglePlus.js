import React, { Component } from "react";
import PropTypes from "prop-types";

import FaGooglePlusSquare from "react-icons/lib/fa/google-plus-square";

const GooglePlus = props => {
  const url = `url=${props.url || location.href}`;
  const shareUrl = encodeURI(`https://plus.google.com/share?${url}`);

  return (
    <a
      style={{ color: "#DB4437" }}
      href={shareUrl}
      target="popup"
      onClick={function() {
        window.open(shareUrl, "popup", "width=400,height=480");
        return false;
      }}
    >
      <FaGooglePlusSquare />
    </a>
  );
};

GooglePlus.propTypes = {
  url: PropTypes.string
};

export default GooglePlus;
