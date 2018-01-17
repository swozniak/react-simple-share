import React, { Component } from "react";
import PropTypes from "prop-types";

import FaFacebookOfficial from "react-icons/lib/fa/facebook-official";

const Facebook = function(props) {
  const url = `u=${props.url || location.href}`;
  const shareUrl = encodeURI(
    `https://www.facebook.com/sharer/sharer.php?${url}`
  );

  return (
    <a
      style={{ color: "#3B5998" }}
      href={shareUrl}
      target="popup"
      onClick={function() {
        window.open(shareUrl, "popup", "width=600,height=480");
        return false;
      }}
    >
      <FaFacebookOfficial />
    </a>
  );
};

Facebook.propTypes = {
  url: PropTypes.string
};

export default Facebook;
