function countingValleys(n, s) {
    let start = 0;
    let arr = [];
    let valeys = 0;
    for ( let i = 0; i < n; i++ ) {
        if ( s[i] === "D" ) {
            start -= 1;
        } else if ( s[i] === "U" ) {
            start += 1;
        }
        arr.push(start);
        if ( arr[i] ==0 && arr[i-1] < 0 ) {
            valeys ++;
        }
    }
    return valeys;
}