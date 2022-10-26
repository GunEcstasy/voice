
The language is Node.js


var srcDir = join(__dirname, 'Calls');
var htmlFile = join(__dirname, 'googlevoice.html');
var jsonFile = join(__dirname, 'googlevoice.json');

var html = '';
var json = {};

readdir(srcDir, function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
        var filePath = join(srcDir, file);
        var fileContent = readFileSync(filePath, 'utf8');
        html += fileContent;
    });
    writeFileSync(htmlFile, html);
    console.log('Wrote file: ' + htmlFile);
    });

