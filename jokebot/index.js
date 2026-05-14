require('dotenv').config();

const axios = require('axios');

const TelegramBot =  require('node-telegram-bot-api');

// const token = '8930786939:8930786939:AAEhIpY1pkPX9X2Dcn_a03lC0MB5oZKiTYQ';

console.log(process.env.BOT_TOKEN);

const bot = new TelegramBot(process.env.BOT_TOKEN, {polling: true});

// kisibhi bhi message receive hone par ye function call hoga
// bot.on('message', (option) => {
//     console.log("Message received on the bot: ", option);

//     bot.sendMessage(option.chat.id, "Hello! I am a joke bot. I will tell you a /joke when you ask me to.");


// });
 
bot.onText(/\/joke/, async (option) => {
    const response = await axios.get('https://official-joke-api.appspot.com/random_joke');

    console.log(response.data);
    const setup = response.data.setup;
    const punchline = response.data.punchline;
    bot.sendMessage(option.chat.id, setup + " ," + punchline);

});







