# Task Manager API

## Dev Environment Setup

-   nodeJS
-   nestJS

## Installation

-   Make sure you have NodeJS in your local machine
-   git clone `git@github.com:michaelpanco/taskManager_api.git`
-   create .env in your project root and copy the content of the .env.sample to
    your .env file
-   your .env file should have a valid database credentials to connect to your
    database, otherwise the system will not able run properly
-   run `npm install` to install the NodeJS dependencies
-   run `npm run start:dev` to start the project
-   normally it will run under `http://localhost:3000`

## Database Setup

Please run the command below to set up all the required database table

-   go to your project root and run
-   `npm run migration:run`
