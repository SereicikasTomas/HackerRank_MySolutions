function fairRations(B) {
    let sum = 0;
    let count = 0;
    // Add all array values to check if the sum is even or not number
    B.map(val => sum+= val);
    if (sum % 2 != 0){
        return 'NO';
    } else {
        // Loop through all array values
        for(let i = 0; i < B.length-1; i++){
            // Check for odd numbers
            if(B[i] % 2 != 0){
                // Add 1 to odd number and number after it
                B[i]++;
                B[i+1]++;
                // Count loaf of breads that where given
                count += 2;
            }
        }
        return count;
    }
}