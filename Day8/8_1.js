var fs = require('fs')

fs.readFile('.\\Day8\\input-test.txt', function(err, data){
//fs.readFile('.\\Day8\\input.txt', function(err, data){
    if(err) throw err

    console.log('STARTING')

    var array = data.toString().split('\r\n')
    var treeArray = []
    console.log(array)

    for (a=0; a<array.length; a++){
        var tempArray = array[a].toString().split()
        for (b=0; b<tempArray.length; b++) {
            treeArray[a,b].push(tempArray[b])
        }
        console.log(treeArray)
    }



    console.log(`COMPLETE`)
})