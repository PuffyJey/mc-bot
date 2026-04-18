const mineflayer = require('mineflayer');

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
    console.log('Reconectando en 10s...');
    setTimeout(startBot, 10000);
  });
}

startBot();const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'gentlesmp.aternos.me', // CAMBIA ESTO
    port: 13163,
    username: '.1'
  });

  bot.on('spawn', () => {
    console.log('Bot conectado');

    // Movimiento anti-AFK
    setInterval(() => {
      const actions = ['forward', 'back', 'left', 'right'];
      const action = actions[Math.floor(Math.random() * actions.length)];

      bot.setControlState(action, true);

      setTimeout(() => {
        bot.setControlState(action, false);
      }, 2000);

    }, 20000);
  });

  bot.on('end', () => {
    console.log('Reconectando...');
    setTimeout(createBot, 5000);
  });

  bot.on('error', (err) => {
    console.log('Error:', err);
  });
}
const http = require('http');

http.createServer((req, res) => {
  res.write("Bot activo");
  res.end();
}).listen(3000);

createBot();
