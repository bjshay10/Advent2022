var fs = require('fs')

//[dir, size, parentDir]
var dirArray = []
var ttlSize = 0
var target = 100000
var allDirArray = []
var curDir = ''
var prevDir = ''
var curDirSize = 0
var cmd = ''

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
    for (i=0; i<1; i++){
        
        console.log(`Current command is ${array[i]}`)
                cmd = array[i].toString().split(' ')
        
        console.log(cmd)
        if ((cmd[1] === 'cd') && (cmd[2] !== '..')) {
            prevDir = curDir
            curDir = cmd[2]

            dirArray.push([cmd[2],0,prevDir])
            console.log(dirArray)
        } else if ((cmd[1] === 'cd') && (cmd[2] === '..')) {
            curDir = prevDir
            prevDir = '???'
        }
        
        //if cmd = cd set curDir to next directory
        //if ls loop through until back to cd
        //if .. move back a dir

    }

    console.log(`COMPLETE Dir size = ${ttlSize}`)
})