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

CHANNEL_ID=<the channel id of where you want the bot to message>
```

you will need to run the program to create a config file, 
bot won't run if there are no tasks to perform om he config file

### run program

``` bash
npm run start
```

### dev mode

``` bash
npm run dev
```

### list of packages used

- [nodemon](https://www.npmjs.com/package/nodemon)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [discord.js](https://discord.js.org/)
- [node-cron](https://www.npmjs.com/package/node-cron)
- [jest](https://www.npmjs.com/package/jest)
