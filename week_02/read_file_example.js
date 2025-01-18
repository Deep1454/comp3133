const fs = require('fs')
console.log('-----------start---------------')
// fs.readFile('input.txt','utf-8',(err,data) => {
fs.readFile('input.txt',(err,data) => {
    if(err){
        console.log(err)
        return
    }
    console.log(data)
    // console.log(data.toString())
    // console.log(data.toString('utf-8'))
})

let fileData = fs.readFileSync('input.txt')
console.log(`Sync${fileData}`)

console.log('-----------End---------------')
