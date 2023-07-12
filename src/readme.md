# Frontend of Search API README

This project is a frontend application built using React.js. It provides a user interface to interact with a backend API to display and search for freelancers. It can retrieve the list of freelancers available on the website and filter out the result based on specific parameters. On Home page it displays the list of all the available freelancers on the website and on the Search page we can filter out the specific freelancer based on search parameters.

### Setup

To set up the project:
1. Ensure that you have Node.js and npm (Node Package Manager) installed on your machine. You can download and install them from the official Node.js website: `https://nodejs.org`.

2. Clone the project repository to your local machine using Git or download the ZIP file and extract it.

3. Open a terminal or command prompt and navigate to the project directory.

4. Run the following command to install the project dependencies: `npm install`.
It will install all dependencies of `package.json` file

5. Once the installation is complete, you can start the development server by running the following command: `npm start`
This command will start the development server and launch the application in your default web browser.

## File system

The file system of the project is as follows:
* `src/App.js`: It contains the routing configuration for the application. 
* `src/pages/HomePage.js`: It contains the homepage component, which displays a list of all freelancers.
* `src/pages/SearchPage.js`: It contains the search page component, allowing users to search for freelancers.
* `src/components/...`: This directory contains various reusable components used in the project.

## API Integration

The frontend application interacts with a backend API to fetch data. The API endpoints used in the code are:

* `http://127.0.0.1:8000/freelancers`: This endpoint retrieves a list of freelancers.

* `http://127.0.0.1:8000/freelancers/search`: This endpoint performs a search for freelancers based on provided parameters.

> Note: It has been tested to work out even with the public endpoint of the Search api. But to improve performance it has been configured to run on the localhost

## Dependencies

The Dependencies required are available in package.json and will be automatically install when you run the `npm install` command.

## CI/CD pipeline

This repository has been set up with GitHub Actions and PM2 to enable continuous integration and continuous deployment (CI/CD) of the code. The code is deployed on an AWS EC2 instance and utilizes NGINX as the backend service to provide a seamless experience to users.