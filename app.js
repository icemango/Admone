const TelegramBot = require('node-telegram-bot-api');
const config = require('dotenv').config({'path': 'config.env'});

const bot = new TelegramBot(process.env.API_TOKEN, {polling: true});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, 'Received your message: ' + msg.text);
});
