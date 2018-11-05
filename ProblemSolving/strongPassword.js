function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    //Create RegEx 
    const lower = /[a-z]/;
    const upper = /[A-Z]/;
    const digits = /\d/;
    const spec = /!|@|#|\$|%|\^|&|\*|\(|\)|-|\+/;
    //Count how many requirements are missing
    let missing = 0;
    missing += (!lower.test(password)) && 1;
    missing += (!upper.test(password)) && 1;
    missing += (!digits.test(password)) && 1;
    missing += (!spec.test(password)) && 1;
    //Check if word is long enough with missing requirements and return
    return missing+n < 6 ? 6-n: missing;
}