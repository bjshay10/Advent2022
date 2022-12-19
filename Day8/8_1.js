var fs = require('fs')

function checkCol(cArray, cTree) {

}

function checkRow(rArray, cTree) {

}


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
        //console.log(`ROW ${a}`)
        if (a === 0) {
            // all trees in this row are visible
            visible += treeArray[a].length
            //console.log(`ROW ${a} has ${visible}`)
        } else if (a === treeArray.length-1) {
            // last row is not visible
            visible += parseInt(treeArray[a].length)
            //console.log(`ROW ${a} has ${treeArray[a].length}`)
        } else {
            //loop through remaining rows
            for (b=0; b<treeArray[a].length-1; b++){

                var visU = 'N'
                var visD = 'N'
                var visL = 'N'
                var visR = 'N'
                var tempVis = 'N'
                
                if (b===0){ visible+=2 }
                else {
                    currTree = treeArray[a][b]
                    //console.log(`${currTree}`)
                    colArray = []
                    //compare column if any are less than the tree it is visible
                    for (z=0; z<treeArray.length; z++){
                        colArray.push(treeArray[z][b])
                    }

                    //var colResult = checkCol(colArray, currTree)


                    for (c=0; c<colArray.length; c++){
                        if (colArray[c] < currTree) {
                            visible++
                            tempVis = 'Y'
                            break
                        }
                    }

                    if (tempVis === 'Y'){
                        break
                    }

                    //compare row if any are less than it the tree is visible
                    rowArray = []
                    tempRVis = 'N'

                    for(d=0; d<treeArray[a].length; d++){
                        rowArray.push(treeArray[a][d])
                    }

                    for(e=0; e<rowArray.length; e++) {
                        console.log(`Current Tree ${currTree} vs ${rowArray[e]}`)
                        if (rowArray[e] < currTree) {
                            visible++
                            tempRVis='Y'
                            break
                        }
                    }

                    if (tempRVis === 'Y') {
                        break
                    }
                }
            }
            
        }
        //console.log(visible)
    }
    
    console.log(`COMPLETE TREES VISIBLE = ${visible}`)
})