# Task Manager API

## Dev Environment Setup

-   nodeJS
-   nestJS

## Installation

-   Make sure you have NodeJS in your local machine
-   git clone `git@github.com:michaelpanco/taskManager_api.git`
-   Got to your project directory and create .env and copy the content of the
    .env.sample to your .env file
-   your .env file should have a valid database credentials to connect to your
    database, otherwise the system will not able to run properly
-   run `npm install` to install the all NodeJS dependencies
-   run `npm run start:dev` to start the project
-   the project will run under `http://localhost:3000` URL

## Database Setup

Please run the command below to set up all the required database table

-   go to your project root and run
-   `npm run migration:run`
