# Tradeling Frontend Code Challenge Solution
This project is the solutions of the assessment provided by Tradeling.

## Tech Stack (MERN)
#### Frontend
* React.js
* react-redux
* TypeScript
* redux-persist
* redux-thunk
* Styling: Vanilla CSS, Styled Components 
#### Backend
* Node.js 
* ExpressJs, REDIS
* axios
* swagger-ui-express
* winston

### Set up
- Clone the repo
-   Install the dependencies in both projects `frontend` and `backend`.
    ```
    Run `npm install`
    ```
- Create a `.env` file within the `backend` folder.
    ```
    REDIS_URL=redis://127.0.0.1:6379/1
    ```
- Create a `.env` file within the `frontend` folder.
    ```
    REACT_APP_SERVER_URL=http://localhost:5000/api
    ```
- Run the command `npm start` in both projects `backend` and `frontend`: 

- Browse to `http://localhost:3000/` to see the start page.

#### Swagger documentation
 - You can acccess the Swagger documenattaion 
    ```
     http://localhost:5000/docs/
    ```
#### Unit testing
 - Not including because of time constrains
