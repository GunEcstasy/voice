Synthesizing 9/10 solutions

=======

var path = require('path');

var htmlFile = path.join(__dirname, 'googlevoice.html');
var jsonFile = path.join(__dirname, 'googlevoice.json');

var html = fs.readFileSync(htmlFile, 'utf8');
var json = {};

var lines = html.split('

');
var line;
var lineNum = 0;
var lineCount = lines.length;
var lineType;
var lineData;
var lineDataArray;
var lineDataArrayLength;
var lineDataArrayIndex;
var lineDataArrayItem;
var lineDataArrayItemArray;
var lineDataArrayItemArrayLength;
var lineDataArrayItemArrayIndex;
var lineDataArrayItemArrayItem;
var lineDataArrayItemArrayItemArray;
var lineDataArrayItemArrayItemArrayLength;
var lineDataArrayItemArrayItemArrayIndex;
var lineDataArrayItemArrayItemArrayItem;

var name;
var nameArray;
var nameArrayLength;
var nameArrayIndex;
var nameArrayItem;

var number;
var numberArray;
var numberArrayLength;
var numberArrayIndex;
var numberArrayItem;

var date;
var dateArray;
var dateArrayLength;
var dateArrayIndex;
var dateArrayItem;

var time;
var timeArray;
var timeArrayLength;
var timeArrayIndex;
var timeArrayItem;

var text;
var textArray;
var textArrayLength;
var textArrayIndex;
var textArrayItem;

var message;
var messageArray;
var messageArrayLength;
var messageArrayIndex;
var messageArrayItem;

var messageObject;

var messages = [];
var messagesLength;
var messagesIndex;
var messagesItem;

var names = [];
var namesLength;
var namesIndex;
var namesItem;

var numbers = [];
var numbersLength;
var numbersIndex;
var numbersItem;

var dates = [];
var datesLength;
var datesIndex;
var datesItem;

var times = [];
var timesLength;
var timesIndex;
var timesItem;

var texts = [];
var textsLength;
var textsIndex;
var textsItem;

var messageObjects = [];
var messageObjectsLength;
var messageObjectsIndex;
var messageObjectsItem;

var nameObjects = [];
var nameObjectsLength;
var nameObjectsIndex;
var nameObjectsItem;

var numberObjects = [];
var numberObjectsLength;
var numberObjectsIndex;
var numberObjectsItem;

var dateObjects = [];
var dateObjectsLength;
var dateObjectsIndex;
var dateObjectsItem;

var timeObjects = [];
var timeObjectsLength;

=======

var path = require('path');

var htmlFile = path.join(__dirname, 'googlevoice.html');
var jsonFile = path.join(__dirname, 'googlevoice.json');

var html = fs.readFileSync(htmlFile, 'utf8');
var json = {};

var htmlLines = html.split('

');
var htmlLinesLength = htmlLines.length;

var line, value;
var i, j, k;

for (i = 0; i < htmlLinesLength; i++) {
    line = htmlLines[i];
    if (line.indexOf('id=') !== -1) {
        value = line.substring(line.indexOf('id=') + 4, line.indexOf('>'));
        json[value] = line;
    }
}

fs.writeFileSync(jsonFile, JSON.stringify(json));
console.log('Wrote file: ' + jsonFile);

// Path: googlevoice.html
// The language is HTML
// This file is created by the parser and used by the extension
// It is used to display the Google Voice chat history in a browser

// Path: googlevoice.json
// The language is JavaScript
// This file is created by the parser and used by the extension
// It is used to display the Google Voice chat history in a browser

// Path: googlevoice.js
// The language is JavaScript
// This file is created by the extension and used by the parser
// It is used to parse the Google Voice chat history for the extension

// Path: googlevoice.js
// The language is JavaScript
// This file is created by the extension and used by the parser
// It is used to parse the Google Voice chat history for the extension

// Path: googlevoice.js
// The language is JavaScript
// This file is created by the extension and used by the parser
// It is used to parse the Google Voice chat history for the extension

// Path: googlevoice.js
// The language is JavaScript
// This file is created by the extension and used by the parser
// It is used to parse the Google Voice chat history for the extension

// Path: googlevoice.js
// The language is JavaScript
// This file is created by the extension and used by the parser
// It is used to parse the Google Voice chat history for the extension

// Path: googlevoice.js
// The language is JavaScript
// This file is created by the extension and used by the parser
// It is used to parse the Google Voice chat

=======

var path = require('path');
var cheerio = require('cheerio');

var htmlFile = path.join(__dirname, 'googlevoice.html');
var jsonFile = path.join(__dirname, 'googlevoice.json');

var html = fs.readFileSync(htmlFile, 'utf8');
var $ = cheerio.load(html);

var json = {};
var messages = [];

$('div.message').each(function(i, elem) {
    var message = {};

    message.isIncoming = $(elem).hasClass('incoming');
    message.isOutgoing = $(elem).hasClass('outgoing');
    message.isMissed = $(elem).hasClass('missed');
    message.isPlaced = $(elem).hasClass('placed');
    message.isReceived = $(elem).hasClass('received');
    message.isTranscribed = $(elem).hasClass('transcribed');
    message.isDeleted = $(elem).hasClass('deleted');
    message.isSpam = $(elem).hasClass('spam');
    message.isVoicemail = $(elem).hasClass('voicemail');
    message.isMms = $(elem).hasClass('mms');
    message.isRead = $(elem).hasClass('read');
    message.isUnread = $(elem).hasClass('unread');
    message.isStarred = $(elem).hasClass('starred');
    message.isUnstarred = $(elem).hasClass('unstarred');
    message.isArchived = $(elem).hasClass('archived');
    message.isUnarchived = $(elem).hasClass('unarchived

=======

var path = require('path');
var cheerio = require('cheerio');

var htmlFile = path.join(__dirname, 'googlevoice.html');
var jsonFile = path.join(__dirname, 'googlevoice.json');

var html = fs.readFileSync(htmlFile, 'utf8');
var $ = cheerio.load(html);

var json = {};

// Path: parser.js
// The language is Node.js
// This code parses the file "googlevoice.html" and creates the file "googlevoice.json"
// The file "googlevoice.json" is then used by the extension to create the file "googlevoice.js"
// Which is the used to create the file "googlevoice.html", to display the Google Voice chat history in a browser

var fs = require('fs');
var path = require('path');
var cheerio = require('cheerio');

var htmlFile = path.join(__dirname, 'googlevoice.html');
var jsonFile = path.join(__dirname, 'googlevoice.json');

var html = fs.readFileSync(htmlFile, 'utf8');
var $ = cheerio.load(html);

var json = {};

var $conversations = $('#conversations');
var $conversations = $('#conversations');
var $conversations = $('#conversations');
var $conversations = $('#conversations');

var $conversations = $('#conversations');
var $conversations = $('#conversations');
var $conversations = $('#conversations');
var $conversations = $('#conversations');

var $conversations = $('#conversations');
var $conversations = $('#conversations');
var $conversations = $('#conversations');
var $conversations = $('#conversations');

var $conversations = $('#conversations');
var $conversations = $('#conversations');
var $conversations = $('#conversations');
var $conversations = $('#conversations');

var $conversations = $('#conversations');
var $conversations = $('#conversations');
var $conversations = $('#conversations');
var $conversations = $('#conversations');

var $conversations = $('#conversations');
var $conversations = $('#conversations');
var $conversations = $('#conversations');
var $conversations = $('#conversations');

var $conversations = $('#conversations');
var $conversations = $('#conversations');
var $conversations = $('#conversations');
var $conversations = $('#conversations');

var $conversations = $('#conversations');
var $conversations = $('#conversations');
var $con

=======

var path = require('path');
var cheerio = require('cheerio');

var htmlFile = path.join(__dirname, 'googlevoice.html');
var jsonFile = path.join(__dirname, 'googlevoice.json');

var html = fs.readFileSync(htmlFile, 'utf8');
var $ = cheerio.load(html);

var json = {};

json.conversations = [];

$("div.conversation").each(function() {
    var conversation = {};
    var $this = $(this);
    conversation.id = $this.attr("id");
    conversation.name = $this.find("div.name").text();
    conversation.messages = [];
    $this.find("div.message").each(function() {
        var message = {};
        var $this = $(this);
        message.id = $this.attr("id");
        message.time = $this.find("span.time").text();
        message.text = $this.find("span.text").text();
        conversation.messages.push(message);
    });
    json.conversations.push(conversation);
});

fs.writeFileSync(jsonFile, JSON.stringify(json, null, 4));
console.log('Wrote file: ' + jsonFile);

// Path: parser.js
// The language is Node.js
// This code parses the file "googlevoice.json" and creates the file "googlevoice.js"
// The file "googlevoice.js" is then used by the extension to create the file "googlevoice.html"
// Which is the used to display the Google Voice chat history in a browser

var fs = require('fs');
var path = require('path');

var jsonFile = path.join(__dirname, 'googlevoice.json');
var jsFile = path.join(__dirname, 'googlevoice.js');

var json = fs.readFileSync(jsonFile, 'utf8');
var js = 'var googlevoice = ' + json + ';';

fs.writeFileSync(jsFile, js);
console.log('Wrote file: ' + jsFile);

// Path: parser.js
// The language is Node.js
// This code parses the file "googlevoice.json" and creates the file "googlevoice.html"
// The file "googlevoice.html" is then used to display the Google Voice chat history in a browser

var fs = require('fs');





Synthesizing 9/10 solutions (Duplicates hidden)

=======

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
// 
// 
// 
// 
// The language is Node.js
// This code concatenates the html files in the directory "src" into a single file
// and writes it to the file "googlevoice.html"
// The file "googlevoice.html" is then used by the parser to create the file "googlevoice.json"
// it must select only the html files with "text" in the name

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

=======

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
        if (file.indexOf("text") > 0) {
            var filePath = path.join(srcDir, file);
            var fileContent = fs.readFileSync(filePath, 'utf8');
            html += fileContent;
        }
    });
    fs.writeFileSync(htmlFile, html);
    console.log('Wrote file: ' + htmlFile);
});

// Path: parser.js
// The language is Node.js
// This code parses the file "googlevoice.html" and creates the file "googlevoice.json"
// The file "googlevoice.json" is then used by the extension to create the file "googlevoice.js"
// Which is the used to create the file "googlevoice.html", to display the Google Voice chat history in a browser
// It must select only the messages with the class "message"

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
        if (file.indexOf("text") > 0) {
            var filePath = path.join(srcDir, file);
            var fileContent = fs.readFileSync(filePath, 'utf8');
            html += fileContent;
        }
    });
    fs.writeFileSync(htmlFile, html);
    console.log('Wrote file: ' + htmlFile);
});

