import React, { Component } from "react";

import Facebook from "./Facebook";
export { Facebook as FacebookShareButton };

import Twitter from "./Twitter";
export { Twitter as TwitterShareButton };

import Tumblr from "./Tumblr";
export { Tumblr as TumblrShareButton };

import Pinterest from "./Pinterest";
export { Pinterest as PinterestShareButton };

import Reddit from "./Reddit";
export { Reddit as RedditShareButton };

import LinkedIn from "./LinkedIn";
export { LinkedIn as LinkedInShareButton };

import GooglePlus from "./GooglePlus";
export { GooglePlus as GooglePlusShareButton };

const SimpleShare = props => {
  const shareUrl = encodeURI(props.url || window.location.href);

  return (
    <div className="SimpleShare">
      <h2 style={{ marginBottom: 0 }}>Share:</h2>
      <span style={{ fontSize: "48px" }}>
        <Facebook url={shareUrl} />
        <Twitter url={shareUrl} />
        <Tumblr url={shareUrl} />
        <Pinterest url={shareUrl} />
        <Reddit url={shareUrl} />
        <LinkedIn url={shareUrl} />
        <GooglePlus url={shareUrl} />
      </span>
    </div>
  );
};

export default SimpleShare;
