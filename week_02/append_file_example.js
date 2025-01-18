const fs = require('fs')

let dataToAppend = "Data has been added successfully!"
fs.promises.appendFile('output.txt',dataToAppend)
   .then(()=>{
    console.log('Data Appended')
   })
   .catch((err)=>{
      console.log(err)
   })

