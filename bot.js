const mineflayer = require('mineflayer');

function startBot() {
  const bot = mineflayer.createBot({
    host: 'gentlesmp.aternos.me',
    port: 13163,
    username: 'AFK_Bot',
    version: '1.20.4'
  });

  bot.on('spawn', () => {
    console.log('Bot conectado');

    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
    }, 30000);
  });

  bot.on('end', () => {
    console.log('Reconectando...');
    setTimeout(startBot, 10000);
  });

  bot.on('error', (err) => {
    console.log('Error:', err.message);
  });
}

startBot();
