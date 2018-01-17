# react-simple-social-sharer

[![NPM](https://nodei.co/npm/react-simple-social-sharer.png)](https://www.npmjs.com/package/react-simple-social-sharer)

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Adds buttons with link sharing popups for Facebook, Twitter, Reddit, Pinterest, LinkedIn, and Google+, without requiring your user to download heavy third-party sharing dependencies.

## Install

Use [npm](https://npmjs.com/) to install.

```sh
npm install react-simple-social-sharer --save
```

## Usage

You can pick and choose which buttons to import, or load them all at once.
```js
import {
  FacebookShareButton, 
  TwitterShareButton 
} from "react-simple-social-sharer";

const YourComponent = props => {
  return (
    <div>
      <h3>Share this component!</h3>
      <FacebookShareButton
        url="https://swozniak.github.io/react-simple-social-sharer/" />
      <TwitterShareButton 
        url="https://swozniak.github.io/react-simple-social-sharer/"
        text="Check out this free React Simple Social Sharer component!"
        via="stephanwozniak"
        related="chillective"
        hashtags="npm,react,free,socialmedia"
      />
    </div>
  );
}
```

Or, all at once:
```js
import SimpleSocialSharer from "react-simple-social-sharer";
```

### Additional Props
| Button    | Required                                                                    | Optional                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|-----------|-----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| *         | **url** (*string*): URL of the page to share. Defaults to the current page. |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Facebook  |                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Twitter   |                                                                             | **text** (*string*):The passed text will appear pre-selected for a Twitter user to delete or edit before posting.<br />Example: ```text="Check out this chill React Component!"```<br /><br />**hashtags** (*string*): A comma-separated list of hashtag values without the preceding # character.<br />Example: ```hashtags="npm,react,component"```<br /><br />**via** (*string*): A Twitter username to associate with the Tweet, such as your site’s Twitter account. The provided username will be appended to the end of the Tweet with the text “via @username”.<br />Example: ```via="stephanwozniak"```<br /><br />**related** (*string*): Suggest additional Twitter usernames related to the Tweet as comma-separated values. Twitter may suggest these accounts to follow after the user posts their Tweet.<br />Example: ```related="chillective,npmjs,reactjs"``` |
| Tumblr  |                                                                             | **name** (*string*):Title for the link to be shared.<br />Example: ```name="React Simple Social Sharer Component"```<br /><br />**description** (*string*):A description to go along with the shared post.<br />Example: ```description="Check out this chill React Component!"```                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Pinterest |                                                                             | **title** (*string*):Title for the link to be shared. <br />Example: ```title="React Simple Social Sharer Component"```<br /><br />**description** (*string*):A description to go along with the shared post. <br />Example: ```description="Check out this chill React Component!"```<br /><br />**media** (*string*):URL to an image to be associated with this post. <br />Example: ```media="https://business.pinterest.com/sites/default/files/flex_img/2017-02/1-brand-guidelines-01.jpg"```                                                                                                                                                                                                                                                                                                                                                            |
| Reddit    |                                                                             | **title** (*string*):Title for the link to be shared. Example: ```title="React Simple Social Sharer Component"```                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| LinkedIn  |                                                                             | **title** (*string*):Title for the link to be shared.<br />Example: ```title="React Simple Social Sharer Component"```<br /><br />**summary** (*string*):A description to go along with the shared post.<br />Example: ```summary="Check out this chill React Component!"```                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Google+   |                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

## License

MIT. See [LICENSE.md](http://github.com/swozniak/react-simple-social-sharer/blob/master/LICENSE.md) for details.
