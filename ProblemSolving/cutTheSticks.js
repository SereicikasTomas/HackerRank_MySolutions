function cutTheSticks(arr) {
    let length = [];
    while(arr.length){
        let min = Math.min(...arr);
        length.push(arr.length);
        arr = (arr.map(val => val - min)).filter(val => val > 0);
    } 
    return length;
}