const fs = require('fs')

fs.rename("arquivo.txt", "Novo arquivo.txt", function(err){
    if(err){
        console.log(err)
        return
    }
    console.log("Arquivo renomeado")
})