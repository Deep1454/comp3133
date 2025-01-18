const fs = require('fs')
const zlib = require('zlib')
const WriteWordPipe = require('./write_word_pipe')

let readStream = fs.createReadStream('input_stream.txt')
let writeSteam = fs.createWriteStream('output_stream.txt')

readStream.on('data', (chunk) => {
    console.log(chunk.toString())
})

readStream.on('close', () => {
    console.log('Read stream closed')
})

readStream.on('error', (err) => {
    console.log(`Error on read stream: ${err}`)
})

readStream.on('end', () => {
    console.log('Read Stream ended')
})

writeSteam.on('error', (err) => {
    console.log(`Error on write stream: ${err}`)
})

writeSteam.on('close', () => {
    console.log('Write stream closed')
})

writeSteam.write('Hello')
writeSteam.write('World')
// writeSteam.end()


// Pipe
readStream.pipe(writeSteam)
readStream.pipe(zlib.createGzip())
        .pipe(fs.createWriteStream('data.gz'))

readStream.pipe(new WriteWordPipe())
            .pipe(fs.createWriteStream('word_lists.txt'))