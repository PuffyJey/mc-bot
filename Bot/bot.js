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
    const actions = ['forward', 'back', 'left', 'right'];
  
    const action = actions[Math.floor(Math.random() * actions.length)];
    bot.setControlState(action, true);
  
    setTimeout(() => {
      bot.setControlState(action, false);
    }, 2000);
  
  }, 20000);

  bot.on('end', () => {
    console.log('Reconectando...');
    setTimeout(createBot, 5000);
  });

  bot.on('error', err => console.log(err));
}

createBot();
