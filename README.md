# Discordia

A discord bot to help manage checking in and out

## System requirements

you need to have node and npm installed on your machine

### commands

to install all packages do

``` bash
npm install
```

## To run script

create a .env file and fill required environment variables

```
TOKEN=<token from discord bot>

# the hours are set in the 24 hour format

START_HOUR=<hour for the starting message>
END_HOUR=<hour for the ending message>
```

``` bash
npm run start
```

dev mode

``` bash
npm run dev
```

### list of packages used

- [nodemon](https://www.npmjs.com/package/nodemon)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [discord.js](https://discord.js.org/)