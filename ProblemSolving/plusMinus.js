function plusMinus(arr) {
    let leng = arr.length;
    let zero = 0;
    let plus = 0;
    let minus = 0;
    
    for (let i = 0; i < leng; i++) {
        if (arr[i] == 0) {
            zero += 1;
        } else if (arr[i] > 0) {
            plus += 1;
        } else if (arr[i] < 0) {
            minus += 1;
        }
    }
    
    console.log((plus/leng).toFixed(6));
    console.log((minus/leng).toFixed(6));
    console.log((zero/leng).toFixed(6));
}