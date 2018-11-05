function viralAdvertising(n) {
    let persons = 5;
    let likes = 0;
    for( let i = 0; i < n ; i++){
        let start = Math.floor(persons/2);
        persons = start * 3;
        likes += start;
    }
     return likes;
}