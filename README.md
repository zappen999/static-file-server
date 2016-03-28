# README #

Extremly slim static file server boilerplate built with **Node.js** and **Express**


#### Setup
* Clone the repository
* Install dependencies with ```npm install```

#### Usage
* Edit ```server.js``` to setup the port (default is 9009)
* Start the server (PM2, nodemon or whatever)

#### Logging
The server uses [Morgan](https://github.com/expressjs/morgan "Morgan") and logs
into the *access.log* file in Apache format.
