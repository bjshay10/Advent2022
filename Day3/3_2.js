const { Console } = require('console')
var fs = require('fs')

var container1
var container2
var container3
var container4
var container5
var container6

var elf1
var elf2
var elf3

var inElf2
var inElf3

var badgeCnt = 0
var badgeChar

var priority = 0

var testChar = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

function charPriority(char){
    return testChar.indexOf(char) + 1
}

function checkContainers (array, char) {

    container1 = array[i].substring(0,array[i].length/2)
    container2 = array[i].substring(array[i].length/2,array[i].length)

    //loop through characters in container1
    for (j=0; j<container1.length; j++){
        var c1 = container1[j]

        if (container2.toString().indexOf(c1) > -1){
            badgeCnt += 1
            return c1    
        }
    }
}

//fs.readFile('.\\Day3\\input-test2.txt', function(err, data){
//fs.readFile('.\\Day3\\input-test.txt', function(err, data){
fs.readFile('.\\Day3\\input.txt', function(err, data){
    if(err) throw err

    console.log('STARTING')

    var array = data.toString().split('\r\n')

    for (i=0; i<array.length; i+=3)  {
        badgeCnt = 0
        badgeChar = ''
        inElf2 = 'N'
        inElf3 = 'N'

        //loop through array creating the groups of 3
        elf1 = array[i]
        elf2 = array[i+1]
        elf3 = array[i+2]

        //console.log(`${elf1}   ${elf2}    ${elf3}`)

        // check elf1 for badge
        for (j=0; j<elf1.length; j++){
            infElf2 = 'N'
            inElf3 = 'N'
            if (elf2.indexOf(elf1[j]) > -1){
                inElf2 = 'Y'
            }
            
            if (elf3.indexOf(elf1[j]) > -1){
                inElf3 = 'Y'
            }

            if (inElf2 === 'Y' && inElf3 === 'Y'){
                badgeChar = elf1[j].toString()
                break
            }
        }

        priority += charPriority(badgeChar)
    }

    //2547 is too small a number
    //2548 is wrong
    console.log(`COMPLETE Priority is ${priority}`)
})
