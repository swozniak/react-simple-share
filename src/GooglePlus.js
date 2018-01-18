import React, { Component } from "react";
import PropTypes from "prop-types";

import FaGooglePlusSquare from "react-icons/lib/fa/google-plus-square";

import { adjustColorBrightness } from "./utils";

const GooglePlus = props => {
  const url = `url=${props.url || location.href}`;
  const shareUrl = encodeURI(`https://plus.google.com/share?${url}`);

  const baseColor = "#DB4437",
    hoverColor = adjustColorBrightness(baseColor, -0.08),
    activeColor = adjustColorBrightness(baseColor, -0.2);

  return (
    <a
      href={shareUrl}
      target="popup"
      style={{ color: baseColor }}
      onMouseOver={e => (e.currentTarget.style.color = hoverColor)}
      onMouseOut={e => (e.currentTarget.style.color = baseColor)}
      onMouseUp={e => (e.currentTarget.style.color = baseColor)}
      onMouseDown={e => (e.currentTarget.style.color = activeColor)}
      onFocus={e => (e.currentTarget.style.color = hoverColor)}
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
