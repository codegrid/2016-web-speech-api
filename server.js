var connect = require('connect');
var serveStatic = require('serve-static');
var app = connect();

//静的コンテンツを返せる
app.use(serveStatic(__dirname));

app.listen(8080);
console.log('Server running on 8080');
