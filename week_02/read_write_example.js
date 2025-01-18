const fs = require('fs')


fs.open('read_write.txt', 'r+',(err, fd)=>{
    if(err){
        console.log(err)
        return
    }
    console.log('File Opened')
   
    let readBuffer = Buffer.alloc(10)

    fs.readSync(fd,readBuffer,0,readBuffer.length)
    console.log(readBuffer.toString())

    // fs.readSync(fd,readBuffer,0,readBuffer.length)
    // console.log(readBuffer.toString())
    // fs.readSync(fd,readBuffer,0,readBuffer.length)
    // console.log(readBuffer.toString())
    // fs.readSync(fd,readBuffer,0,readBuffer.length)
    // console.log(readBuffer.toString())

    let writeData = Buffer.from(', Toronto')
    fs.writeSync(fd , writeData,0,writeData.length,31)
})