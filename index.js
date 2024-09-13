const TelegramBot = require('node-telegram-bot-api');

// استبدل هذا بالتوكن الخاص بك
const token = '7504347842:AAHJBCrc0GiH2eQpnMvY1UP7vTANf6yR5G8';

// إنشاء كائن البوت
const bot = new TelegramBot(token, { polling: true });

// الرد على رسالة /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'أهلاً بك! كيف يمكنني مساعدتك؟');
});

// الرد على أي رسالة نصية
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  // إذا كتب المستخدم "مرحبا"
  if (messageText.toLowerCase() === 'مرحبا') {
    bot.sendMessage(chatId, 'أهلاً وسهلاً!');
  } else {
    bot.sendMessage(chatId, `لقد أرسلت:: ${messageText}`);
  }
});
