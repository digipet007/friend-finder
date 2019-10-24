# node_and_mysql_inventory_tracker

This is a friend finder app that runs users through a personality test, compares the results with other users, and then displays their best friend match. This app uses Express to handle routing.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To download and test this app, you will need the Node Packet Manager installed.  For more information, visit: <https://www.npmjs.com/get-npm>

You will also need Node.js installed.  For more information, vidit <https://nodejs.org/en/download/>

### Installing

To install, access the Github page (https://github.com/digipet007/friend-finder).  You may fork the repository and then clone it to your computer.  

Next, you will need to download the required NPM packages.  The required NPM packages include:
```
"body-parser": "^1.19.0",
"express": "^4.17.1",
"path": "^0.12.7"
```
Because these packages are listed as dependencies already in the package.json file, you may install these packages by typing `npm install` on the commandline.

Your app should now be ready for testing and then deployment.

## Running tests

To use this app on your local device, and store the data on your local server, run the following command on the command line:
```
node server.js
```

Then go to the following URL in your browser: `localhost:8080`
You should be able to click on the links and enter data on the survey page at `localhost:8080/survey`. 
To check that the data has been captured, go to `localhost:8080/api/friends` or click the API link at the bottom of the page.


## Deployment and General Use
This app can be deployed to a server, such as Heroku or AWS, for online use from different devices. Data input by the user is stored on the server as well.

## Built With

* Javascript
* Bootstrap Framework
* jQuery
* Chosen

The following packages were used to create this app:
* body-parser 
* express
* path

## Author

* **Sarah Arnold** --view my portfolio and bio: <https://digipet007.github.io/Sarahs-Portfolio/>

## Acknowledgments

* Created for UW Full Stack Flex Certificate program, according to program specifications.