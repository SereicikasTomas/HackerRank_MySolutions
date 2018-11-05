function minimumDistances(a) {
    let arr = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = 1; j < a.length; j++) {
            if ( a[i] == a[j] ) {
                arr[i] = j-i;
            } 
        }
    }
    let filt = arr.filter(val => val > 0);
    return filt.length > 0 ? Math.min(...filt): -1;
}