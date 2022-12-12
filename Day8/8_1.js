var fs = require('fs')

fs.readFile('.\\Day8\\input-test.txt', function(err, data){
//fs.readFile('.\\Day8\\input.txt', function(err, data){
    if(err) throw err

    console.log('STARTING')

    var array = data.toString().split('\r\n')
    var treeArray = []
    console.log(array)

    for (a=0; a<array.length; a++){
        
    }



    console.log(`COMPLETE`)
})