function pangrams(s) {
    //First you need an alphabet to check the letters
    let alph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    //Then you set letters to lowercase, split into separate letters, remove white space
    let filter = s.toLowerCase().split('').filter(val => val != ' ');
    
    //Add counter for how many letters are missing
    let missing = 0;
    
    //Loop through alph aray values and check which and how many letters are not in string array
    for(let val of alph){
        missing += !filter.includes(val) ? 1 : 0;
    }
    
    //The answer
    return missing == 0 ? 'pangram': 'not pangram';
}