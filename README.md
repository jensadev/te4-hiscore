# Anteckningar 
```bash
sudo npm i -g express express-generator

mkdir te4-hiscore
cd te4-hiscore

express --no-view --git
npm install

npm i dotenv pg pg-hstore sequelize cors
npm i --save-dev sequelize-cli nodemon jest supertest

npx sequelize init 
npx sequelize-cli model:generate --name Game --attributes name:string,url:string
npx sequelize-cli model:generate --name Score --attributes gameId:integer,player:string,points:integer
```

```js
require('dotenv').config();

module.exports = {
    development: {
        username: process.env.DB_USER || '',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || '',
        host: process.env.DB_HOST || '',
        dialect: 'postgres'
    },
}
```

```
DB_NAME=
DB_USER=
DB_PASSWORD=
DB_HOST=localhost

DB_URL=postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/${DB_NAME}
```

```bash
docker exec -it te4-postgres bash
psql -h localhost -U postgres
create database hiscore;
```

Update models

```bash
npx sequelize-cli db:migrate

npx sequelize-cli seed:generate --name game
npx sequelize-cli seed:generate --name score
```