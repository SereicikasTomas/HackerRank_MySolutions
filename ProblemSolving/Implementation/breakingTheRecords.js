function breakingRecords(scores) {
    // Create array to store the answer and variables to store the counts and lowest and highest records
    let record = [];
    let high = 0;
    let low = 0;
    let lowSc = scores[0];
    let highSc = scores[0];
    // Loop through all scores and check how many times Maria broke her best and worst records
    scores.forEach( score => {
        if ( highSc < score ) {
            high ++;
            highSc = score;
        } else if ( lowSc > score ) {
            low ++;
            lowSc = score;
        }
    });
    record.push(high);
    record.push(low);
    return record;
}
