var fs = require('fs');

fs.writeFile('abc.txt', 'I change the content',function (err) {
    if (err) throw err;
    console.log('Content changed');
});