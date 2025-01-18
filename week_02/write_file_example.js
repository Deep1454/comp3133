const fs = require('fs')
let dataTowrite = "Welcome to GBC!"
fs.writeFile('output.txt', dataTowrite,(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log('Async callback DATA write success')
})
dataTowrite = "Welcome to George Brown College!"
fs.writeFileSync('output.txt', dataTowrite)
console.log('Sync callback DATA write Success')