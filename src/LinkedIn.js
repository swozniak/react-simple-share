import React, { Component } from "react";
import PropTypes from "prop-types";

import FaLinkedinSquare from "react-icons/lib/fa/linkedin-square";

import { DEFAULT_ICON_SIZE, adjustColorBrightness } from "./utils";

const LinkedIn = props => {
  const size = `${props.size || DEFAULT_ICON_SIZE}`;
  const url = `url=${props.url || location.href}`;
  const title = `&title=${props.title || document.title}`;
  const summary = props.summary ? `&summary=${props.summary}` : "";
  const shareUrl = encodeURI(
    `https://www.linkedin.com/shareArticle?mini=true&${url}${title}${summary}`
  );

  const baseColor = props.color || "#007BB5",
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
      <FaLinkedinSquare />
    </a>
  );
};

LinkedIn.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string
};

export default LinkedIn;
