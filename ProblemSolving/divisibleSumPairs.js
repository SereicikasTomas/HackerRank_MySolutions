function divisibleSumPairs(n, k, ar) {
    // Set counter
    let count = 0;
    // Two loops to compare array values and update counter if condition is met
    for ( let i = 0; i < n; i++){
        for ( let j = 0; j < n; j++){
            if ( i<j && (ar[i]+ar[j])%k==0 ){
                count ++;
            }
        }
    }
    return count;
}