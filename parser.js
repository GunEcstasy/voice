// The language is Node.js
// This code concatenates the html files in the directory "src" into a single file
// and writes it to the file "googlevoice.html"
// The file "googlevoice.html" is then used by the parser to create the file "googlevoice.json"

var fs = require('fs');
var path = require('path');
var htmlparser = require("htmlparser2");
var util = require('util');


var srcDir = path.join(__dirname, 'Calls');
var htmlFile = path.join(__dirname, 'googlevoice.html');
var jsonFile = path.join(__dirname, 'googlevoice.json');

var html = '';
var json = {};

fs.readdir(srcDir, function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
        var filePath = path.join(srcDir, file);
        var fileContent = fs.readFileSync(filePath, 'utf8');
        html += fileContent;
    });
    fs.writeFileSync(htmlFile, html);
    console.log('Wrote file: ' + htmlFile);
    });

// Path: parser.js
// The language is Node.js
// This code parses the file "googlevoice.html" and creates the file "googlevoice.json"
// The file "googlevoice.json" is then used by the extension to create the file "googlevoice.js"
// Which is the used to create the file "googlevoice.html", to display the Google Voice chat history in a browser