// Path: parser.js
// The language is Node.js
// This code parses the file "googlevoice.html" and creates the file "googlevoice.json"
// The file "googlevoice.json" is then used by the extension to create the file "googlevoice.js"
//

=======

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

The language is Node.js
This code parses the file "googlevoice.html" and creates the file "googlevoice.json"
The file "googlevoice.json" is then used by the extension to create the file "googlevoice.js"
Which is the used to create the file "googlevoice.html", to display the Google Voice chat history in a browser

The language is Node.js
This code parses the file "googlevoice.html" and creates the file "googlevoice.json"
The file "googlevoice.json" is then used by the extension to create the file "googlevoice.js"
Which is the used to create the file "googlevoice.html", to display the Google Voice chat history in a browser

The language is Node.js
This code parses the file "googlevoice.html" and creates the file "googlevoice.json"
The file "googlevoice.json" is then used by the extension to create the file "googlevoice.js"
Which is the used to create the file "googlevoice.html", to display the Google Voice chat history in a browser

The language is Node.js
This code parses the file "googlevoice.html" and creates the file "googlevoice.json"
The file "googlevoice.json" is then used by the extension to create the file "googlevoice

=======

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
        if (file.indexOf('text') > -1) {
            var filePath = path.join(srcDir, file);
            var fileContent = fs.readFileSync(filePath, 'utf8');
            html += fileContent;
        }
    });
    fs.writeFileSync(htmlFile, html);
    console.log('Wrote file: ' + htmlFile);
});

