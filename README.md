# E-commerce Website_frontend react for user

## Description

A Ecommerce Website made with React.js framework

## Features

* User registration and login
* Authentication via JWT
* 0Components for categories,  products

## Future Features

* Filtering Via categories and brands
* Admin Panel
* Add/ Remove/ Edit Brands, products and Categories in Admil Panel
* Customer Register/ login

## Technologies/libraries used

* React
* React-bootstrap
* React-router-dom
* CSS

## Getting Started

* Add your  preferrd PORT to the .env file  (you need to create your .env file in the root of the project)
* Register in the "Register" page with user name first name, last name, email, and password

* If everything is correct you can move to the "User" page.
Choose your preferred product, add it to your cart
Make your order

* Start the application 
npm start

--------------------------------------

# ExpresJS/SQLite3 API for frontend

## Description

Node.js CRUD application based on the SQLite database design and Express.js framework

## Features

* User registration and login
* Authentication via JWT
* CRUD for blog posts
* SQLite database
* sequelize ORM

## Future Features

* Filtering Via categories and brands
* Cart Add/ Edit/ Remove Functionality
* Admin Panel
* Add/ Remove/ Edit Brands, products and Categories in Admin Panel
* Customer Register/ login

## Getting Started

* Add your  preferrd PORT to the .env file  (you need to create your .env file in the root of the project)
* Example 
PORT=5000
* Choose a random string as JWT secret or generate it in your terminal
```
node
console.log(crypto.randomBytes(64).toString('hex'));
```
* Copy it and place in in your .env file
* Example
SECRET="yourrandomlygeneratedsecret"
* Start the application
```
nodemon server.js
```