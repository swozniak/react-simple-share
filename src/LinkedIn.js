import React, { Component } from "react";
import PropTypes from "prop-types";

import FaLinkedinSquare from "react-icons/lib/fa/linkedin-square";

import { adjustColorBrightness } from "./utils";

const LinkedIn = props => {
  const url = `url=${props.url || location.href}`;
  const title = `&title=${props.title || document.title}`;
  const summary = props.summary ? `&summary=${props.summary}` : "";
  const shareUrl = encodeURI(
    `https://www.linkedin.com/shareArticle?mini=true&${url}${title}${summary}`
  );

  const baseColor = "#007BB5",
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
      <FaLinkedinSquare />
    </a>
  );
};

LinkedIn.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string
};

export default LinkedIn;