// Path: parser.js
// The language is Node.js
// This code parses the file "googlevoice.html" and creates the file "googlevoice.json"
// The file "googlevoice.json" is then used by the extension to create the file "googlevoice.js"
// Which is the used to create the file "googlevoice.html", to display the Google Voice chat history in a browser

var fs = require('fs');
var path = require('path');
var htmlparser = require("htmlparser2");
var util = require('util');

var inputfile = path.join(__dirname, 'googlevoice.html');
var outputfile = path.join(__dirname, 'googlevoice.json');

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

=======

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
// it must select only the html files with "text" in the name

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
//

=======

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

=======

var fs = require('fs');
var path = require('path');
var htmlparser = require("htmlparser2");
var util = require('util');

var srcDir = path.join(__dirname, 'src');
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
// 
// 
// 
// 

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
    fs.writeFile

=======

// The language is Node.js
// This code parses the file "googlevoice.html" and creates the file "googlevoice.json"
// The file "googlevoice.json" is then used by the extension to create the file "googlevoice.js"
// Which is the used to create the file "googlevoice.html", to display the Google Voice chat history in a browser
// it must select only the html files with "text" in the name

// The language is Node.js
// This code parses the file "googlevoice.html" and creates the file "googlevoice.json"
// The file "googlevoice.json" is then used by the extension to create the file "googlevoice.js"
// Which is the used to create the file "googlevoice.html", to display the Google Voice chat history in a browser

