# simpleCRUD

## Installation and Usage

Prerequisites: [Node.js](https://nodejs.org "Node.js"), [mysql](https://www.mysql.com)

You can install dependencies using npm: `npm install `

## Configuration

After running `npm install ` you need to configure DB settings in **config.json**:

```json
{
  "development": {
    "username": "root",
    "password": "your_password",
    "database": "your_database",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

## Initialize Database and run app

Initialize DB: `npm run db:init`

Run app: `npm start`
