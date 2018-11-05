function staircase(n) {
    for (let y = 0; y < n; y++){
        let array = '';
        for (let x = 0; x < n; x++ ) {
            if (y+x >= n-1) {
                array += '#';
            } else {
                array += ' ';
            }
        }
        console.log(array);
    }
}