// The language is Node.js
// This code parses the file "googlevoice.html" and creates the file "googlevoice.json"
// The file "googlevoice.json" is then used by the extension to create the file "googlevoice.js"
// Which is the used to create the file "googlevoice.html", to display the Google Voice chat history in a browser

// The language is Node.js
// This code parses the file "googlevoice.html" and creates the file "googlevoice.json"
// The file "googlevoice.json" is then used by the extension to create the file "googlevoice.js"
// Which is the used to create the file "googlevoice.html", to display the Google Voice chat history in a browser

// The language is Node.js
// This code parses the file "googlevoice.html" and creates the file "googlevoice.json"
// The file "googlevoice.json" is then used by the extension to create the file "googlevoice.js"
// Which is the used to create the file "googlevoice.html", to display the Google Voice chat history in a browser

// The language is Node.js
// This code parses the file "googlevoice.html" and creates the file "googlevoice.json"
// The file "googlevoice.json" is then used by the extension to create the file "googlevoice.js"
// Which is the used to create the file "googlevoice.html", to display the Google Voice chat history in a browser

// The language is Node.js
// This code parses the file "googlevoice.html" and creates the file "googlevoice.json"
// The file "googlevoice

// Path: parser.js
// The language is Node.js
// This code parses the file "googlevoice.html" and creates the file "googlevoice.json"
// The file "googlevoice.json" is then used by the extension to create the file "googlevoice.js"
// Which is the used to create the file "googlevoice.html", to display the Google Voice chat history in a browser
// 
// 
// 
// 
// The language is Node.js
// This code concatenates the html files in the directory "src" into a single file
// and writes it to the file "googlevoice.html"
// The file "googlevoice.html" is then used by the parser to create the file "googlevoice.json"
// it must select only the html files with "text" in the name

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

=======

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
        if (file.indexOf("text") > 0) {
            var filePath = path.join(srcDir, file);
            var fileContent = fs.readFileSync(filePath, 'utf8');
            html += fileContent;
        }
    });
    fs.writeFileSync(htmlFile, html);
    console.log('Wrote file: ' + htmlFile);
});

// Path: parser.js
// The language is Node.js
// This code parses the file "googlevoice.html" and creates the file "googlevoice.json"
// The file "googlevoice.json" is then used by the extension to create the file "googlevoice.js"
// Which is the used to create the file "googlevoice.html", to display the Google Voice chat history in a browser
// It must select only the messages with the class "message"

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
        if (file.indexOf("text") > 0) {
            var filePath = path.join(srcDir, file);
            var fileContent = fs.readFileSync(filePath, 'utf8');
            html += fileContent;
        }
    });
    fs.writeFileSync(htmlFile, html);
    console.log('Wrote file: ' + htmlFile);
});

// Path: parser.js
// The language is Node.js
// This code parses the file "googlevoice.html" and creates the file "googlevoice.json"
// The file "googlevoice.json" is then used by the extension to create the file "googlevoice.js"
//

=======

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
        if (file.indexOf('text') > -1) {
            var filePath = path.join(srcDir, file);
            var fileContent = fs.readFileSync(filePath, 'utf8');
            html += fileContent;
        }
    });
    fs.writeFileSync(htmlFile, html);
    console.log('Wrote file: ' + htmlFile);
});

