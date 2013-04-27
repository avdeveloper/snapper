# Snapper
Albert Villaroman <avdeveloper@gmail.com>

Clone this repo and deploy it on your own server to take PNG screenshots of webpages and get back the image data as a base64 encoded instead of a picture.

## How to Install
clone the repository:

    git clone https://github.com/avdeveloper/snapper.git

modify config/default.js to specify dimensions:

Note: For more information on which options you can specify, check out: https://github.com/brenden/node-webshot

run the server:

    foreman start

## How to Use
Pass the url of the webpage you want to screenshot:

    http://your-server/webpage-to-capture.com

## Credits
This is a wrapper for node-webshot by @brenden on github
