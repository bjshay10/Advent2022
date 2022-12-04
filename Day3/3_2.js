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
fs.readFile('.\\Day3\\input-test.txt', function(err, data){
//fs.readFile('.\\Day3\\input.txt', function(err, data){
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
            container1 = elf1.substring(0,elf1.length/2)
            container2 = elf1.substring(elf1.length/2,elf1.length)
            console.log(container1)
            console.log(container2)
            for (k=0; k<container1.length; k++){
                var c1 = container1[k]
    
                if (container2.toString().indexOf(c1) > -1){
                    badgeChar = c1
                    console.log(`badge in elf1 is ${c1}`)
                    break;    
                }    
            }
            // check elf2 for badge
            container3 = elf2.substring(0,elf2.length/2)
            container4 = elf2.substring(elf2.length/2,elf2.length)

            if ((container3.indexOf(c1) > -1) && (container4.indexOf(c1) > -1)) {
                inElf2 = 'Y'
            }
            // check elf3 for badge
            container5 = elf3.substring(0,elf3.length/2)
            container6 = elf3.substring(elf3.length/2,elf3.length)

            if ((container5.toString().indexOf(c1) > -1) && (container6.indexOf(c1) > -1)) {
                inElf3 = 'Y'
            }

            if ((inElf2 === 'Y') && (inElf3 === 'Y')) { 
                priority += charPriority(c1) 
                break;
            }
        }
    }

    //2547 is too small a number
    console.log(`COMPLETE Priority is ${priority}`)
})
