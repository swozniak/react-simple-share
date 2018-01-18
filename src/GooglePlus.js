import React, { Component } from "react";
import PropTypes from "prop-types";

import FaGooglePlusSquare from "react-icons/lib/fa/google-plus-square";

import { DEFAULT_ICON_SIZE, adjustColorBrightness } from "./utils";

const GooglePlus = props => {
  const size = `${props.size || DEFAULT_ICON_SIZE}`;
  const url = `url=${props.url || location.href}`;
  const shareUrl = encodeURI(`https://plus.google.com/share?${url}`);

  const baseColor = props.color || "#DB4437",
    hoverColor = adjustColorBrightness(baseColor, -0.1),
    activeColor = adjustColorBrightness(baseColor, -0.2);

  return (
    <a
      href={shareUrl}
      target="popup"
      style={{ fontSize: size, color: baseColor }}
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
  url: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string
};

export default GooglePlus;
