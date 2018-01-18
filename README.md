# react-simple-sharer

[![NPM](https://nodei.co/npm/react-simple-share.png)](https://www.npmjs.com/package/react-simple-share)

Adds buttons with link sharing popups for Facebook, Twitter, Tumblr, Reddit, Pinterest, LinkedIn, and Google+, without waiting for third-party libraries to load.

Creates a link to the current page by default, but can accept a specific URL instead (and some other options, based on the site).

## Install

Use [npm](https://npmjs.com/) to install.

```sh
npm install react-simple-share --save
```

## Basic Use

You can pick and choose which buttons to use...

```js
import { FacebookShareButton, TwitterShareButton } from "react-simple-share";

export default const YourComponent = props => {
  return (
    <div>
      <h3>Share this page!</h3>
      <FacebookShareButton />
      <TwitterShareButton
        via="stephanwozniak"
        related="chillective"
        hashtags="npm,react,free,socialmedia"
      />
    </div>
  );
};
```

...or, load them all at once.

```js
import { SimpleShareButtons } from "react-simple-share";

const YourComponent = props => {
  return (
    <SimpleShareButtons
      url="https://github.com/swozniak"
      size="60px"
      color="#000"
    />
  );
};
```

## Complete List of Supported Props

### SimpleShareButtons

```js
import { SimpleShareButtons } from "react-simple-share";

const YourComponent = props => (
  <SimpleShareButtons
    url="https://github.com/swozniak/react-simple-share" // (string) Optional. The URL to use in the share dialog. Defaults to current page.
    color="#03A9F4" // (string) Optional. Specify a 3-character or 6-character hex code. Include the "#".
    size="80px" // (string) Optional, include "px" or "em" like you would with a "font-size" tag.
  />
);
```

You can also pass a list consisting of the buttons you want to be included.

```js
import { SimpleShareButtons } from "react-simple-share";

const YourComponent = props => (
  <SimpleShareButtons
    whitelist={[
      "Facebook",
      "Twitter",
      "Tumblr",
      "Reddit",
      "Pinterest",
      "LinkedIn",
      "Google+"
    ]} // (array of strings) Optional whitelist of buttons to generate
  />
);
```

### Facebook

```js
import { FacebookShareButton } from "react-simple-share";

const YourComponent = props => (
  <FacebookShareButton
    url="https://github.com/swozniak/react-simple-share/" // (string) Optional, the URL to use in the share dialog. Defaults to current page.
    size="40px" // (string) Optional, include "px" or "em" like you would with a "font-size" tag.
    color="#37474F" // (string) Optional, include "#", specify as 3-character or 6-character hex code
  />
);
```

### Twitter

```js
import { TwitterShareButton } from "react-simple-share";

const YourComponent = props => (
  <TwitterShareButton
    url="https://github.com/swozniak/react-simple-share/"
    size="40px"
    color="#37474F"
    text="I'm previewing this free React Component by @stephanwozniak, made for easily sharing pages on social media sites!"
    hashtags="reactsimpleshare,javascript,react"
    via="github"
    related="stephanwozniak,chillective"
  />
);
```

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

.
.
.
.
.
.
.
.
.
.
.
.
.
.

| Button    | Required                                                                    | Optional                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \*        | **url** (_string_): URL of the page to share. Defaults to the current page. |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Facebook  |                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Twitter   |                                                                             | **text** (_string_):The passed text will appear pre-selected for a Twitter user to delete or edit before posting.<br />Example: `text="Check out this chill React Component!"`<br /><br />**hashtags** (_string_): A comma-separated list of hashtag values without the preceding # character.<br />Example: `hashtags="npm,react,component"`<br /><br />**via** (_string_): A Twitter username to associate with the Tweet, such as your site’s Twitter account. The provided username will be appended to the end of the Tweet with the text “via @username”.<br />Example: `via="stephanwozniak"`<br /><br />**related** (_string_): Suggest additional Twitter usernames related to the Tweet as comma-separated values. Twitter may suggest these accounts to follow after the user posts their Tweet.<br />Example: `related="chillective,npmjs,reactjs"` |
| Tumblr    |                                                                             | **name** (_string_):Title for the link to be shared.<br />Example: `name="React Simple Social Sharer Component"`<br /><br />**description** (_string_):A description to go along with the shared post.<br />Example: `description="Check out this chill React Component!"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Pinterest |                                                                             | **title** (_string_):Title for the link to be shared. <br />Example: `title="React Simple Social Sharer Component"`<br /><br />**description** (_string_):A description to go along with the shared post. <br />Example: `description="Check out this chill React Component!"`<br /><br />**media** (_string_):URL to an image to be associated with this post. <br />Example: `media="https://business.pinterest.com/sites/default/files/flex_img/2017-02/1-brand-guidelines-01.jpg"`                                                                                                                                                                                                                                                                                                                                                                          |
| Reddit    |                                                                             | **title** (_string_):Title for the link to be shared. Example: `title="React Simple Social Sharer Component"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| LinkedIn  |                                                                             | **title** (_string_):Title for the link to be shared.<br />Example: `title="React Simple Social Sharer Component"`<br /><br />**summary** (_string_):A description to go along with the shared post.<br />Example: `summary="Check out this chill React Component!"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Google+   |                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

## License

MIT. See [LICENSE.md](http://github.com/swozniak/react-simple-social-sharer/blob/master/LICENSE.md) for details.