// Path: parser.js
// The language is Node.js
// This code parses the file "googlevoice.html" and creates the file "googlevoice.json"
// The file "googlevoice.json" is then used by the extension to create the file "googlevoice.js"
// Which is the used to create the file "googlevoice.html", to display the Google Voice chat history in a browser

var fs = require('fs');
var path = require('path');
var htmlparser = require("htmlparser2");
var util = require('util');

var inputfile = path.join(__dirname, 'googlevoice.html');
var outputfile = path.join(__dirname, 'googlevoice.json');

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
                messages[messages.length - 1].text = messages[messages.length - 1].text.trim(); (Duplicates hidden)

=======

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

=======

// The language is Node.js
// This code parses the file "googlevoice.html" and creates the file "googlevoice.json"
// The file "googlevoice.json" is then used by the extension to create the file "googlevoice.js"
// Which is the used to create the file "googlevoice.html", to display the Google Voice chat history in a browser
// it must select only the html files with "text" in the name

// The language is Node.js
// This code parses the file "googlevoice.html" and creates the file "googlevoice.json"
// The file "googlevoice.json" is then used by the extension to create the file "googlevoice.js"
// Which is the used to create the file "googlevoice.html", to display the Google Voice chat history in a browser

// The language is Node.js
// This code parses the file "googlevoice.html" and creates the file "googlevoice.json"
// The file "googlevoice.json" is then used by the extension to create the file "googlevoice.js"
// Which is the used to create the file "googlevoice.html", to display the Google Voice chat history in a browser

// The language is Node.js
// This code parses the file "googlevoice.html" and creates the file "googlevoice.json"
// The file "googlevoice.json" is then used by the extension to create the file "googlevoice.js"
// Which is the used to create the file "googlevoice.html", to display the Google Voice chat history in a browser

// The language is Node.js
// This code parses the file "googlevoice.html" and creates the file "googlevoice.json"
// The file "googlevoice.json" is then used by the extension to create the file "googlevoice.js"
// Which is the used to create the file "googlevoice.html", to display the Google Voice chat history in a browser

// The language is Node.js
// This code parses the file "googlevoice.html" and creates the file "googlevoice.json"
// The file "googlevoice.json" is then used by the extension to create the file "googlevoice.js"
// Which is the used to create the file "googlevoice.html", to display the Google Voice chat history in a browser

// The language is Node.js
// This code parses the file "googlevoice.html" and creates the file "googlevoice.json"
// The file "googlevoice

// Path: parser.js
// The language is Node.js
// This code parses the file "googlevoice.html" and creates the file "googlevoice.json"
// The file "googlevoice.json" is then used by the extension to create the file "googlevoice.js"
// Which is the used to create the file "googlevoice.html", to display the Google Voice chat history in a browser
// 
// 
// 
// 
// The language is Node.js
// This code concatenates the html files in the directory "src" into a single file
// and writes it to the file "googlevoice.html"
// The file "googlevoice.html" is then used by the parser to create the file "googlevoice.json"
// it must select only the html files with "text" in the name

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

=======

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
        if (file.indexOf('text') > -1) {
            var filePath = path.join(srcDir, file);
            var fileContent = fs.readFileSync(filePath, 'utf8');
            html += fileContent;
        }
    });
    fs.writeFileSync(htmlFile, html);
    console.log('Wrote file: ' + htmlFile);
});

// Path: parser.js
// The language is Node.js
// This code parses the file "googlevoice.html" and creates the file "googlevoice.json"
// The file "googlevoice.json" is then used by the extension to create the file "googlevoice.js"
// Which is the used to create the file "googlevoice.html", to display the Google Voice chat history in a browser

var fs = require('fs');
var path = require('path');
var htmlparser = require("htmlparser2");
var util = require('util');

var inputfile = path.join(__dirname, 'googlevoice.html');
var outputfile = path.join(__dirname, 'googlevoice.json');

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

=======

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

var path = require('path');

var jsonFile = path.join(__dirname, 'googlevoice.json');
var htmlFile = path.join(__dirname, 'googlevoice.html');

