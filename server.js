 var express = require('express');
 var serveStatic = require('serve-static');
 var cors = require('cors');
 const fileUpload = require('express-fileupload');
 const {resolve} = require("path");

 var AdmZip = require('adm-zip');

 const { glob } = require('glob');

 var app = express()
 app
     .use(cors())
     .use(fileUpload())
     .use(serveStatic(__dirname))
     .listen(3000, () => console.log('Server running on 3000...'));

 app.post('/file', (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
      }
    
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.sampleFile;
    
    // Use the mv() method to place the file somewhere on your server
    const filePath = './temp/cassie_agility_again.zip'
    sampleFile.mv(resolve('./temp/cassie_agility_again.zip'), function(err) {
      if (err)
        return res.status(500).send(err);   
    });

    res.send("success post")

    var zip = new AdmZip('./temp/cassie_agility_again.zip')
    zip.extractAllTo("./temp/", true);
})


app.get('/paths', async (req, res) => {
    const files = await glob('./examples/scenes/temp/**');
    console.log(files);
    res.send(files);
})