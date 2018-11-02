function countingSort(arr) {
    let a = [];
    for ( let i = 0; i <= 99; i++){
        let count = 0;
        a[i] = 0;
        for ( let j = 0; j <= arr.length; j++){
            if (i == arr[j]){
                count ++;
                a[i] = count;
            }
        }
    }
    return a;
}