const Koa = require('koa');
const app = new Koa();
const os = require("os");
var hostname = os.hostname();
const fs = require('fs');



app.use(async ctx => {
  ctx.body = 'Hello World';
  console.log('Got a request!');
fs.appendFile('/tmp/data/log.txt', hostname+' got a request', function (err) {
  if (err) throw err;
  console.log('Saved!');
});


});

app.listen(3000);
