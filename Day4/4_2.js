const { Console } = require('console')
var fs = require('fs')

var elf1, elf2
var string1 = '', string2 = ''
var e1Start, e1End, e2Start, e2End
var count = 0

function findOverlap(a,b) {
    if (b.length === 0) { 
        //console.log(`b.length = 0`)
        return "" 
    }

    if (a.endsWith(b)) { 
        //console.log(`a,endsWith(b)`)
        return b 
    }

    if (a.indexOf(b) >= 0) {
        //console.log(`a.indexOf(b)`)
        return b
    }

    return findOverlap(a, b.substring(0,b.length - 1))
}

//fs.readFile('.\\Day4\\input-test.txt', function(err, data){
fs.readFile('.\\Day4\\input.txt', function(err, data){
    if(err) throw err
    //HOW MANY ASSIGNMENT PAIS FULLY CONTAIN THE OTHER

    console.log(`STARTING`)

    var array = data.toString().split('\r\n')

    for (i=0; i<array.length; i++) {
        temp = array[i].toString().split(',')
        elf1 = temp[0]
        elf2 = temp[1]

        //make string visualizations???
        temp2 = elf1.toString().split('-')
        temp3 = elf2.toString().split('-')
        e1Start = temp2[0]
        e1End = temp2[1]
        e2Start = temp3[0]
        e2End = temp3[1]


        

        //if e1Start <= e2Start or e2End and <= e1End
        //if e2Start <= e1Start or e2End and <= e2SEnd
        
        if ( ((parseInt(e1Start) <= parseInt(e2Start)) && (parseInt(e2Start) <= parseInt(e1End))) || ((parseInt(e1Start) <= parseInt(e2End)) && (parseInt(e2End) <= parseInt(e1End))) ){
            //console.log(`E1 ((${e1Start} <= ${e2Start}) && (${e2Start} <= ${e1End})) || ((${e1Start} <= ${e2End}) && (${e2End} <= ${e1End}))`)
            count++
        } else if ( ((parseInt(e2Start) <= parseInt(e1Start)) && (parseInt(e1Start) <= parseInt(e2End))) || ((parseInt(e2Start) <= parseInt(e1End)) && (parseInt(e1End) <= parseInt(e2End))) ) {
            //console.log(`E2 ((${e2Start} <= ${e1Start}) && (${e1Start} <= ${e2End})) || ((${e2Start} <= ${e1End}) && (${e1End} <= ${e2End}))`) 
            count++
        } else {
            console.log(`${e1Start} - ${e1End} | ${e2Start} - ${e2End}`)
        }
        
        /*
        for (j=parseInt(temp2[0]); j<=parseInt(temp2[1]); j++) {
            string1 = string1 + ', '+ j.toString() +' ' 
        }

        
        
        for(k=parseInt(temp3[0]); k<=parseInt(temp3[1]); k++) {
            string2 = string2 + ', ' + k.toString()+' '
        }
        */
        
        

        string1 = ''
        string2 = ''
        efl1 = []
        elf2 = []
        temp = []
        temp2 = []
    }

    //835 too low
    //980ish too high
    //912 too high
    console.log(`COMPLETE COUNT = ${count}`)
})
