var fs = require('fs')

var elf1, elf2
var string1 = '', string2 = ''
var count = 0

fs.readFile('.\\Day4\\input-test.txt', function(err, data){
//fs.readFile('.\\Day4\\input.txt', function(err, data){
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
        for (j=parseInt(temp2[0]); j<=parseInt(temp2[1]); j++) {
            string1 = ',' + string1 + j
        }
        console.log(string1)

        temp3 = elf2.toString().split('-')
        for(k=parseInt(temp3[0]); k<=parseInt(temp3[1]); k++) {
            string2 = ',' + string2 + j              
        }


        //if string1 length is 2
        if (string1.length === 2){
            //compare string 1 value to elf2[0] <= string1.substring
        }
        //if string2 length is 2
        //if string1 contains string2
        //if string2 contains string1


       

        string1 = ''
        string2 = ''
        efl1 = []
        elf2 = []
        temp = []
        temp2 = []
    }

    console.log(`COMPLETE COUNT = ${count}`)
})
