var fs = require('fs')

var max = 0
var curTotal = 0

//Function to compare min max

//Function to add totals
function TotalCalories (array) {

}


fs.readFile('input.txt', function(err, data){
    if(err) throw err

    console.log('STARTING')
    
    var array = data.toString().split("\r\n\r\n")

    for (i=0; i<array.length; i++){
        var array2 = array[i].toString().split("\r\n")
        
        for (j=0; j<array2.length; j++){
            curTotal += parseInt(array2[j])
        }
        
        if (curTotal > max) { max = curTotal }

        curTotal = 0
    }
    
    console.log(`COMPLETE MAX IS ${max}`)
})