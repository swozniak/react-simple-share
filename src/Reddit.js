import React, { Component } from "react";
import PropTypes from "prop-types";

import FaRedditSquare from "react-icons/lib/fa/reddit-square";

import { DEFAULT_ICON_SIZE, adjustColorBrightness } from "./utils";

const Reddit = props => {
  const size = `${props.size || DEFAULT_ICON_SIZE}`;
  const url = `url=${props.url || location.href}`;
  const title = `&title=${props.title || document.title}`;
  const shareUrl = encodeURI(`http://www.reddit.com/submit/?${url}${title}`);

  const baseColor = props.color || "#336699",
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
        window.open(shareUrl, "popup", "width=840,height=600");
        return false;
      }}
    >
      <FaRedditSquare />
    </a>
  );
};

Reddit.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string
};

export default Reddit;
