 var connect = require('connect');
 var serveStatic = require('serve-static');
 var cors = require('cors');
 connect()
     .use(cors())
     .use(serveStatic(__dirname))
     .listen(3000, () => console.log('Server running on 3000...'));


    
