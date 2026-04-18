const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'gentlesmp.aternos.me', // cambia esto
    port: 13163,
    username: '.1'
  });

  bot.on('spawn', () => {
    console.log('Bot conectado');

    // Movimiento para evitar AFK
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
    }, 30000);
  });

  bot.on('end', () => {
    console.log('Reconectando...');
    setTimeout(createBot, 5000);
  });

  bot.on('error', err => console.log(err));
}

createBot();
