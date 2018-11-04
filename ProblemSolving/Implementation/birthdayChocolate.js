function birthday(s, d, m) {
    // Set counter for chocolates
    let count = 0;
    // Loop for chocolate bars
    for(let i = 0; i < s.length; i++){
        let initNum = s[i];
        // Loop to sum up bars
        for (let j = 1; j < m; j++){
            initNum += s[i+j];
        }
        // Check if bar sum is the same number as d and update counter
        if( initNum == d ) {
            count ++;
        }
    }
    return count;
}