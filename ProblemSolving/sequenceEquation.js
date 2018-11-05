function permutationEquation(p) {
    let arr = [];
    let arrN = [];
    for ( let i = 0; i < p.length; i++ ){
        arr[i] = p.indexOf(i+1)+1;
        arrN[i] = p.indexOf(arr[i])+1;
    }
    return arrN;
}