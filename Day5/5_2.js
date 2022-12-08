var fs = require('fs')

/* INPUT ARRAY
                [M]     [W] [M]    
            [L] [Q] [S] [C] [R]    
            [Q] [F] [F] [T] [N] [S]
    [N]     [V] [V] [H] [L] [J] [D]
    [D] [D] [W] [P] [G] [R] [D] [F]
[T] [T] [M] [G] [G] [Q] [N] [W] [L]
[Z] [H] [F] [J] [D] [Z] [S] [H] [Q]
[B] [V] [B] [T] [W] [V] [Z] [Z] [M]
 1   2   3   4   5   6   7   8   9 
*/
/*
INPUT-TEST 
    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

*/

var crateArray1 = ['B','Z','T']
var crateArray2 = ['V','H','T','D','N']
var crateArray3 = ['B','F','M','D']
var crateArray4 = ['T','J','G','W','V','Q','L']
var crateArray5 = ['W','D','G','P','V','F','Q','M']
var crateArray6 = ['V','Z','Q','G','H','F','S']
var crateArray7 = ['Z','S','N','R','L','T','C','W']
var crateArray8 = ['Z','H','W','D','J','N','R','M']
var crateArray9 = ['M','Q','L','F','D','S']

//might note use
function moveCrate(amnt, src, dest) {
    //console.log(`${amnt}, ${src}, ${dest}`)

    var tempItm
    var tempArray = []


    //use amnt to crate temp array
    //reverse temp array and push that onto dest

    for(a=0; a<amnt; a++){
        //remove item to move
        if (parseInt(src) === 1) {
            tempItm = crateArray1.pop()
        } else if (parseInt(src) === 2){
            tempItm = crateArray2.pop()
        } else if (parseInt(src) === 3){
            tempItm = crateArray3.pop()
        } else if (parseInt(src) === 4) {
            tempItm = crateArray4.pop()
        } else if (parseInt(src) === 5){
            tempItm = crateArray5.pop()
        } else if (parseInt(src) === 6){
            tempItm = crateArray6.pop()
        } else if (parseInt(src) === 7) {
            tempItm = crateArray7.pop()
        } else if (parseInt(src) === 8){
            tempItm = crateArray8.pop()
        } else if (parseInt(src) === 9){
            tempItm = crateArray9.pop()
        }
        //console.log(tempItm)
        tempArray.push(tempItm)
    }

    tempArray.reverse()
    //console.log(tempArray)
    for (b=0; b<tempArray.length;b++) {
        if (parseInt(dest) === 1) {
            crateArray1.push(tempArray[b])
        } else if (parseInt(dest) === 2) {
            crateArray2.push(tempArray[b])
        } else if (parseInt(dest) === 3) {
            crateArray3.push(tempArray[b])    
        } else if (parseInt(dest) === 4) {
            crateArray4.push(tempArray[b])
        } else if (parseInt(dest) === 5) {
            crateArray5.push(tempArray[b])
        } else if (parseInt(dest) === 6) {
            crateArray6.push(tempArray[b])
        } else if (parseInt(dest) === 7) {
            crateArray7.push(tempArray[b])
        } else if (parseInt(dest) === 8) {
            crateArray8.push(tempArray[b])
        } else if (parseInt(dest) === 9) {
            crateArray9.push(tempArray[b])
        }
    }
}

//fs.readFile('.\\Day5\\input-test.txt', function(err, data){
fs.readFile('.\\Day5\\input.txt', function(err, data){
    if(err) throw err
    console.log(`STARTING`)

    var array = data.toString().split('\r\n')

    for (i=0; i<array.length; i++){
        //console.log(array[i])

        var instruction = array[i].toString().split(' ')

        moveCrate(instruction[1], instruction[3], instruction[5])
    }


    console.log(`crateArray1 = ${crateArray1}`)
    console.log(`crateArray2 = ${crateArray2}`)
    console.log(`crateArray3 = ${crateArray3}`)
    console.log(`crateArray4 = ${crateArray4}`)
    console.log(`crateArray5 = ${crateArray5}`)
    console.log(`crateArray6 = ${crateArray6}`)
    console.log(`crateArray7 = ${crateArray7}`)
    console.log(`crateArray8 = ${crateArray8}`)
    console.log(`crateArray9 = ${crateArray9}`)

    console.log(`${crateArray1[crateArray1.length-1]}`)


    console.log(`COMPLETE |${crateArray1[crateArray1.length-1]}${crateArray2[crateArray2.length-1]}${crateArray3[crateArray3.length-1]}${crateArray4[crateArray4.length-1]}${crateArray5[crateArray5.length-1]}${crateArray6[crateArray6.length-1]}${crateArray7[crateArray7.length-1]}${crateArray8[crateArray8.length-1]}${crateArray9[crateArray9.length-1]}`)
})