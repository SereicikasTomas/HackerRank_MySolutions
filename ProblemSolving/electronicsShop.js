function getMoneySpent(keyboards, drives, b) {
    let arr = [];
    for (let k of keyboards){
        for (let d of drives){
            if(k + d <= b ){
               arr.push(k + d);
            }
        }
    }
    return arr.length == 0 ? -1 : Math.max(...arr);
}