# Task Manager API

## Installation

-   Make sure you have NodeJS installed in your local machine
-   Clone the project repo by running
    `git clone git@github.com:michaelpanco/taskManager_api.git`
-   Go to your project directory and create .env and copy the content of the
    .env.sample to your created .env file
-   Your .env file should have a valid database credentials to be able to
    connect to your database, otherwise the system will not able to run properly
-   Run `npm install` to install all NodeJS dependencies
-   Run `npm run migration:run` to create all the database tables needed for
    this project
-   Run `npm run start:dev` to start the project
-   Once the project has started, you can access it through
    `http://localhost:3000` URL
