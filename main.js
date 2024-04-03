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
    const client = new Client({ intents: ["GuildMessages", "Guilds"] });
    //Set up Bot's login
    try {
      await client.login(DISCORD_TOKEN);

      const channel = await client.channels.fetch(CHANNEL_ID, { cache: true });
      if (!channel) {
        throw new Error("Couldn't find channel "+ CHANNEL_ID)
      }

      // when bot is ready schedule messages       
      console.log(`bot ready and tasks are scheduled for ${configData.schedule.times.start} and ${configData.schedule.times.end}`);
      // Schedule task to run from Monday to Friday
      nodeCron.schedule(configData.schedule.times.start, () => {
        const task = configData.schedule.tasks[configData.day].split('-')[0];

        const message = `Check-In:\nGroup: ${configData.group}\nCompleted: ${task}\nIssues: None\nFeeling: ${configData.feeling}`
          
        channel.send(message);
      });

        // Schedule task to run from Monday to Friday
      nodeCron.schedule(configData.schedule.times.end, () => {
        const task = configData.schedule.tasks[Number(configData.day)].split('-')[1];

        const message = `Check-Out:\nGroup: ${configData.group}\nCompleted: ${task}\nIssues: None\nFeeling: ${configData.feeling}`
          
        channel.send(message);

        // increment the day and save it fo the file
        configData.day = Number(configData.day) + 1;
          writeConfig(configData);
      });
    } catch (error) {
      console.log(error);
    }

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

