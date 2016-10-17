# BirdieWatch
BirdieWatch is an IOS app that allows bird feeders to periodically count different bird species and report the data to research centers for nationwide studies of birds.
The app is built on ionic framework with AngularJS.
![Alt text](www/img/screenShot1.png?raw=true "Screen Shot")

Install Ionic
---------------------
First, install Node.js. Then, install the latest Cordova and Ionic command-line tools. Follow the Android and iOS platform guides to install required platform dependencies.

        $npm install -g cordova ionic
        
Clone the project and do:

        $cd BirdieWatch
        $ionic platform add ios
 
Running the project 
---------------------
To run it on browser, in project's root directory:

        $ionic serve

To run it on emulator:
        
        $ionic emulate ios
