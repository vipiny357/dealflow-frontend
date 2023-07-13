# Frontend of Search API README

This project is a frontend application built using React.js. It provides a user interface to interact with a backend API to display and search for freelancers. It can retrieve the list of freelancers available on the website and filter out the result based on specific parameters. On Home page it displays the list of all the available freelancers on the website and on the Search page we can filter out the specific freelancer based on search parameters.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


## File system

The file system of the project is as follows:
* `src/App.js`: It contains the routing configuration for the application. 
* `src/pages/HomePage.js`: It contains the homepage component, which displays a list of all freelancers.
* `src/pages/SearchPage.js`: It contains the search page component, allowing users to search for freelancers.
* `src/components/...`: This directory contains various reusable components used in the project.

## API Integration

The frontend application interacts with a backend API to fetch data. The API endpoints used in the code are:

* `https://18.188.92.21/freelancers`: This endpoint retrieves a list of freelancers.

* `https://18.188.92.21/freelancers/search`: This endpoint performs a search for freelancers based on provided parameters.



## Dependencies

The Dependencies required are available in package.json and will be automatically install when you run the `npm install` command.

## CI/CD pipeline

It has been setup with vercel to host which automatically handles the development and CI/CD integration with github.