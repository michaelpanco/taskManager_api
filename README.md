# Task Manager API

## Installation

-   Make sure you have NodeJS installed in your local machine
-   git clone `git@github.com:michaelpanco/taskManager_api.git`
-   Go to your project directory and create .env and copy the content of the
    .env.sample to your created .env file
-   your .env file should have a valid database credentials to be able to
    connect to your database, otherwise the system will not able to run properly
-   run `npm install` to install the all NodeJS dependencies
-   run `npm run migration:run` to create all the database tables needed for
    this project
-   run `npm run start:dev` to start the project
-   once the project has started, you can access it through
    `http://localhost:3000` URL
