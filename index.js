require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN;

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
    msg.channel.send('pong');
  }
});

bot.login(Njg3MDE5MTQ4ODgyMDgzODc0.Xmnywg.RpSOl9kKlgjHEhG8eqrw2uB9ppo);