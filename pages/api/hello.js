var parser = require('ua-parser-js');
var whitelist = ['https://zhangwei-7gl977h782ef503e-1306346100.ap-shanghai.service.tcloudbase.com/rest-api/v1.0/quotation'];
import Cors from 'cors'

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET','HEAD','POST'],
})

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }
      return resolve(result)
    })
  })
}

async function handler(req, res) {
  // Run the middleware
  let data = await runMiddleware(req, res, cors)
  console.log(data)
  // Rest of the API logic
  res.json({ message: 'Hello Everyone!' })
}

export default handler