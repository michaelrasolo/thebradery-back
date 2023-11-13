
# The Bradery - Fullstack test

This project is an app build in order to be part of the recruitment process of a Fullstack Devloper Apprentice at The Bradery.  


## Features
- Display all products and filter by category
- Select a product quantity and add it to the cart
- Review the cart, remove some products
- Input name, email and credit card to validate the order.
Disclaimer: payment information are dummy fields, to avoid any confusion on data collection.

## Tech Stack
**Server:** Node, Express

**Client:** React, NextJS

**Database:** MySQL





## Get started

### Prerequisites

Before you begin, ensure you have the following prerequisites installed on your computer:

- [MySQL](https://dev.mysql.com/downloads/installer/) - Relational database management system.
- [Node.js](https://nodejs.org/) - JavaScript runtime.
- [Nodemon](https://nodemon.io/) - (Assuming you have this installed globally).


### Database
Import the database schema and content using the provided file `braderydb.sql` by running
```bash
  mysql -u root -p < braderydb.sql
```

### Backend
Clone the repository
```bash
  git clone https://github.com/michaelrasolo/thebradery-back
```
Install the dependencies
```bash
  yarn install
```
Create a .env file at the root and set MySQL environment variables 
- `DB_HOST`: your connection name
- `DB_USER`: your user name
- `DB_PWD`: your password
- `DB_NAME`: your schema name


Run the application
```bash
  nodemon
```
Use the local URL to perform API calls

  `http://localhost:5050`

### Frontend
Clone the repository
```bash
  git clone https://github.com/michaelrasolo/thebradery-front
```
Install the dependencies
```bash
  yarn install
```

Run the application
```bash
  yarn dev
```
