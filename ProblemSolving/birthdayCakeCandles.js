function birthdayCakeCandles(ar) {
    let leng = ar.length;
    let candles = 0;
    let max = Math.max(...ar);
    for (let i = 0; i < leng; i++) {
        if ( ar[i] === max ) {
            candles ++;
        }
    }
    return candles;
}