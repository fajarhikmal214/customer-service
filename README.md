# Customer Service

Express JS - Simple CRUD Customer Service

## Tech Stacks
- **JavaScript** - <https://javascript.com/>
- **Node.js** - <http://nodejs.org/>
- **Express Js** - <https://expressjs.com/>
- **Sequelize** - <https://sequelize.org/>
- **PostgreSQL** - <https://www.postgresql.org/>

## Quick Start

Clone the project:

```bash
$ git clone -b development https://github.com/fajarhikmal214/customer-service.git
$ cd customer-service
$ cp .env.example .env
```


## Installing Dependencies

- With npm

  ```bash
  # Install node packages
  $ npm install
  ```

## Applying Migrations

Make sure there is already a PostgreSQL database created and the credetials are filled in the `.env` file


- Locally
  - With npm

    ```bash
    # apply migrations to database
    $ npm run db:migrate

    # This command will execute down in the latest executed migration.
    $ npm run db:migrate:undo
    
    # This command will execute down all executed migration.
    $ npm run db:migrate:undo:all
    
    ```

## Applying Database Seeders

Make sure there is already a PostgreSQL database created, the credetials are filled in the `.env` file and all migrations already migrated

- Locally
  - With npm

    ```bash
    # seeding data to database
    $ npm run seed:run
    ```

## How to Run

- Run locally
  - With npm

    ```bash
    $ npm run start:dev
    ```

- Run on production :
  - With npm

    ```bash
    $ npm start
    ```

## How to Test

- Locally
  - with npm
    ```bash
    $ npm run test
    ```
