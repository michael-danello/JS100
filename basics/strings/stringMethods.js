let testStr = "hello world"

function toUpper(str) {
    str.toUpperCase();
}

function repeat(num, str) {
    let newStr = '';
    for (i = 0; i < num; i++) {
        newStr += str
    }
    return newStr
}


function strEquality(str1,str2) {
    return str1.toLowerCase() === str1.toLowerCase()
}

`
I 
am 
a 
multiline 
string
`

function isEmpty(str) {
    return str.trim().length === 0;
}

function capitalize(str) {

    if (!str) {
        return str
    }

    let capitalized = ''
    let words = str.split(' ')
    words.forEach(element => {
        console.log(element)
        capitalized += element[0].toUpperCase() + element.substring(1) + " "
    });
    console.log(capitalized);
    return capitalized;
    }

capitalize("")
capitalize("helllo you there; I see you -over there")