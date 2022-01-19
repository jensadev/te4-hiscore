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

# TODO

- REST routes (fix)
    - POST /score/:gameId
    - GET /score/:gameId
    - GET /game/:gameId

- Player ID? for tracking score across games
- API key
- Authentication
- Documentation
- Proper formated responses
- Proper error handling
# Tester

Se https://github.com/jensnti/notes
# Heroku

Deploy

- Registrera dig
- Skapa en ny app
- Koppla appen under deploy till ditt GitHub-konto och repo.
    - Välj auto deploy från main
- installer CLI för WSL
    - https://devcenter.heroku.com/articles/heroku-cli
    - ```curl https://cli-assets.heroku.com/install.sh | sh```
    - Kör ```heroku apps``` så du får webbprompt för login
- Flytta sequelize-cli från dev deps till deps i package.json

Surfa in på din app i Heroku.
- Klicka in på Resources
- Lägg till add-ons
- Välj Heroku Postgres
- Klicka in på sidan för Heroku postgres
- Gå till settings, kolla view credentials, här finns din db info om du behöver den

Hoppa sedan tillbaka  till din app. I Settings tabben, under config_vars ska nu en HEROKU_POSTGRES_FÄRG_URL finnas.
Du behöver denna KEY.

Öppna config/config.js, redigera
```js
    production: {
        use_env_variable: 'HEROKU_POSTGRESQL_FÄRG_URL',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    },
```

## Fixa

Nu borde setupen vara gjord så att din app är uppe och körs, men databasen fungerar inte ännu.
För att köra migrations behöver vi göra det med Heroku-cli som vi installerade.

**Tips** för att kolla vad som sker på servern, loggar, använd ```heroku logs -t -a APPNAME```

```bash
heroku apps
heroku run sequelize db:migrate --env production --app APPNAME
heroku run sequelize db:seed:all --env production --app APPNAME
```

## $$$

Med lite tur fick jag med allt, det fungerade osv.
Om du behöver felsöka, kolla din databas etc. så kan du connecta till den med extensionen i vscode. Använd de credentials som finns på Heroku postgres addonet.
