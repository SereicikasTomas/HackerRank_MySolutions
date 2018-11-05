function equalizeArray(arr) {
    let sort = arr.sort();
    let rep = 0;
    let top = 0;
    for(let i = 0; i < sort.length; i++){
        for(let j = 0; j < sort.length; j++){
            rep += sort[i]==sort[j]? 1 : 0;
        }
        top = rep > top ? rep : top;
        rep = 0;
    }
    return sort.length - top;
}