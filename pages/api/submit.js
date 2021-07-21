import got from 'got';
import parser from 'ua-parser-js';

const URL = 'https://zhangwei-7gl977h782ef503e-1306346100.ap-shanghai.service.tcloudbase.com/rest-api/v1.0/quotation';

async function handler(req, res) {
  if (req.method === 'POST') {
    const ua = parser(req.headers['user-agent']);
    const object = req.body;
    object.clientinfo = ua;
    object.timestamp = new Date();
    await got.post(URL, {
      json: {
        data: [
          object,
        ],
      },
      responseType: 'json',
    });

    res.json({ sucess: true });
  }
}

export default handler;