var json = fs.readFileSync(jsonFile, 'utf8');
var obj =

=======

var path = require('path');
var cheerio = require('cheerio');

var htmlFile = path.join(__dirname, 'googlevoice.html');
var jsonFile = path.join(__dirname, 'googlevoice.json');

var html = fs.readFileSync(htmlFile, 'utf8');
var $ = cheerio.load(html);
var json = {};

$('div').each(function(i, elem) {
    var $elem = $(this);
    var id = $elem.attr('id');
    var text = $elem.text();
    var match = text.match(/(\d+) messages?/);
    var count = match ? parseInt(match[1]) : 0;
    json[id] = count;
    });

fs.writeFileSync(jsonFile, JSON.stringify(json, null, 4));
console.log('Wrote file: ' + jsonFile);

// Path: extension.js
// The language is JavaScript
// This code creates the file "googlevoice.js" which is used by the extension to display the Google Voice chat history in a browser

var fs = require('fs');
var path = require('path');

var jsonFile = path.join(__dirname, 'googlevoice.json');
var jsFile = path.join(__dirname, 'googlevoice.js');

var json = require(jsonFile);
var js = 'var googlevoice = ' + JSON.stringify(json) + ';';

fs.writeFileSync(jsFile, js);
console.log('Wrote file: ' + jsFile);

// Path: extension.js
// The language is JavaScript
// This code creates the file "googlevoice.html" which is used by the extension to display the Google Voice chat history in a browser

var fs = require('fs');
var path = require('path');
var cheerio = require('cheerio');

var htmlFile = path.join(__dirname, 'googlevoice.html');
var jsFile = path.join(__dirname, 'googlevoice.js');

var html = fs.readFileSync(htmlFile, 'utf8');
var $ = cheerio.load(html);

var googlevoice = require(jsFile);
for (var id in googlevoice) {
    var count = googlevoice[id];
    var $div = $('#' + id);
    $div.text(count + ' messages');
    }

var newHtml = $.html();
fs.writeFileSync(htmlFile, newHtml);
console.log('Wrote file: ' + htmlFile);

// Path: extension.js
// The language is JavaScript
// This code creates the file "googlevoice

=======

var path = require('path');
var htmlparser = require('htmlparser2');

var htmlFile = path.join(__dirname, 'googlevoice.html');
var jsonFile = path.join(__dirname, 'googlevoice.json');

var html = fs.readFileSync(htmlFile, 'utf8');

var json = {
    "messages": []
};

var parser = new htmlparser.Parser({
    onopentag: function(name, attribs) {
        if (name === 'div' && attribs.class === 'gc-message') {
            var message = {
                "date": attribs['data-date'],
                "time": attribs['data-time'],
                "type": attribs['data-type'],
                "from": attribs['data-from'],
                "to": attribs['data-to'],
                "text": attribs['data-text']
            };
            json.messages.push(message);
        }
    }
}, {
    decodeEntities: true
});

parser.write(html);
parser.end();

fs.writeFileSync(jsonFile, JSON.stringify(json, null, 4));
console.log('Wrote file: ' + jsonFile);

// Path: googlevoice.html
// The language is HTML5
// This file is created by the extension, by parsing the file "googlevoice.json"
// This file is then used by the extension to create the file "googlevoice.js"
// Which is the used to create the file "googlevoice.html", to display the Google Voice chat history in a browser

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Google Voice</title>
    <link type="text/css" rel="stylesheet" href="googlevoice.css">
    <script type="text/javascript" src="googlevoice.js"></script>
</head>
<body>
    <div id="messages" class="gc-messages"></div>
</body>
</html>

// Path: googlevoice.js
// The language is JavaScript
// This file is created by the extension, by parsing the file "googlevoice.json"
// This file is then used by the extension to create the file "googlevoice.html"
// Which is the used to display the Google Voice chat history in a browser

var messages = document.querySelector('#messages');
var data = [
    // This is where the data from "googlevoice.json" is inserted
];

