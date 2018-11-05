function chocolateFeast(n, c, m) {
    //How many chocolates bought
    let choco = Math.floor(n/c);
    //How many wrappers he has
    let wraps = choco;
    let ex;
    let left;
    //While he has enough wrappers do this
    while( wraps >= m ){
        //Count how mane he exchanged
        ex = Math.floor(wraps/m);
        //Check if any have left not exchanged
        left = wraps%m;
        //Count new wrappers to exchange
        wraps = ex+left;
        //Add new eaten chocolates
        choco += ex;
    }
    return choco;
}