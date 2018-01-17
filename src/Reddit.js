import React, { Component } from "react";
import PropTypes from "prop-types";

import FaRedditSquare from "react-icons/lib/fa/reddit-square";

const Reddit = props => {
  const url = `url=${props.url || location.href}`;
  const title = props.title ? `&title="${props.title}` : "";
  const shareUrl = encodeURI(`http://www.reddit.com/submit/?${url}${title}`);

  return (
    <a
      style={{ color: "#336699" }}
      href={shareUrl}
      target="popup"
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
