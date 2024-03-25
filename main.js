//Import required libraries
require("dotenv").config()// initialize environment variables 
const discordLibrary = require('discord.js')
const nodeCron = require('node-cron')
// gets token from the .env file
const DISCORD_TOKEN = process.env.TOKEN

// add a new discord client instance
const client = new Discord.client();
//Set up Bot's login
client.login(DISCORD_TOKEN);



// the starting hour message its in the 24 hour format
const START_HOUR = process.env.START_HOUR
// the ending hour message its in the 30 hour format
const END_HOUR = process.env.END_HOUR

// Main function programs starting point
function main() {
  console.log('starting hour is ' + START_HOUR);
  console.log('ending hour is '+ END_HOUR);
  const channel = client.channels.cache.get('Channel ID goes here!');

  // Schedule task to run from Monday to Friday
  nodeCron.schedule(`0 ${START_HOUR} * * 1-5`, () => {
    // Add your task logic here
    console.log('time now is ' + (new Date().toISOString()));
    console.log("testing");
  });

  // test block
  nodeCron.schedule(`0 30 17 * * 1-5`, () => {
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
  //add the channel and the message
  
 


  console.log("EOP 69"); 
  console.log("sixty nine");
  
}

main()

