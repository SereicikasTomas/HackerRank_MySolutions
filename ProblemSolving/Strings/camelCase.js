function camelcase(s) {
    // Using RegEx find words that begin with uppercase letter and split the to different words in array.
    let arr = s.split(/[A-Z]/);
    // Return how many words are in array.
    return arr.length;
}