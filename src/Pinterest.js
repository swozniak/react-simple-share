import React, { Component } from "react";
import PropTypes from "prop-types";

import FaPinterestSquare from "react-icons/lib/fa/pinterest-square";

import { DEFAULT_ICON_SIZE, adjustColorBrightness } from "./utils";

const Pinterest = props => {
  const size = `${props.size || DEFAULT_ICON_SIZE}`;
  const url = `url=${props.url || location.href}`;
  const media = props.media ? `&media=${props.media}` : "";
  const description = props.description
    ? `&description=${props.description}`
    : "";

  const shareUrl = encodeURI(
    `https://www.pinterest.com/pin/create/button/?${url}${media}${description}`
  );

  const baseColor = props.color || "#BD081C",
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
        window.open(shareUrl, "popup", "width=640,height=640");
        return false;
      }}
    >
      <FaPinterestSquare />
    </a>
  );
};

Pinterest.propTypes = {
  url: PropTypes.string,
  media: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string
};

export default Pinterest;
