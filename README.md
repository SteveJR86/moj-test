# Ministry of Justic Coding Challenge

## Description

I've built this project for submission as part of a job application for the
Ministry of Justice.
The project is a basic task manager allowing users create, update, view and 
remove tasks, where each task has a title, description, status and due date/time.

## Architecture

The project has a React frontend, C# .NET backend and Mongo database all 
of which are within docker containers for easy development and deployment.

## Running the project

To run the project you need Docker installed. The project can then be ran
using the following command:

```docker compose up -d```

## Tips for running the project for live users

The frontend is currently run using npm package serve. While this is fine for
local development and testing, for production the application should be served
by a full production webserver such as Apache or nginx.
