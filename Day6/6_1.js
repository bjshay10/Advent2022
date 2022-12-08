var fs = require('fs')

var marker = ''
var markerPosition = 0
var toCheck = ''
var isMarker = 'N'

function checkIfMarker(str) {
    let chars = str.split('')
    //console.log(chars)
    let uniqueChars = [...new Set(chars)]
    //console.log(uniqueChars)
    if (uniqueChars.length === 4) {
        return 'Y'
    }
}

//fs.readFile('.\\Day6\\input-test.txt', function(err, data){
fs.readFile('.\\Day6\\input.txt', function(err, data){
    if(err) throw err

    console.log('STARTING')

    //loop through character string
    //find first substring of 4 that has no repeating letter
    //return the length of string to the end of that string

    //console.log(data.toString())

    for(i=0; i<data.length-3; i++){
        toCheck = data.toString().substring(i,i+4)
        //console.log(toCheck)
        isMarker = checkIfMarker(toCheck)

        if (isMarker === 'Y'){
            marker = toCheck
            markerPosition = i+4
            break
        }
        toCheck=''
        markerPostion=0
    }

    // test is looking for JPQM
    console.log(`COMPLETE marker is ${marker} at ${markerPosition}`)
})