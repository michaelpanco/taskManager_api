# Task Manager API

## Requirements

-   NodeJS
-   MySQL

## Installation

-   Clone the project repo by running
    `git clone git@github.com:michaelpanco/taskManager_api.git`
-   Go to your project directory and create .env and copy the content of the
    .env.sample to your created .env file
-   Your .env file should have a valid database credentials to be able to
    connect to your database, otherwise the system will not run properly
-   Run `npm install` to install all NodeJS dependencies
-   Run `npm run migration:run` to create all the database tables needed for
    this project
-   Run `npm run start:dev` to start the project
-   Once the project has started, you can access it through
    `http://localhost:3000` URL

## API Endpoints

All endpoints are built with REST API

| Command                  | URL         | Method |                  Request Payload                  |
| ------------------------ | ----------- | :----: | :-----------------------------------------------: |
| Account Login            | /auth/login |  POST  |        `{email: string, password: string}`        |
| Account Registration     | /accounts   |  POST  | `{email: string, password: string, name: string}` |
| Fetch all tasks          | /tasks      |  GET   |                        NA                         |
| Retrieve a specific task | /tasks/:id  |  GET   |                        NA                         |
| Create a new task        | /tasks      |  POST  |        `{note: string, datetime: string}`         |
| Update a task            | /tasks/:id  |  PUT   |        `{note: string, datetime: string}`         |
| Delete a task            | /tasks/:id  | DELETE |                        NA                         |
