const crypto = require('crypto');

const SECRET = 'your-very-secret-key-change-this';
const path = '/jioplus.m3u';
const expires = Math.floor(Date.now()/1000) + 12*3600; // 12 hours
const msg = `${path}|${expires}`;
const sig = crypto.createHmac('sha256', SECRET).update(msg).digest('hex');

console.log(`https://your-worker-name.workers.dev${path}?expires=${expires}&sig=${sig}`);
