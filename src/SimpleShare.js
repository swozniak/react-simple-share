import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  FacebookShareButton,
  TwitterShareButton,
  TumblrShareButton,
  PinterestShareButton,
  RedditShareButton,
  LinkedInShareButton,
  GooglePlusShareButton
} from "./index";

import { DEFAULT_ICON_SIZE } from "./utils";

const SimpleShare = props => {
  const buttonOptions = {
    url: props.url || window.location.href,
    size: props.size || DEFAULT_ICON_SIZE,
    color: props.color
  };

  const whitelist = props.whitelist || [];

  return (
    <div className="SimpleShare">
      {(!whitelist.length || whitelist.includes("Facebook")) && (
        <FacebookShareButton {...buttonOptions} />
      )}
      {(!whitelist.length || whitelist.includes("Twitter")) && (
        <TwitterShareButton {...buttonOptions} />
      )}
      {(!whitelist.length || whitelist.includes("Tumblr")) && (
        <TumblrShareButton {...buttonOptions} />
      )}
      {(!whitelist.length || whitelist.includes("Pinterest")) && (
        <PinterestShareButton {...buttonOptions} />
      )}
      {(!whitelist.length || whitelist.includes("Reddit")) && (
        <RedditShareButton {...buttonOptions} />
      )}
      {(!whitelist.length || whitelist.includes("LinkedIn")) && (
        <LinkedInShareButton {...buttonOptions} />
      )}
      {(!whitelist.length || whitelist.includes("Google+")) && (
        <GooglePlusShareButton {...buttonOptions} />
      )}
    </div>
  );
};

SimpleShare.propTypes = {
  url: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  whitelist: PropTypes.array
};

export default SimpleShare;
