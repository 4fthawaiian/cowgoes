## PP Comm view test bed

Setup:

Requires node, npm and bower installed globally

Also a good idea to have LiveReload chrome extension installed and running

`(sudo) npm install -g grunt-cli bower`

`npm install`

`bower install`

`grunt scaffold`

`grunt`

# Web Interface

Once you've run `nodemon server.js` you should be able to access the index page at http://localhost:3000.

# API

The API is pretty simple. 

Get all animals: `http://localhost:3000/v1/animals`
Get a single animal: `http://localhost:3000/v1/animal/cow`

