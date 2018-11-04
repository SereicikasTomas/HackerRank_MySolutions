function migratoryBirds(arr) {
    let sort = arr.sort();
    let answ;
    let count = 0;
    let appear = 1;
    // Loop to search for same numbers in array
    for (let i = 0; i < sort.length; i++){
        count = ( sort[i] == sort[i+1] ) ? count + 1 : 0;
        // Check for new higher appearance count and update answer
        if( count > appear ){
            answ = sort[i];
            appear = count;
        }
    }
    return answ;
}