var parser = require('ua-parser-js');
var whitelist = ['https://zhangwei-7gl977h782ef503e-1306346100.ap-shanghai.service.tcloudbase.com/rest-api/v1.0/quotation'];
const got = require('got');

const URL = "https://zhangwei-7gl977h782ef503e-1306346100.ap-shanghai.service.tcloudbase.com/rest-api/v1.0/quotation"

async function handler(req, res) {
  if(req.method === "POST"){
    var ua = parser(req.headers['user-agent']);
    let object = req.body;
    object.clientinfo = ua;
    object.timestamp = new Date();
    const response = await got.post(URL,{
      json: {
        data:[
          object
        ]
      },
      responseType: 'json'
    });
      
    res.json({sucess:true})
  }
}

export default handler;