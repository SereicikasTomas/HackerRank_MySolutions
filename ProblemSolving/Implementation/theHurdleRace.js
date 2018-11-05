function hurdleRace(k, height) {
    let high = Math.max(...height);
    return k < high ? high - k : 0;
}