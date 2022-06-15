# Basic template for node back-end project 

Note: this project is under development

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
 
In the root directory
```bash
npm run start:api
```
In the API directory
```bash
npm run start
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

- In the root directory
```bash
npm run dev:api
```
- In the API directory
```bash
npm run dev
```
## Directory tree
<<<<<<< HEAD
<pre>
├───API 
│   ├───handlers 
│   ├───middleware 
│   └───src 
=======

├───API
│   ├───handlers
│   ├───middleware
│   └───src
>>>>>>> 5460939db68f1d5cedf1f7806f9b1f0ee684d5df
│       └───routes
│           └───APIs
└───FrontEnd
    ├───assets
    ├───css
    ├───html
    └───js
<<<<<<< HEAD
</pre>
=======
>>>>>>> 5460939db68f1d5cedf1f7806f9b1f0ee684d5df
