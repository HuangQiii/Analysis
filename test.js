function dealNum(num, type) {
    var finalNum;
    if (type === '%') {
        finalNum = num.toFixed(2) * 100;
    } else {
        if (Math.floor(num) === num) {
            finalNum = num;
        } else {
            finalNum = num.toFixed(1);
        }
    }
    return finalNum;
}

let num = 0.01;
dealNum(num)