data.forEach(function(message) {
    var div = document.createElement('div');
    div.className = '

=======

var path = require('path');
var htmlparser = require('htmlparser2');
var jsonfile = require('jsonfile');

var htmlFile = path.join(__dirname, 'googlevoice.html');
var jsonFile = path.join(__dirname, 'googlevoice.json');

var json = {};
var html = fs.readFileSync(htmlFile, 'utf8');
var parser = new htmlparser.Parser({
    onopentag: function(name, attribs) {
        if (name === 'div' && attribs.class === 'gc-message-sms-row') {
            var from = attribs['data-from'];
            var to = attribs['data-to'];
            var text = attribs['data-text'];
            var time = attribs['data-time'];
            if (!json[from]) json[from] = {};
            if (!json[from][to]) json[from][to] = [];
            json[from][to].push({text: text, time: time});
        }
    }
}, {decodeEntities: true});
parser.write(html);
parser.end();
jsonfile.writeFileSync(jsonFile, json, {spaces: 4});
console.log('Wrote file: ' + jsonFile);

// Path: parser.js
// The language is Node.js
// This code parses the file "googlevoice.json" and creates the file "googlevoice.js"
// The file "googlevoice.js" is then used by the extension to create the file "googlevoice.html"
// Which is the used to display the Google Voice chat history in a browser

var fs = require('fs');
var path = require('path');
var jsonfile = require('jsonfile');

var jsonFile = path.join(__dirname, 'googlevoice.json');
var jsFile = path.join(__dirname, 'googlevoice.js');

var json = jsonfile.readFileSync(jsonFile);
var js = 'var googlevoice = ' + JSON.stringify(json) + ';';
fs.writeFileSync(jsFile, js);
console.log('Wrote file: ' + jsFile);

// Path: parser.js
// The language is Node.js
// This code creates the file "googlevoice.html"
// The file "googlevoice.html" is then used by the extension to display the Google Voice chat history in a browser

var fs = require('fs');
var path = require('path');

var jsFile = path.join(__dirname, 'googlevoice.js');
var htmlFile = path.join(__dirname, 'googlevoice.html');

var html

=======

var path = require('path');
var htmlparser = require('htmlparser2');
var htmlFile = path.join(__dirname, 'googlevoice.html');
var jsonFile = path.join(__dirname, 'googlevoice.json');

var html = fs.readFileSync(htmlFile, 'utf8');
var json = {};
var current = json;

var parser = new htmlparser.Parser({
    onopentag: function(name, attribs) {
        if (name === 'div') {
            if (attribs.class === 'message') {
                current = current.messages = current.messages || [];
                current.push({});
            }
            else if (attribs.class === 'message-header') {
                current = current[current.length-1];
            }
            else if (attribs.class === 'message-text') {
                current = current[current.length-1];
            }
            else if (attribs.class === 'message-footer') {
                current = current[current.length-1];
            }
        }
        else if (name === 'span') {
            if (attribs.class === 'message-sender') {
                current = current[current.length-1];
            }
            else if (attribs.class === 'message-time') {
                current = current[current.length-1];
            }
        }
    },
    ontext: function(text) {
        if (current.sender) {
            current.sender += text;
        }
        else if (current.time) {
            current.time += text;
        }
        else if (current.text) {
            current.text += text;
        }
    },
    onclosetag: function(tagname) {
        if (tagname === 'span') {
            current = current[current.length-1];
        }
    }
}, {decodeEntities: true});

parser.write(html);
parser.end();

fs.writeFileSync(jsonFile, JSON.stringify(json, null, 4));
console.log('Wrote file: ' + jsonFile);

// Path: parser.js
// The language is Node.js
// This code parses the file "googlevoice.json" and creates the file "googlevoice.js"
// The file "googlevoice.js" is then used by the extension to create the file "googlevoice.html"
// Which is the used to display the Google Voice chat history in a browser

var fs = require('fs');
var path = require('path');
var jsonFile = path.join(__dirname, 'googlevoice.json');
var jsFile = path.join(__dirname,
var nameArrayLength;
var nameArrayIndex;
var nameArrayItem;

var number;
var numberArray;
var numberArrayLength;
var numberArrayIndex;
var numberArrayItem;

var date;
var dateArray;
var dateArrayLength;
var dateArrayIndex;
var dateArrayItem;

var time;
var timeArray;
var timeArrayLength;
var timeArrayIndex;
var timeArrayItem;

var text;
var textArray;
var textArrayLength;
var textArrayIndex;
var textArrayItem;

var message;
var messageArray;
var messageArrayLength;
var messageArrayIndex;
var messageArrayItem;

var messageObject;

var messages = [];
var messagesLength;
var messagesIndex;
var messagesItem;

var names = [];
var namesLength;
var namesIndex;
var namesItem;

var numbers = [];
var numbersLength;
var numbersIndex;
var numbersItem;

var dates = [];
var datesLength;
var datesIndex;
var datesItem;

var times = [];
var timesLength;
var timesIndex;
var timesItem;

var texts = [];
var textsLength;
var textsIndex;
var textsItem;

var messageObjects = [];
var messageObjectsLength;
var messageObjectsIndex;
var messageObjectsItem;

var nameObjects = [];
var nameObjectsLength;
var nameObjectsIndex;
var nameObjectsItem;

var numberObjects = [];
var numberObjectsLength;
var numberObjectsIndex;
var numberObjectsItem;

var dateObjects = [];
var dateObjectsLength;
var dateObjectsIndex;
var dateObjectsItem;

var timeObjects = [];
var timeObjectsLength;

=======

var path = require('path');
var cheerio = require('cheerio');

var htmlFile = path.join(__dirname, 'googlevoice.html');
var jsonFile = path.join(__dirname, 'googlevoice.json');

var html = fs.readFileSync(htmlFile, 'utf8');
var $ = cheerio.load(html);

var json = {};
var messages = [];

$('div.message').each(function(i, elem) {
    var message = {};

    message.isIncoming = $(elem).hasClass('incoming');
    message.isOutgoing = $(elem).hasClass('outgoing');
    message.isMissed = $(elem).hasClass('missed');
    message.isPlaced = $(elem).hasClass('placed');
    message.isReceived = $(elem).hasClass('received');
    message.isTranscribed = $(elem).hasClass('transcribed');
    message.isDeleted = $(elem).hasClass('deleted');
    message.isSpam = $(elem).hasClass('spam');
    message.isVoicemail = $(elem).hasClass('voicemail');
    message.isMms = $(elem).hasClass('mms');
    message.isRead = $(elem).hasClass('read');
    message.isUnread = $(elem).hasClass('unread');
    message.isStarred = $(elem).hasClass('starred');
    message.isUnstarred = $(elem).hasClass('unstarred');
    message.isArchived = $(elem).hasClass('archived');
    message.isUnarchived = $(elem).hasClass('unarchived

=======

var path = require('path');
var htmlparser = require('htmlparser2');

var htmlFile = path.join(__dirname, 'googlevoice.html');
var jsonFile = path.join(__dirname, 'googlevoice.json');

var html = fs.readFileSync(htmlFile, 'utf8');

var json = {
    "messages": []
};

var parser = new htmlparser.Parser({
    onopentag: function(name, attribs) {
        if (name === 'div' && attribs.class === 'gc-message') {
            var message = {
                "date": attribs['data-date'],
                "time": attribs['data-time'],
                "type": attribs['data-type'],
                "from": attribs['data-from'],
                "to": attribs['data-to'],
                "text": attribs['data-text']
            };
            json.messages.push(message);
        }
    }
}, {
    decodeEntities: true
});

parser.write(html);
parser.end();

fs.writeFileSync(jsonFile, JSON.stringify(json, null, 4));
console.log('Wrote file: ' + jsonFile);

// Path: googlevoice.html
// The language is HTML5
// This file is created by the extension, by parsing the file "googlevoice.json"
// This file is then used by the extension to create the file "googlevoice.js"
// Which is the used to create the file "googlevoice.html", to display the Google Voice chat history in a browser

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Google Voice</title>
    <link type="text/css" rel="stylesheet" href="googlevoice.css">
    <script type="text/javascript" src="googlevoice.js"></script>
</head>
<body>
    <div id="messages" class="gc-messages"></div>
</body>
</html>

// Path: googlevoice.js
// The language is JavaScript
// This file is created by the extension, by parsing the file "googlevoice.json"
// This file is then used by the extension to create the file "googlevoice.html"
// Which is the used to display the Google Voice chat history in a browser

var messages = document.querySelector('#messages');
var data = [
    // This is where the data from "googlevoice.json" is inserted
];

data.forEach(function(message) {
    var div = document.createElement('div');
    div.className = '

