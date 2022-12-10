const { freemem, totalmem } = require('os')
const log = require('./logger')

const memoryLog = []

const memoryStats = () => {
   const memoryTotalMb = parseInt(((totalmem() / 1024) / 1024))
   const freeMemoryMb = parseInt((freemem() / 1024) / 1024)
   const inUseMemoryMb = memoryTotalMb - freeMemoryMb;
   const inUseMemoryPercent = parseInt((inUseMemoryMb / memoryTotalMb) * 100)
   const freeMemoryPercent = parseInt((freeMemoryMb / memoryTotalMb) * 100)

   const stats = {
      totalMemory: `${memoryTotalMb} MB`,
      freeMemory: `${freeMemoryMb} MB`,
      freePercent: `${inUseMemoryPercent}%`,
      inUsePercent: `${inUseMemoryPercent}%`,
   }
   console.clear()
   console.log('======== MEMORY STATS ========')
   console.table(stats)
   log(stats)

}

setInterval(memoryStats, 1000)