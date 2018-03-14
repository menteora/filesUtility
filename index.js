var fs = require('fs');

var fulldir = 'C:\\DATI PERSONALE\\CorsoUdacity\\mws-restaurant-stage-1\\img\\';

fs.readdir(fulldir, function (err, files) {

    if (err) {
        console.log('err', err);
        return;
    }

    files.forEach(function (filename) {
       
        // Exclude Directory
        if (!fs.lstatSync(fulldir + filename).isDirectory()) {

        var newfilename = setSuffixToFile(filename, '-300');
        console.log(newfilename);
        
            fs.rename(fulldir + filename, fulldir + newfilename, function (err) {
              if (err) console.log('err', filename, err);
              else console.log(filename, ' > ', newfilename);
            });    
        
        }
    });

});

function setSuffixToFile(filename, string) {
    var dotIndex = filename.lastIndexOf(".");
    if (dotIndex == -1) return filename + string;
    else return filename.substring(0, dotIndex) + string + filename.substring(dotIndex);
}