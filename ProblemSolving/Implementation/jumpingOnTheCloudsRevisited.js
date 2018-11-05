function jumpingOnClouds(c, k) {
    let energy = 100;
    for(let i = 0; i < c.length; i += k){
        energy -= c[i] == 1 ? 3 : 1;
    }
    return energy;
}