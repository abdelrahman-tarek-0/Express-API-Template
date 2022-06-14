# Basic template for node back-end project 


## Download the following
-   Download and install [node.js](https://nodejs.org/en/)

## API Endpoints
_name_ <br/>
returns 'name api route' this is manly for the test
<br />
```http
GET localhost:3000/api/name
```


## To start the project 

- Start the server to start using the api

```bash
npm run start:api
```

## Environment Variables

-  you need to create .env file and put this inside it<br />
    PORT = 3000<br />
    ENV = dev<br />

## Port server
Server running on port `3000` <br />
The url is `http://localhost:3000`<br />


## Scripts


### to use prettier and eslint for better code formatting
```bash
npm run format
```

#### To run the nodemon to watch for any changes in the dev phase
```bash
npm run dev:api
```

