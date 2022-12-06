var fs = require('fs')

var elf1, elf2
var string1 = '', string2 = ''
var count = 0

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
        //console.log(`temp2 ${temp2}`)
        //console.log(`temp2[0] ${temp2[0]}, temp2[1] ${temp2[1]}`)
        for (j=parseInt(temp2[0]); j<=parseInt(temp2[1]); j++) {
            string1 += j.toString()    
        }

        //console.log(elf1)
        //console.log(string1)
        
        temp3 = elf2.toString().split('-')
        for(k=parseInt(temp3[0]); k<=parseInt(temp3[1]); k++) {
            string2 += k.toString()
        }
        
        //console.log(string2)

        //check if string1 contains string2
        if ((string1.length === 1) || (string2.length === 1)) {
            if (string1.length === 1) {
                temp3 = elf2.toString().split('-')
                if (( parseInt(temp3[0]) <= parseInt(string1)) && (parseInt(temp3[1]) >= parseInt(string1))) { 
                    //console.log(`string1 is 1 char ${i}`)
                    count++
                }
            }
            if (string2.length === 1) {
                temp4 = elf1.toString().split('-')
                if ((parseInt(temp4[0]) <= parseInt(string2)) && (parseInt(string2) <= parseInt(temp4[1]))) { 
                    //console.log(`${parseInt(temp4[0])}<= ${parseInt(string2)} <= ${parseInt(temp4[1])}`)
                    count++
                }   
            }
        } else {
            if (string1.indexOf(string2) > -1){
                count++
                //console.log(`string1 ${i}`)
            } else if (string2.indexOf(string1) > -1){
                count++
                //console.log(`string2 ${i} ${string1} - ${string2}`)
            }
        }

        string1 = ''
        string2 = ''
        efl1 = []
        elf2 = []
        temp = []
        temp2 = []
    }

    console.log(`COMPLETE COUNT = ${count}`)
})
