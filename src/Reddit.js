import React, { Component } from "react";
import PropTypes from "prop-types";

import FaRedditSquare from "react-icons/lib/fa/reddit-square";

import { adjustColorBrightness } from "./utils";

const Reddit = props => {
  const url = `url=${props.url || location.href}`;
  const title = props.title ? `&title="${props.title}` : "";
  const shareUrl = encodeURI(`http://www.reddit.com/submit/?${url}${title}`);

  const baseColor = "#336699",
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
        window.open(shareUrl, "popup", "width=640,height=480");
        return false;
      }}
    >
      <FaRedditSquare />
    </a>
  );
};

Reddit.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string
};

export default Reddit;
