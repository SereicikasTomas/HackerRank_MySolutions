function beautifulDays(i, j, k) {
    let beautiful = 0;
    for ( let days = i; days <= j; days++ ) {
        let reverse = Number(days.toString().split("").reverse().join(""));
        if( (days-reverse)%k == 0 ){
           beautiful ++;
        } else {
            beautiful += 0;
        }
    }
    return beautiful;
}