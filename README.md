# Snapper
Albert Villaroman <avdeveloper@gmail.com>

Clone this repo and deploy it on your own server to take PNG screenshots of webpages and get back the image data as a base64 encoded instead of a picture.

## How to Install
1. clone the repository
  git clone https://github.com/avdeveloper/snapper.git
2. modify config/default.js to specify dimensions
  * For more information on which options you can specify, check out: https://github.com/brenden/node-webshot
3. run the server
  foreman start

This is a wrapper for node-webshot by @brenden on github
