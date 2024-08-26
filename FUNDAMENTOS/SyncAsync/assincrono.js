const fs = require('fs')

console.log('Inicio')

fs.writeFile('assincrono.txt', 'Teste Async', function (err){
    setTimeout(function(){
        console.log('Arquivo criado!')
    }, 1000)
})

console.log('Fim')