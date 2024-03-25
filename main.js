//Import required libraries
require("dotenv").config()// initialize environment variables 
const { Client } = require('discord.js')
const nodeCron = require('node-cron')
// gets token from the .env file
const DISCORD_TOKEN = process.env.TOKEN
// Channel ID
const CHANNEL_ID = process.env.CHANNEL_ID
// the starting hour message its in the 24 hour format
const START_HOUR = process.env.START_HOUR
// the ending hour message its in the 30 hour format
const END_HOUR = process.env.END_HOUR


// Main function programs starting point
async function main() {
  // add a new discord client instance
  const client = new Client({ intents: ["GuildMessages", "Guilds"] });
  //Set up Bot's login
  await client.login(DISCORD_TOKEN);

  const channel = await client.channels.fetch(CHANNEL_ID, { cache: true });
  if (!channel) {
    throw new Error("Couldn't find channel "+ CHANNEL_ID)
  }

  // when bot is ready schedule messages
  client.once("ready", () => {
    // Schedule task to run from Monday to Friday
    nodeCron.schedule(`0 ${START_HOUR} * * 1-5`, () => {
      // Add your task logic here
      console.log('time now is ' + (new Date().toISOString()));
      console.log("testing");
      channel.send('The Message has to goes here');
    });

    // Schedule task to run from Monday to Friday
    nodeCron.schedule(`0 ${END_HOUR} * * 1-5`, () => {
      // Add your task logic here
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
}

main().catch(err=> console.log(err))

