# react-simple-share

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

By default, the buttons will share the link to the current page. However, you can pass in a custom prop for a specific URL instead (along with some other customization options, too).

## Installation

Use [npm](https://npmjs.com/) to install:

```sh
npm install react-simple-share --save
```

Or, if you're using [yarn](https://yarnpkg.com/):

```sh
yarn add react-simple-share
```

## Quick Examples

### Single button

![Single button](https://raw.githubusercontent.com/swozniak/react-simple-share/master/demo/single.png)

```js
import { FacebookShareButton } from "react-simple-share";

const SingleButtonDemo = () => <FacebookShareButton />;
```

### Basic use with all supported networks included

![Basic use with all supported networks included](https://raw.githubusercontent.com/swozniak/react-simple-share/master/demo/all.png)

```js
import { SimpleShareButtons } from "react-simple-share";

const BasicUsageDemo = () => <SimpleShareButtons />;
```

### Monochromatic with custom size

![Monochromatic with custom size](https://raw.githubusercontent.com/swozniak/react-simple-share/master/demo/monochrome.png)

```js
import { SimpleShareButtons } from "react-simple-share";

const MonochromaticDemo = () => (
  <SimpleShareButtons color="#37474F" size="40px" />
);
```

### Whitelist of selected networks

![Whitelist of selected networks](https://raw.githubusercontent.com/swozniak/react-simple-share/master/demo/whitelist.png)

```js
import { SimpleShareButtons } from "react-simple-share";

const WhitelistDemo = () => (
  <SimpleShareButtons
    whitelist={["Facebook", "Twitter", "LinkedIn", "Google+"]}
  />
);
```

## API by Component

### <SimpleShareButtons \/>

#### Examples

```js
import { SimpleShareButtons } from "react-simple-share";

const BasicExample = () => <SimpleShareButtons />;

const OptionsExample = () => (
  <SimpleShareButtons
    url="https://github.com/swozniak/react-simple-share"
    color="#03A9F4"
    size="80px"
  />
);

const WhitelistExample = () => (
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

| Prop          | Default value                                                                     | Description                                                                                                                                                                                                                    |
| ------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **url**       | Current page the user is on (`window.location.href`).                             | The URL to use in the share dialog.                                                                                                                                                                                            |
| **color**     | Hex code for a primary branding color of that service.                            | A 3-character or 6-character hex code. Include the "#".                                                                                                                                                                        |
| **size**      | `"32px"`                                                                          | The size to render the icon. Any units accepted by the CSS property `font-size` will work here.                                                                                                                                |
| **whitelist** | `["Facebook", "Twitter", "Tumblr", "Reddit", "Pinterest", "LinkedIn", "Google+"]` | By default, this component will render a share button for each social network supported by this module. If you only want to render share buttons for specific sites, pass in an array populated with the names of those sites. |
|               |                                                                                   |                                                                                                                                                                                                                                |

### <FacebookShareButton \/>

#### Examples

```js
import { FacebookShareButton } from "react-simple-share";

const BasicExample = () => <FacebookShareButton />;

const OptionsExample = () => (
  <FacebookShareButton
    url="https://github.com/swozniak/react-simple-share/"
    color="#3B5998"
    size="40px"
  />
);
```

#### Supported Props

| Prop      | Default value                                          | Description                                                                                     |
| --------- | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| **url**   | Current page the user is on (`window.location.href`).  | The URL to use in the share dialog.                                                             |
| **color** | Hex code for a primary branding color of that service. | 3-character or 6-character hex code. Include the "#".                                           |
| **size**  | `"32px"`                                               | The size to render the icon. Any units accepted by the CSS property `font-size` will work here. |
|           |                                                        |                                                                                                 |

### <TwitterShareButton \/>

#### Examples

```js
import { TwitterShareButton } from "react-simple-share";

const BasicExample = () => <TwitterShareButton />;

const OptionsExample = () => (
  <TwitterShareButton
    url="https://github.com/swozniak/react-simple-share/"
    color="#1DA1F2"
    size="40px"
    text="Add social media sharing buttons to your React app with react-sample-share by @stephanwozniak!"
    hashtags="reactsimpleshare,javascript,react"
    via="github"
    related="stephanwozniak,chillective"
  />
);
```

#### Supported Props

| Prop         | Default value                                         | Description                                                                                                                     |
| ------------ | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **url**      | Current page the user is on (`window.location.href`). | The URL to use in the share dialog.                                                                                             |
| **color**    | Hex code for a primary brand color of that service.   | A 3-character or 6-character hex code. Include the "#".                                                                         |
| **size**     | `"32px"`                                              | The size to render the icon. Any units accepted by the CSS property `font-size` will work here.                                 |
| **text**     | Title of the current page (`document.title`).         | Default tweet text, which the user can edit before posting.                                                                     |
| **hashtags** | Ignored by default.                                   | Comma-separated string of hashtags to append to the end of the tweet.                                                           |
| **via**      | Ignored by default.                                   | Twitter username for the source of the content (or your site).                                                                  |
| **related**  | Ignored by default.                                   | Comma-separated string of Twitter usernames for other accounts which may be suggested to the user after publishing their tweet. |
|              |                                                       |                                                                                                                                 |

### <TumblrShareButton \/>

#### Examples

```js
import { TumblrShareButton } from "react-simple-share";

const BasicExample = () => <TumblrShareButton />;

const OptionsExample = () => (
  <TumblrShareButton
    url="https://github.com/swozniak/react-simple-share/"
    color="#35465D"
    size="40px"
    title="React Simple Share - by @stephanwozniak"
    caption="Check out this free React Component by @stephanwozniak, made for easily sharing pages on social media sites!"
    tags="reactsimpleshare,javascript,react"
  />
);
```

#### Supported Props

| Prop        | Default value                                         | Description                                                                                 |
| ----------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **url**     | Current page the user is on (`window.location.href`). | The URL to use in the share dialog.                                                         |
| **color**   | Hex code for a primary brand color of that service.   | A 3-character or 6-character hex code. Include the "#".                                     |
| **size**    | `"32px"`                                              | Size to render the icon. Any units accepted by the CSS property `font-size` will work here. |
| **title**   | Title of the current page (`document.title`).         | Default title text, which the user can edit before posting.                                 |
| **caption** | Ignored by default.                                   | Default post text, which the user can edit before posting.                                  |
| **tags**    | Ignored by default.                                   | Comma-separated string of tags to append to the end of the post.                            |
|             |                                                       |                                                                                             |

### <PinterestShareButton \/>

#### Examples

```js
import { PinterestShareButton } from "react-simple-share";
const BasicExample = () => <PinterestShareButton />;
const OptionsExample = () => (
  <PinterestShareButton
    url="https://github.com/swozniak/react-simple-share/"
    color="#BD081C"
    size="40px"
    description="Check out this free React Component by @stephanwozniak, made for easily sharing pages on social media sites!"
    media="https://avatars3.githubusercontent.com/u/2192011?s=460&v=4"
  />
);
```

#### Supported Props

| Prop            | Default value                                         | Description                                                                                 |
| --------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **url**         | Current page the user is on (`window.location.href`). | The URL to use in the share dialog.                                                         |
| **color**       | Hex code for a primary brand color of that service.   | A 3-character or 6-character hex code. Include the "#".                                     |
| **size**        | `"32px"`                                              | Size to render the icon. Any units accepted by the CSS property `font-size` will work here. |
| **description** | Ignored by default.                                   | Default post text, which the user can edit before posting.                                  |
| **media**       | Ignored by default.                                   | Absolute URL path to an image to post with this pin.                                        |
|                 |                                                       |                                                                                             |

### <RedditShareButton \/>

#### Examples

```js
import { RedditShareButton } from "react-simple-share";

const BasicComponent = () => <RedditShareButton />;
const OptionsComponent = () => (
  <RedditShareButton
    url="https://github.com/swozniak/react-simple-share/"
    color="#336699"
    size="40px"
    title="Simple Share - a free react component by @stephanwozniak, made for easily sharing links on social media sites!"
  />
);
```

#### Supported Props

| Prop      | Default value                                         | Description                                                                                 |
| --------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **url**   | Current page the user is on (`window.location.href`). | The URL to use in the share dialog.                                                         |
| **color** | Hex code for a primary brand color of that service.   | A 3-character or 6-character hex code. Include the "#".                                     |
| **size**  | `"32px"`                                              | Size to render the icon. Any units accepted by the CSS property `font-size` will work here. |
| **title** | Title of the current page (`document.title`).         | Default title text, which the user can edit before posting.                                 |
|           |                                                       |                                                                                             |

### <LinkedInShareButton \/>

#### Examples

```js
import { LinkedInShareButton } from "react-simple-share";

const BasicComponent = () => <LinkedInShareButton />;
const OptionsComponent = () => (
  <LinkedInShareButton
    url="https://github.com/swozniak/react-simple-share/"
    color="#007BB5"
    size="40px"
    title="React Simple Share"
    summary="A free react component by @stephanwozniak, made for easily sharing links on social media sites!"
  />
);
```

#### Supported Props

| Prop        | Default value                                         | Description                                                                                 |
| ----------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **url**     | Current page the user is on (`window.location.href`). | The URL to use in the share dialog.                                                         |
| **color**   | Hex code for a primary brand color of that service.   | A 3-character or 6-character hex code. Include the "#".                                     |
| **size**    | `"32px"`                                              | Size to render the icon. Any units accepted by the CSS property `font-size` will work here. |
| **title**   | Title of the current page (`document.title`).         | Default title text, which the user cannot edit before posting.                              |
| **summary** | Ignored by default.                                   | Default post text, which the user can edit before posting.                                  |
|             |                                                       |                                                                                             |

### <GooglePlusShareButton \/>

#### Examples

```js
import { GooglePlusShareButton } from "react-simple-share";

const BasicComponent = () => <GooglePlusShareButton />;
const OptionsComponent = () => (
  <GooglePlusShareButton
    url="https://github.com/swozniak/react-simple-share/"
    color="#DB4437"
    size="40px"
  />
);
```

#### Supported Props

| Prop      | Default value                                         | Description                                                                                 |
| --------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **url**   | Current page the user is on (`window.location.href`). | The URL to use in the share dialog.                                                         |
| **color** | Hex code for a primary brand color of that service.   | A 3-character or 6-character hex code. Include the "#".                                     |
| **size**  | `"32px"`                                              | Size to render the icon. Any units accepted by the CSS property `font-size` will work here. |
|           |                                                       |                                                                                             |

## License

MIT. See [LICENSE.md](http://github.com/swozniak/react-simple-social-sharer/blob/master/LICENSE.md) for details.
