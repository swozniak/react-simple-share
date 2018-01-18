import React, { Component } from "react";
import PropTypes from "prop-types";

import FaFacebookSquare from "react-icons/lib/fa/facebook-square";

import { DEFAULT_ICON_SIZE, adjustColorBrightness } from "./utils";

const Facebook = function(props) {
  const size = `${props.size || DEFAULT_ICON_SIZE}`;
  const url = `u=${props.url || location.href}`;
  const shareUrl = encodeURI(
    `https://www.facebook.com/sharer/sharer.php?${url}`
  );

  const baseColor = props.color || "#3B5998",
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
        window.open(shareUrl, "popup", "width=600,height=480");
        return false;
      }}
    >
      <FaFacebookSquare />
    </a>
  );
};

Facebook.propTypes = {
  url: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string
};

export default Facebook;
