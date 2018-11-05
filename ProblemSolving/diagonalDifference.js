function diagonalDifference(arr) {
    let leng = arr.length;
    let first = 0;
    let second = 0;
    for (let i = 0; i < leng; i++){
        for (let j = 0; j < leng; j++ ){
            if ( i === j ) {
                first += arr[i][j];
            } 
            if ( i+j === leng-1) {
                second += arr[i][j];
            }
        }
    }
    let sum = first - second;
    return Math.abs(sum);
}