var fs = require('fs')

//[dir, size, parentDir]
var cmd = ''
var ttlSize = 0
var dirArray = []  //dir name, dirSize, contains []
var dirOrder = []
var array = []

//test size = 95437


// cd means change directory. This changes which directory is the current directory, but the specific result depends on the argument:
// cd x moves in one level: it looks in the current directory for the directory named x and makes it the current directory.
// cd .. moves out one level: it finds the directory that contains the current directory, then makes that directory the current directory.
// cd / switches the current directory to the outermost directory, /.
// ls means list. It prints out all of the files and directories immediately contained by the current directory:
// 123 abc means that the current directory contains a file named abc with size 123.
// dir xyz means that the current directory contains a directory named xyz.

function parseCmdArray(cmdArray) {
    let currDir = ''
    let currTTL = 0
    //if cd dirname change dir to look for info
    //lf ls calculate directory values
        // loop through array to find dir value
        // if dir call parseCmdArray with subset array
        // if ##### file name add #### to currArray ttl
    // if cd .. return to revious array item

    return currTTL
}

fs.readFile('.\\Day7\\input-test.txt', function(err, data){
//fs.readFile('.\\Day7\\input.txt', function(err, data){
    if(err) throw err

    console.log('STARTING')

    array = data.toString().split('\r\n')

    ttlSize = parseCmdArray(array)
    
    console.log(`COMPLETE Dir size = ${ttlSize}`)
})