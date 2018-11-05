function catAndMouse(x, y, z) {
    let distA = Math.abs(z - x);
    let distB = Math.abs(z - y);
    return distA < distB ? "Cat A" : distA > distB ? "Cat B" : "Mouse C";
}