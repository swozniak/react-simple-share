import React, { Component } from "react";
import PropTypes from "prop-types";

import FaTumblrSquare from "react-icons/lib/fa/tumblr-square";

import { adjustColorBrightness } from "./utils";

const Tumblr = props => {
  const url = `url=${props.url || location.href}`;
  const name = `&name=${props.name || document.title}`;
  const description = props.description
    ? `&description=${props.description}`
    : "";
  const shareUrl = encodeURI(
    `http://www.tumblr.com/share/link?${url}${name}${description}`
  );

  const baseColor = "#35465D",
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
