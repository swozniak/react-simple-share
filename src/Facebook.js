import React, { Component } from "react";
import PropTypes from "prop-types";

import FaFacebookSquare from "react-icons/lib/fa/facebook-square";

import { adjustColorBrightness } from "./utils";

const Facebook = function(props) {
  const url = `u=${props.url || location.href}`;
  const shareUrl = encodeURI(
    `https://www.facebook.com/sharer/sharer.php?${url}`
  );

  const baseColor = "#3B5998",
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
        window.open(shareUrl, "popup", "width=600,height=480");
        return false;
      }}
    >
      <FaFacebookSquare />
    </a>
  );
};

Facebook.propTypes = {
  url: PropTypes.string
};

export default Facebook;
