# Lots of Dog Photos!

- [1. Setup](#1-setup)
- [2. Assignment](#2-assignment)
- [3. Approach](#3-approach)
- [4. Next Steps](#4-next-steps)
- [5. About Me](#5-about-me)

## 1. Setup
To start, fork the repo and 'git clone' to your computer. Run 'npm install' in the root directory. Once installed, 'npm start' will start a development server on [http://localhost:3000](http://localhost:3000) to view the app in the browser.

## 2. Assignment
Using React and Redux, there are three major components to this assignment.
1. Setup API service to collect dog breed data from the [dogs API](https://dog.ceo/dog-api/documentation/​).
2. Count the total number of images per dog breed using the same API, and store results in the Redux store.
3. Build a web application to show in a pie chart the top 10 breeds and their breakdown of total images stored overall.

## 3. Approach

In order to complete the assignment, I first setup the shell of the React app and it's file structure. Using an API service, I tested the different endpoints and learned the format of the data I was going to recieve. Once I had this, I began setting up my Redux store and linked it to the main components in the application. Using the API service, I used the UseEffect hook to store the necessary API data in the Redux store on load. Once the dog data and the count of images were stored in the Redux store, I then began to build out the pie chart functionality. I used a component called react-minimal-pie-chart, which was easy to integrate. Once I completed some transformations and manipulations of the data for the pie chart, I began to tweak some of the formatting and data labels. Once all of this was done, I build some simple testing for the actions and the reducers for Redux. These tests can be done by running 'npm test' in the root directory.

## 4. Next Steps

With some more time, I would have liked to add some additional functionality and formatting to the web application. Firstly, there are many really interesting formatting options and animations for the pie chart component I was using - it would be great to add some interactivity and animations. Secondly, it would be interesting to show some of the photos of the dog breeds when a piece of the pie chart was clicked on in a caurosel format underneath the chart. In addition to this, having a drop down search where breeds and sub-breeds could be choosen would make it easier to find specific breeds.

## 5. About Me

James Laing - [GitHub](https://github.com/laingr) - [LinkedIn](https://www.linkedin.com/in/jalaing/) 