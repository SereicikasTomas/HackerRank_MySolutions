function countingSort(arr) {
    // Create array to store values
    let a = [];
    // Loop through numbers from 0 to 99
    for ( let i = 0; i <= 99; i++){
        // Set counter for repeating numbers
        let count = 0;
        // Loop array and compare numbers with numbers from array
        arr.forEach(num => {
            i == num && count ++;
                        a[i] = count;
        });
    }
    return a;
}