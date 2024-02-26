 var express = require('express');
 var serveStatic = require('serve-static');
 var cors = require('cors');
 var app = express()
 app
     .use(cors())
     .use(serveStatic(__dirname))
     .listen(3000, () => console.log('Server running on 3000...'));

app.post('/', (req, res) => {
    res.send('POST request to the homepage')
})