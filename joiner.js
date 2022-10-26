// The language is Node.js
// This code converts google takeout data for google voice export from microhtml to json

// File: joiner.js
// This code concatenates the html files in the directory "src" into a single file
// and writes it to the file "googlevoice.html"
// The file "googlevoice.html" is then used by the parser to create the file "googlevoice.json"
// it must select only the html files with "text" in the filename



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




 
    var inputfile = process.argv[2];
    var outputfile = process.argv[3];
    
    var parser = new htmlparser.Parser({
        onopentag: function(name, attribs){
            if(name === "div" && attribs.class === "message"){
                var message = {};
                message.id = attribs.id;
                message.type = attribs["data-type"];
                message.time = attribs["data-time"];
                message.date = attribs["data-date"];
                message.timestamp = attribs["data-timestamp"];
                message.text = "";
                messages.push(message);
            }
        }
        , ontext: function(text){
            if(messages.length > 0){
                messages[messages.length - 1].text += text;
            }
        }
        , onclosetag: function(tagname){
            if(tagname === "div"){
                if(messages.length > 0){
                    messages[messages.length - 1].text = messages[messages.length - 1].text.trim();
                }
            }
        }
    }, {decodeEntities: true});
    
    var messages = [];
   
   













/* 


var inputdir = "Calls";
var outputfile = "googlevoice.html";

var html = "";

fs.readdir(inputdir, function(err, files) {
    if (err) console.log("error");
    files.forEach(function(file) {
        if(file.indexOf("text") > -1){
            var filePath = path.join(inputdir, file);
            var fileContent = fs.readFileSync(filePath, 'utf8');
            output += fileContent;
            console.log("Added file: " + filePath);
        }
    });
    fs.writeFileSync(outputfile, output);
    console.log('Wrote file: ' + outputfile);
    });

    

// var files = fs.readdirSync(inputdir);

// for(var i = 0; i < files.length; i++){
//     var file = files[i];
//     if(file.indexOf("text") > -1){
//         var data = fs.readFileSync(path.join(inputdir, file));
//         output += data;
//     }
// }

// fs.writeFile(outputfile, output, function(err) {
//     if(err) {
//         console.log(err);
//     } else {
//         fs.writeFileSync(outputfile, output);
     
//         console.log("HTML saved to " + outputfile);
//     }
// });
 */