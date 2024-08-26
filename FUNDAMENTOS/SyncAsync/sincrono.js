const fs = require('fs')

console.log('inicio')

fs.writeFileSync('sincrono.txt', 'Teste Sync')

console.log('fim')