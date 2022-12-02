var fs = require('fs')

//Rock = A
//Paper = B
//Scissors = C

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
    for (i=0; i<array.length; i++) { 
        //console.log(`Opponent = ${array[i][0]}, Me= ${array[i][2]}`)
        
        //if they need to win, lose, or tie
        if (array[i][2] === 'X') {
            if (array[i][0] === 'A'){
                myScore += 3
            } else if (array[i][0] === 'B'){
                myScore += 1
            } else if (array[i][0] === 'C'){
                myScore += 2
            }
        } else if (array[i][2] === 'Y') {
            if (array[i][0] === 'A'){
                myScore += 4
            } else if (array[i][0] === 'B'){
                myScore += 5
            } else if (array[i][0] === 'C'){
                myScore += 6
            }
        } else if (array[i][2] === 'Z') {
            if (array[i][0] === 'A'){
                myScore += 8
            } else if (array[i][0] === 'B'){
                myScore += 9
            } else if (array[i][0] === 'C'){
                myScore += 7
            }
        }
    }
    console.log(`COMPLETE MY SCORE ${myScore}`)
})