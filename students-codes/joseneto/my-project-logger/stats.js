const os = require('os');
const { freemem, totalmem } = os;
const log  = require('./logger');

function readStats() {
    const total = totalmem();
    const free = freemem();
    const used = total - free;
    const usedPercentage = ((used * 100) / total);
    
    const stats = {
        total: `${Number( total/ (Math.pow(2,20)) ).toFixed(2)} MB`,
        freeMem: `${Number( free/ (Math.pow(2,20)) ).toFixed(2)} MB`,
        percents: `${usedPercentage.toFixed(2)}% in use`
    }
    console.clear();
    console.log('+++++++++ MEMORY STATS ++++++++');
    console.table(stats);
    log(JSON.stringify(stats) + "\n");
}

setInterval(readStats, 1000);