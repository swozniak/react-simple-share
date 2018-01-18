import React, { Component } from "react";
import PropTypes from "prop-types";

import FaTumblrSquare from "react-icons/lib/fa/tumblr-square";

import { DEFAULT_ICON_SIZE, adjustColorBrightness } from "./utils";

const Tumblr = props => {
  const size = `${props.size || DEFAULT_ICON_SIZE}`;
  const url = `url=${props.url || location.href}`;
  const title = `&title=${props.title || document.title}`;
  const caption = props.caption ? `&caption=${props.caption}` : "";
  const tags = props.tags ? `&tags=${props.tags}` : "";
  const shareUrl = encodeURI(
    `http://www.tumblr.com/widgets/share/tool?shareSource=legacy&posttype=link&${url}${title}${caption}${tags}`
  );

  const baseColor = props.color || "#35465D",
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
        window.open(shareUrl, "popup", "width=400,height=300");
        return false;
      }}
    >
      <FaTumblrSquare />
    </a>
  );
};

Tumblr.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  caption: PropTypes.string,
  tags: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string
};

export default Tumblr;
