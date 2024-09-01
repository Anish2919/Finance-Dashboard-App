# Finance-Dashboard-App
Build A MERN Finance Dashboard App | Machine Learning, Typescript, React, Node, MUI, Deployment. 

### watch YouTube Video 
Youtube Link: 

### Project Overview

This project utilizes real machine learning with a regression library to develop a web application. The backend is deployed on fly.io, while the frontend is deployed on Vercel.

### Technologies Used

**Frontend:**
- **MUI:** Used for designing user interfaces.
- **TypeScript:** Provides static typing for a more robust codebase.
- **Vite:** Used for setting up the frontend development environment.
- **Recharts:** Utilized for creating charts and data visualizations.
- **Redux:** Employed for state management within the application.
- **RTK Query:** Used for making API calls to the backend.
- **Heroicons:** Used for incorporating icons into the user interface.
- **React Router:** Utilized for navigation within the application.

**Backend:**
- **Node.js:** Used for server-side development.
- **Express.js:** Used as the web application framework for Node.js.
- **Mongoose:** Employed as the MongoDB object modeling tool for Node.js.


# How to run the project
- **git clone** git clone 'url' 
- **go to client repo:** cd client
- **go to client repo:** cd client
- **then install npm packages:** npm install
- **run client** npm run dev
- **Then create another terminal and go to server repo** cd server
- **install package** npm install 
- **run server** npm run dev

## Server setup: 
- **create .env file AND enter mongodb_url + port number: 9000** 
PORT=9000
MONGODB_URL='mongodb_ur'

## SetUp cors 
- **go to ./server/index.js** 
- **update corstOptions, change client host url** 
const corsOptions = {
  origin: ENTER_RUNNING_PORT_OF_CLIENT, 
  optionsSuccessStatus: 200
} 
EXAMPLE: 
const corsOptions = {
  origin: 'http://localhost:5173', 
  optionsSuccessStatus: 200
}


## Youtube Video Source for original video: 
Youtube link: https://www.youtube.com/watch?v=uoJ0Tv-BFcQ. 
