import React, { Component } from "react";
import PropTypes from "prop-types";

import FaPinterestSquare from "react-icons/lib/fa/pinterest-square";

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

  return (
    <a
      style={{ color: "#BD081C" }}
      href={shareUrl}
      target="popup"
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
