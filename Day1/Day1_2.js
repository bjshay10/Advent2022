var fs = require('fs')

var topThree = 0
var curTotal = 0

//Function to compare min max

//Function to add totals
function TotalCalories (array) {

}


fs.readFile('input.txt', function(err, data){
    if(err) throw err

    console.log('STARTING')
    
    var array = data.toString().split("\r\n\r\n")
    var ttlArray = []
    for (i=0; i<array.length; i++){
        var array2 = array[i].toString().split("\r\n")
        
        for (j=0; j<array2.length; j++){
            curTotal += parseInt(array2[j])
        }
        
        ttlArray.push(curTotal)
        
        curTotal = 0
    }

    ttlArray.sort(function(a,b){return b-a})
    topThree = parseInt(ttlArray[0])+parseInt(ttlArray[1])+parseInt(ttlArray[2])
    //console.log(ttlArray)
    
    console.log(`COMPLETE TOTAL OF TOP 3 = ${topThree}`)
})