# react-simple-sharer

[![NPM](https://nodei.co/npm/react-simple-sharer.png)](https://www.npmjs.com/package/react-simple-sharer)

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Adds buttons with link sharing popups for Facebook, Twitter, Reddit, Pinterest, LinkedIn, and Google+, without requiring your user to download heavy third-party sharing dependencies.

## Install

Use [npm](https://npmjs.com/) to install.

```sh
npm install react-simple-sharer --save
```

## Usage

You can pick and choose buttons...

```js
import { FacebookShareButton, TwitterShareButton } from "react-simple-share";

const YourComponent = props => {
  return (
    <div>
      <h3>Share this component!</h3>
      <FacebookShareButton url="https://swozniak.github.io/react-simple-sharer/" />
      <TwitterShareButton
        url="https://swozniak.github.io/react-simple-sharer/"
        text="Check out this free React Simple Social Media Sharing component!"
        via="stephanwozniak"
        related="chillective"
        hashtags="npm,react,free,socialmedia"
      />
    </div>
  );
};
```

Or, load them all at once:

```js
import { SimpleShareButtons } from "react-simple-share";
```

### Additional Props

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
