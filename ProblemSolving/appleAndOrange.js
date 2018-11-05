function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Create variables to store count of apples and oranges that fell on Sam's house.
    let appNum = 0;
    let orNum = 0;
    // Loop through apples and oranges array to check where each fruit fell from tree.
    for(let m = 0; m < apples.length; m++){
        let place = a + apples[m];
        // Then check if that place is on top of Sam's house and add to the variable that was declared at the beginning.
        if ( place >= s && place <= t ) {
            appNum ++;
        }
    }
    console.log(appNum);
    for(let n = 0; n < oranges.length; n++){
        let place = b + oranges[n];
        if ( place >= s && place <= t ) {
            orNum ++;
        }
    }
    console.log(orNum);
}

// Shorter version 

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appNum = 0;
    let orNum = 0;
    apples.forEach( apple => {
        let place = a + apple;
        (place >= s && place <= t) && appNum ++;
    });
    console.log(appNum);
    oranges.forEach( orange => {
        let place = b + orange;
        (place >= s && place <= t) && orNum ++;
    });
    console.log(orNum);
}