function hourglassSum(arr) {
    let array = [];
    let sum = 0;
    let leng = arr.length;
    for (let x = 0; x < leng-2; x++) {
        for (let y = 0; y < leng-2; y++ ) {
            sum = arr[x][y] + arr[x][y+1] + arr[x][y+2] + arr[x+1][y+1] + arr[x+2][y] + arr[x+2][y+1] + arr[x+2][y+2];
            array.push(sum);
        }
    }
    let max = Math.max(...array);
    return max;
}