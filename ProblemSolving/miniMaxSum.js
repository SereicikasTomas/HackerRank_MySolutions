function miniMaxSum(arr) {
    let maxSum = 0;
    let minSum = 0;
    let leng = arr.length;
    let sort = arr.sort(function(a, b){return a - b});
    for (let i = 0; i < leng-1; i++) {
            minSum += arr[i];
    }
    for (let l = 1; l < leng; l++) {
            maxSum += arr[l];
    }
    console.log(minSum + " " + maxSum);
}