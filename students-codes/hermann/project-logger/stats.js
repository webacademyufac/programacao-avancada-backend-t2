const os = require('os');
const log = require('./logger');

const { freemem, totalmem } = os;

// console.log(`${(parseInt(freemem()/1024/1024))} MB - ${(parseInt(totalmem()/1024/1024))} MB`);

setInterval( () => {
    const total = parseInt(freemem()/1024/1024);
    const freeMem = parseInt(totalmem()/1024/1024);
    const usage = total - freeMem;
    const percents = parseInt((usage / total) * 100);
    const stats = {
        total: `${total} MB`,
        freeMem: `${freeMem} MB`,
        percents: `${percents}% em uso`
    }
    console.clear();
    console.log('+++++++ MEMORY STATS +++++++');
    console.table(stats);
    
    // Enviando os dados da variavel stats para um JSON
    log('Rodando...', JSON.stringify(stats));

}, 1000);
