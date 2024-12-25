Node.js Sample Project

Overview

This project is a Node.js server built using the Express framework, with Knex.js for database connection and Objection.js as the ORM. It is designed to demonstrate essential functionalities in a Node.js server, including migrations, routing, and middleware.

Prerequisites

Ensure the following are installed on your system:

Node.js (v14.x or later recommended)

npm (v7.x or later)

A MySQL database server (e.g., XAMPP, WAMP, or standalone MySQL server)

Setup Instructions

Clone the Repository

git clone https://github.com/your-username/nodejs-sample-project.git
cd nodejs-sample-project

Install DependenciesRun the following command to install all required dependencies:

npm install

Configure Environment VariablesCreate a .env file in the root of your project and define the following:

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=test-db

Run MigrationsUse the following command to create database tables:

npm run run-migrations

Start the ServerRun the development server:

npm run dev

Access the ServerThe server will run on http://localhost:3000 by default.

Scripts

Script

Description

npm run dev

Starts the server in development mode with nodemon.

npm run run-migrations

Runs all pending database migrations using Knex.
Features

Express: Lightweight and efficient server framework.

Knex.js: SQL query builder and migration tool.

Objection.js: ORM for working with database models.

Middleware: Includes error logging and request parsing.

MVC Structure: Organizes the application into models, controllers, and services.

Endpoints

Example Routes:

Superheroes

GET /api/superheroes - Fetch all superheroes

POST /api/superheroes - Add a new superhero

Powers

GET /api/powers - Fetch all powers

POST /api/powers - Add a new power

Database

This project uses a MySQL database. Migrations are located in the src/migrations/ folder.

Run the following command to apply migrations:

npm run run-migrations

Contributing

Feel free to fork this repository, make your changes, and submit a pull request. Ensure to write clear commit messages and follow coding standards.

License

This project is licensed under the MIT License.

Author

Koruprolu Lava Raju

https://github.com/lavaraju7

