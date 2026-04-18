const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'TU_SERVER.aternos.me', // CAMBIA ESTO
    port: 25565,
    username: 'Bot24_7'
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

createBot();
