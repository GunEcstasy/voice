
// The language is Node.js
// This code converts google takeout data for google voice export from microhtml to json

// File: parse.js
// This code parses the file "googlevoice.html" and creates the file "googlevoice.json"



// Usage: node googlevoice.js <inputfile> <outputfile>
// Example: node googlevoice.js googlevoice.html googlevoice.json


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

fs.readFile(inputfile, function(err, data) {
    if(err) throw err;
    parser.write(data);
    parser.end();
    fs.writeFile(outputfile, JSON.stringify(messages), function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("JSON saved to " + outputfile);
        }
    });
});