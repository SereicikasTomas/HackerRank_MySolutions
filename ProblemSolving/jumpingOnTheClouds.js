function jumpingOnClouds(c) {
    let count = 0;
    let i = 0;
    while ( i < c.length - 1) {
        if (c[i+2] == 0) {
            i += 2;
        } else if (c[i+1] == 0) {
            i += 1;
        } 
        count ++;
    }
    
    return count;
}