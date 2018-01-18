import React, { Component } from "react";
import PropTypes from "prop-types";

import FaPinterestSquare from "react-icons/lib/fa/pinterest-square";

import { adjustColorBrightness } from "./utils";

const Pinterest = props => {
  const url = `url=${props.url || location.href}`;
  const title = `&title=${props.title || document.title}`;
  const media = props.media ? `&media=${props.media}` : "";
  const description = props.description
    ? `description=${props.description}`
    : "";

  const shareUrl = encodeURI(
    `https://www.pinterest.com/pin/create/button/?${url}${title}${media}${description}`
  );
  const baseColor = "#BD081C",
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
      <FaPinterestSquare />
    </a>
  );
};

Pinterest.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  media: PropTypes.string,
  description: PropTypes.string
};

export default Pinterest;
