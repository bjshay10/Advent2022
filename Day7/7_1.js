var fs = require('fs')

//[dir, size, parentDir]
var cmd = ''
var ttlSize = 0

//test size = 95437


// cd means change directory. This changes which directory is the current directory, but the specific result depends on the argument:
// cd x moves in one level: it looks in the current directory for the directory named x and makes it the current directory.
// cd .. moves out one level: it finds the directory that contains the current directory, then makes that directory the current directory.
// cd / switches the current directory to the outermost directory, /.
// ls means list. It prints out all of the files and directories immediately contained by the current directory:
// 123 abc means that the current directory contains a file named abc with size 123.
// dir xyz means that the current directory contains a directory named xyz.


fs.readFile('.\\Day7\\input-test.txt', function(err, data){
//fs.readFile('.\\Day7\\input.txt', function(err, data){
    if(err) throw err

    console.log('STARTING')

    var array = data.toString().split('\r\n')

    //loop through array
    for (i=0; i<array.length; i++){
        cmd = array[i].toString().split(' ')
        console.log(cmd)
        


        //if cd (dirName)
        //if ls ---following commands until a cd .. lists directory contents
            //mayneed recursive array
        // if dir abc current dir contains a dir called abc
        // if ####, abc.txt then that is a file size and file name
        // cd .. move out one level
        // cd / goes to the root level
        
    }

    console.log(`COMPLETE Dir size = ${ttlSize}`)
})