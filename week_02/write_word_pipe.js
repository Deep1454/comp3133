const { Transform } = require('stream')
class WriteWordPipe extends Transform {
   constructor() {
      super()
      this._transform = (chunk, encoding, cb) => {
        const newString = chunk.toString().replaceAll(" ", "\r\n")
         cb(null, newString)
      }
   }
}

module.exports = WriteWordPipe