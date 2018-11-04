function sockMerchant(n, ar) {
    let array = ar.sort();
    let pair = 0;
    for(let i = 0; i < ar.length; i++) {
        if( array[i] == array[i+1]){
            array.splice(i, 1);
            pair ++;
        }
    }
    return pair;
}