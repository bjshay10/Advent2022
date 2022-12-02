var fs = require('fs')

//Rock = A, X
//Paper = B, Y
//Scissors = C, Z

//score notes
//Rock = 1
//Paper = 2
//Scissors = 3
//Win = 6
//Loss = 0
//Tie = 3

//scores
var myScore = 0
var oppScore = 0

//fs.readFile('input-test.txt', function(err, data){
fs.readFile('input.txt', function(err, data){
    if(err) throw err

    console.log('STARTING')

    var array = data.toString().split('\r\n')

    //loop through array
    //score
    //result
    for (i=0; i<array.length; i++){
        //console.log(`Opponent = ${array[i][0]}, Me= ${array[i][2]}`)
        
        //if I choose Rock
        if (array[i][2] === 'X') {
            myScore += 1

            if (array[i][0] === 'A'){
                myScore += 3 
            } else if (array[i][0] === 'B'){
                myScore += 0
            } else if (array[i][0] === 'C'){
                myScore += 6
            }
        } else if (array[i][2] === 'Y') {
            myScore = myScore + 2

            if (array[i][0] === 'A'){
                myScore += 6
            } else if (array[i][0] === 'B'){
                myScore += 3
            } else if (array[i][0] === 'C'){
                myScore += 0
            }
        } else if (array[i][2] === 'Z') {
            myScore = myScore + 3

            if (array[i][0] === 'A'){
                myScore += 0
            } else if (array[i][0] === 'B'){
                myScore += 6
            } else if (array[i][0] === 'C'){
                myScore += 3                
            }
        }
    }

    
    console.log(`COMPLETE MY SCORE ${myScore}`)
})