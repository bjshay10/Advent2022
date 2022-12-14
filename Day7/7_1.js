var fs = require('fs')

//[dir, size, parentDir]
var cmd = ''
var ttlSize = 0
var dirArray = []  //dir name, dirSize, contains []
var dirOrder = []
var currDir = ''

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
    //for (i=0; i<3; i++){
        cmd = array[i].toString().split(' ')
        //console.log(cmd)
        
        if (cmd[0].toString() === '$'){
            //console.log(`LINE ${i} is a command`)
            //cd x change dir
            //cd / go to root (1st line)
            //cd .. move back a dir
            //ls lists sub dir 
            if ((cmd[1].toString() === 'cd') && (cmd[2].toString() !== '..')) {
                //change dir
                currDir = cmd[2].toString()
                dirOrder.push(cmd[2].toString())
            } else if ((cmd[1].toString() === 'cd') && (cmd[2].toString() === '..'))  {
                currDir = dirOrder.pop().toString()
            } else if ((cmd[1].toString() === 'ls')) {
                var tempContains = ''
                for (j=i; j<array.length; j++){
                    var content = array[j].toString().split(' ')
                    //console.log(content)
                    if (content[0].toString === '$') {
                        break
                    } else {
                        if (content[0].toString() === 'dir') {
                            tempContains = tempContains + ',' + content[1].toString()
                        } else {
                            
                        }
                    }
                }
            }
        } else {
            //nothing to do I think
        }


        
    }

    console.log(`COMPLETE Dir size = ${ttlSize}`)
})