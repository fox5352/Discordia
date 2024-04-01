//Import required libraries
require("dotenv").config()// initialize environment variables 
const { Client } = require('discord.js')
const nodeCron = require('node-cron')
// local imports
const { readConfig } = require("./utils")


// gets token from the .env file
const DISCORD_TOKEN = process.env.TOKEN
// Channel ID
const CHANNEL_ID = process.env.CHANNEL_ID

// Main function programs starting point
async function main() {
  console.log("reading Config file");
  const configData = await readConfig("./config.json")

  console.log("checking for tasks...");
  // if there are tasks configured run the bot
  if (configData.schedule.tasks.length > 0) {

    console.log("initiating discord bot...");
    // add a new discord client instance
    const client = new Client({ intents: ["GuildMessages", "Guilds"] });
    //Set up Bot's login
    await client.login(DISCORD_TOKEN);

    const channel = await client.channels.fetch(CHANNEL_ID, { cache: true });
    if (!channel) {
      throw new Error("Couldn't find channel "+ CHANNEL_ID)
    }

    console.log("bot ready and tasks are scheduled");
    // when bot is ready schedule messages
    client.once("ready", () => {
      // Schedule task to run from Monday to Friday
      nodeCron.schedule(configData.times.start, () => {
        // TODO: write proper message format and send it

        console.log('time now is ' + (new Date().toISOString()));
        console.log("testing");
        channel.send('The Message has to goes here');
      });

      // Schedule task to run from Monday to Friday
      nodeCron.schedule(configData.times.end, () => {
        // TODO: write proper message format and send it

        console.log('time now is ' + (new Date().toISOString()));
        console.log("testing");
        channel.send('The Message has to goes here');
      });
    })

    client.on('error', e=>{
      throw new Error('Error ' + e.message)
    });

    client.on('close', ()=>{
      console.log("EOP");
    })
  }else {
    throw new Error('bot has no tasks to perform');
  }
}

main().catch(err=> console.log(err))

