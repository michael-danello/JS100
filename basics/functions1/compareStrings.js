function compareStringsByLength(str1,str2) {
    if (str1.length > str2.length) {
        return 1;
    }
    else if (str1.length === str2.length) {
        return 0;
    }
    else {
        return -1;
    }
}

let strTest = compareStringsByLength("a","abc")
console.log(strTest);