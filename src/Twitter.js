import React, { Component } from "react";
import PropTypes from "prop-types";

import FaTwitterSquare from "react-icons/lib/fa/twitter-square";

import { adjustColorBrightness } from "./utils";

const Twitter = props => {
  const url = `&url=${props.url || location.href}`;
  const text = `&text=${props.text || document.title}`;
  const hashtags = props.hashtags ? `&hashtags=${props.hashtags}` : "";
  const via = props.via ? `&via=${props.via}` : "";
  const related = props.related ? `&related=${props.related}` : "";
  const shareUrl = encodeURI(
    `https://twitter.com/intent/tweet/?${url}${text}${hashtags}${via}${related}`
  );

  const baseColor = "#1DA1F2",
    hoverColor = adjustColorBrightness(baseColor, -0.05),
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
      <FaTwitterSquare />
    </a>
  );
};

Twitter.PropTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
  hashtags: PropTypes.string,
  via: PropTypes.string,
  related: PropTypes.string
};

export default Twitter;
