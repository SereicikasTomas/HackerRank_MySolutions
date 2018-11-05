function marsExploration(s) {
    let split = s.split(""); 
    let count = 0;
    for(let i = 0; i < split.length; i++){
        count += i%3==0 && split[i] != 'S' ? 1:
                 i%3==1 && split[i] != 'O' ? 1:
                 i%3==2 && split[i] != 'S' ? 1: 0;
    }
    return count;
}