# react-simple-sharer

[![NPM](https://nodei.co/npm/react-simple-share.png)](https://www.npmjs.com/package/react-simple-share)

[![npm version](https://badge.fury.io/js/react-simple-share.svg)](https://badge.fury.io/js/react-simple-share)
[![Download Count](http://img.shields.io/npm/dm/react-simple-share.svg?style=flat-square)](https://npmjs.org/package/react-simple-share)

Add social media sharing buttons to your React app for a number of popular social media sites.

This component leverages the URL sharing features of each service, so no third-party code needs to be loaded. This results in less network requests and a better loading experience for your users.

Supported networks:

* Facebook
* Twitter
* Tumblr
* Reddit
* Pinterest
* LinkedIn
* Google+

By default, the buttons share the link to the current page. However, you can pass in a custom prop for a specific URL instead (along with some other customization options, too).

## Installation

Use [npm](https://npmjs.com/) to install.

```sh
npm install react-simple-share --save
```

## Quick Start: Shared links point to current page

You can pick and choose which buttons to use...

```js
import { FacebookShareButton, TwitterShareButton } from "react-simple-share";

const YourComponent = props => {
  return (
    <div>
      <h3>Share this page!</h3>
      <FacebookShareButton />
      <TwitterShareButton />
    </div>
  );
};
```

...or, show the full set.

```js
import { SimpleShareButtons } from "react-simple-share";

const YourComponent = props => {
  return <SimpleShareButtons />;
};
```

## API by Component

### <SimpleShareButtons \/>

#### Example

```js
import { SimpleShareButtons } from "react-simple-share";

const YourComponent = props => (
  <SimpleShareButtons
    url="https://github.com/swozniak/react-simple-share"
    color="#03A9F4"
    size="80px"
  />
);
```

#### Example with **whitelist**

```js
import { SimpleShareButtons } from "react-simple-share";

const YourComponent = props => (
  <SimpleShareButtons
    whitelist={[
      "Facebook",
      "Twitter",
      "LinkedIn",
      "Google+"
  />
);
```

#### Supported Props

| Prop          | Example                                            | Default value                                                                     | Description                                                                                                                                                                                                                    |
| ------------- | -------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **url**       | `"https://github.com/swozniak/react-simple-share"` | Current page the user is on (`window.location.href`).                             | URL to use in the share dialog.                                                                                                                                                                                                |
| **color**     | `"#37474F"`                                        | Hex code for a primary branding color of that service.                            | 3-character or 6-character hex code. Include the "#".                                                                                                                                                                          |
| **size**      | `"60px"`                                           | `"32px"`                                                                          | Size to render the icon. Any units accepted by the CSS property `font-size` will work here.                                                                                                                                    |
| **whitelist** | `["Facebook", "Twitter", "Tumblr", "Reddit"]`      | `["Facebook", "Twitter", "Tumblr", "Reddit", "Pinterest", "LinkedIn", "Google+"]` | By default, this component will render a share button for each social network supported by this module. If you only want to render share buttons for specific sites, pass in an array populated with the names of those sites. |
|               |                                                    |                                                                                   |                                                                                                                                                                                                                                |

### <FacebookShareButton \/>

#### Example

```js
import { FacebookShareButton } from "react-simple-share";

const YourComponent = props => (
  <FacebookShareButton
    url="https://github.com/swozniak/react-simple-share/"
    color="#37474F"
    size="40px"
  />
);
```

#### Supported Props

| Prop      | Example                                            | Default value                                          | Description                                                                                 |
| --------- | -------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| **url**   | `"https://github.com/swozniak/react-simple-share"` | Current page the user is on (`window.location.href`).  | The URL to use in the share dialog.                                                         |
| **color** | `"#37474F"`                                        | Hex code for a primary branding color of that service. | 3-character or 6-character hex code. Include the "#".                                       |
| **size**  | `"60px"`                                           | `"32px"`                                               | Size to render the icon. Any units accepted by the CSS property `font-size` will work here. |
|           |                                                    |                                                        |                                                                                             |

### Twitter

#### Example

```js
import { TwitterShareButton } from "react-simple-share";

const YourComponent = props => (
  <TwitterShareButton
    url="https://github.com/swozniak/react-simple-share/"
    color="#37474F"
    size="40px"
    text="I'm previewing this free React Component by @stephanwozniak, made for easily sharing pages on social media sites!"
    hashtags="reactsimpleshare,javascript,react"
    via="github"
    related="stephanwozniak,chillective"
  />
);
```

#### Supported Props

| Prop         | Example                                                                     | Default value                                          | Description                                                                                                                                     |
| ------------ | --------------------------------------------------------------------------- | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **url**      | `"https://github.com/swozniak/react-simple-share"`                          | Current page the user is on (`window.location.href`).  | The URL to use in the share dialog.                                                                                                             |
| **color**    | `"#37474F"`                                                                 | Hex code for a primary branding color of that service. | A 3-character or 6-character hex code. Include the "#".                                                                                         |
| **size**     | `"60px"`                                                                    | `"32px"`                                               | Size to render the icon. Any units accepted by the CSS property `font-size` will work here.                                                     |
| **text**     | `"Check out the free Simple Share component for React by @stephanwozniak!"` | Title of the current page (`document.title`).          | Default tweet text, which the user can edit before posting. Pass a blank string `""` if falling back to `document.title` is undesired behavior. |
| **hashtags** | `"reactsimpleshare,javascript,react,npmjs"`                                 |                                                        | Comma-separated string of hashtags to append to the end of the tweet.                                                                           |
| **via**      | `"stephanwozniak"`                                                          |                                                        | Twitter username for the source of the content (or your site).                                                                                  |
| **related**  | `"stephanwozniak,chillective"`                                              |                                                        | Comma-separated string of Twitter usernames for other related Twitter accounts which may be suggested to the user later on.                     |
|              |                                                                             |                                                        |                                                                                                                                                 |

### Tumblr

```js
import { TumblrShareButton } from "react-simple-share";

const YourComponent = props => (
  <TumblrShareButton
    url="https://github.com/swozniak/react-simple-share/"
    size="40px"
    color="#37474F"
    title="React Simple Share - free component by @stephanwozniak"
    caption="I'm previewing this free React Component by @stephanwozniak, made for easily sharing pages on social media sites!"
    tags="reactsimpleshare,javascript,react"
  />
);
```

### Pinterest

#### Example

```js
import { PinterestShareButton } from "react-simple-share";

const YourComponent = props => (
  <PinterestShareButton
    url="https://github.com/swozniak/react-simple-share/"
    size="40px"
    color="#37474F"
    media="WATAPP.jpg"
    description="I'm previewing this free React Component by @stephanwozniak, made for easily sharing pages on social media sites!"
  />
);
```

### Reddit

#### Example

```js
import { RedditShareButton } from "react-simple-share";

const YourComponent = props => (
  <RedditShareButton
    url="https://github.com/swozniak/react-simple-share/"
    size="40px"
    color="#37474F"
    title="Simple Share - a free react component by @stephanwozniak, made for easily sharing links on social media sites!"
  />
);
```

### LinkedIn

#### Example

```js
import { LinkedInShareButton } from "react-simple-share";

const YourComponent = props => (
  <LinkedInShareButton
    url="https://github.com/swozniak/react-simple-share/"
    size="40px"
    color="#37474F"
    title="React Simple Share"
    summary="A free react component by @stephanwozniak, made for easily sharing links on social media sites!"
  />
);
```

### Google+

#### Example

```js
import { GooglePlusShareButton } from "react-simple-share";

const YourComponent = props => (
  <GooglePlusShareButton
    url="https://github.com/swozniak/react-simple-share/"
    size="40px"
    color="#37474F"
    title="React Simple Share"
    summary="A free react component by @stephanwozniak, made for easily sharing links on social media sites!"
  />
);
```

## License

MIT. See [LICENSE.md](http://github.com/swozniak/react-simple-social-sharer/blob/master/LICENSE.md) for details.
