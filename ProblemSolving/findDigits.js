function findDigits(n) {
    let count = 0;
    let arr = (''+n).split('').map(Number);
    let res = arr.map(val => n%val == 0 ? 1 : 0);
    for ( let i = 0; i < res.length; i++){
        count += res[i] == 1 ? 1 : 0;
    }
    return count;
}