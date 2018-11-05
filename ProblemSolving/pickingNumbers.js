function pickingNumbers(a) {
    let sort = a.sort();
    let high = 0;
    for(let i=0; i<sort.length; i++){
        let repeat = 0;
        //Check how many times number repaets and has +1 numbers
        for(let j=0; j<sort.length; j++){
            repeat += sort[i]+1 == sort[j] || sort[i] == sort[j] ? 1 : 0;
        }
        //Set check and set new highest count
        high = high < repeat ? repeat : high;
        //Restart count
        repeat = 0;
    }
    return high;
}