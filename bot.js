const mineflayer = require('mineflayer');

function startBot() {
  const bot = mineflayer.createBot({
    host: 'gentlesmp.aternos.me',
    port: 13163,
    username: 'AFK_Bot'
  });

  bot.on('spawn', () => {
    console.log('Conectado al server');

    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
    }, 30000);
  });

  bot.on('end', () => {
    console.log('Desconectado, reintentando...');
    setTimeout(startBot, 10000);
  });

  bot.on('error', (err) => {
    console.log('Error:', err.message);
  });
}

startBot();const mineflayer = require('mineflayer');

function startBot() {
  const bot = mineflayer.createBot({
    host: 'gentlesmp.aternos.me',
    port: 13163,
    username: 'AFK_Bot'
  });

  bot.on('spawn', () => {
    console.log('Conectado');

    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
    }, 30000);
  });

  bot.on('error', (err) => {
    console.log('Error:', err.message);
  });

  bot.on('end', () => {
    console.log('Desconectado, reintentando...');
    setTimeout(startBot, 15000);
  });
}

setTimeout(startBot, 15000);
