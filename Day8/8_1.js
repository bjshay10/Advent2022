var fs = require('fs')

fs.readFile('.\\Day8\\input-test.txt', function(err, data){
//fs.readFile('.\\Day8\\input.txt', function(err, data){
    if(err) throw err

    console.log('STARTING')

    var array = data.toString().split('\r\n')
    var treeArray = []
    var visible = 0
    var rowVis = 'N'
    var colVis = 'N'
    var currTree = 0
    console.log(array)

    for (b=0; b<array.length; b++){
        treeArray.push(array[b].toString().split(''))
    }

    //console.log(treeArray)

    //a=0; a<treeArray.length; a++
    for (a=0; a<treeArray.length; a++) {
        console.log(`ROW ${a}`)
        if (a === 0) {
            // all trees in this row are visible
            visible += treeArray[a].length
        } else if (a === treeArray.length-1) {
            // last row is not visible
            visible += parseInt(treeArray[a].length)
        } else {
            //loop through remaining rows
            for (b=0; b<treeArray[a].length-1; b++){

                var visU = 'N'
                var visD = 'N'
                var visL = 'N'
                var visR = 'N'
                var tempVis = 0
                
                if (b===0){ visible+=2 }
                else {
                    
                    // look for current tree in treeArray
                    currTree = parseInt(treeArray[a][b])
                    
                    //search above
                    tempVis = 0

                    for (z=0; z<a; z++){
                        if (treeArray[z][b] >= currTree){
                            tempVis++
                        }
                    }

                    if (tempVis < a) {
                        visU = 'Y'
                    }

                    //search below y
                    //search left x                    
                    //search right  w             
                    
                }
            }
            
        }
        //console.log(visible)
    }
    
    console.log(`COMPLETE TREES VISIBLE = ${visible}`)
})