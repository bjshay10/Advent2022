var fs = require('fs')

var container1
var container2
var rucksackLen
var priority = 0

var testChar = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

function charPriority(char){
    return testChar.indexOf(char) + 1
}

// function charPriority(char) {
//     if (char === 'a') { return 1 }
//     else if (char === 'b') { return 2 }
//     else if (char === 'c') { return 3 }
//     else if (char === 'd') { return 4 }
//     else if (char === 'e') { return 5 }
//     else if (char === 'f') { return 6 }
//     else if (char === 'g') { return 7 }
//     else if (char === 'h') { return 8 }
//     else if (char === 'i') { return 9 }
//     else if (char === 'j') { return 10 }
//     else if (char === 'k') { return 11 }
//     else if (char === 'l') { return 12 }
//     else if (char === 'm') { return 13 }
//     else if (char === 'n') { return 14 }
//     else if (char === 'o') { return 15 }
//     else if (char === 'p') { return 16 }
//     else if (char === 'q') { return 17 }
//     else if (char === 'r') { return 18 }
//     else if (char === 's') { return 19 }
//     else if (char === 't') { return 20 }
//     else if (char === 'u') { return 21 }
//     else if (char === 'v') { return 22 }
//     else if (char === 'w') { return 23 }
//     else if (char === 'x') { return 24 }
//     else if (char === 'y') { return 25 }
//     else if (char === 'z') { return 26 }
//     else if (char === 'A') { return 27 }
//     else if (char === 'B') { return 28 }
//     else if (char === 'C') { return 29 }
//     else if (char === 'D') { return 30 }
//     else if (char === 'E') { return 31 }
//     else if (char === 'F') { return 32 }
//     else if (char === 'G') { return 33 }
//     else if (char === 'H') { return 34 }
//     else if (char === 'I') { return 35 }
//     else if (char === 'J') { return 36 }
//     else if (char === 'K') { return 37 }
//     else if (char === 'L') { return 38 }
//     else if (char === 'M') { return 39 }
//     else if (char === 'N') { return 40 }
//     else if (char === 'O') { return 41 }
//     else if (char === 'P') { return 42 }
//     else if (char === 'Q') { return 43 }
//     else if (char === 'R') { return 44 }
//     else if (char === 'S') { return 45 }
//     else if (char === 'T') { return 46 }
//     else if (char === 'U') { return 47 }
//     else if (char === 'V') { return 48 }
//     else if (char === 'W') { return 49 }
//     else if (char === 'X') { return 50 }
//     else if (char === 'Y') { return 51 }
//     else if (char === 'Z') { return 52 }
// }

//fs.readFile('.\\Day3\\input-test.txt', function(err, data){
fs.readFile('.\\Day3\\input.txt', function(err, data){
    if(err) throw err

    console.log('STARTING')

    var array = data.toString().split('\r\n')

    for (i=0; i<array.length; i++)  {
        rucksackLen = array[i].length

        container1 = array[i].substring(0,array[i].length/2)
        container2 = array[i].substring(array[i].length/2,array[i].length)
        
        //loop through characters in container1
        for (j=0; j<container1.length; j++){
            var c1 = container1[j]

            if (container2.toString().indexOf(c1) > -1){
                priority += charPriority(c1)
                break;    
            }


        }
    }


    console.log(`COMPLETE Priority is ${priority}`)
})
