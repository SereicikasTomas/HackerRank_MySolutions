function designerPdfViewer(h, word) {
    const alph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let wordArray = [...word];
    let numArray = wordArray.map(val => {let letterPosition = alph.indexOf(val);
    return h[letterPosition];
    });
    let highNum = Math.max(...numArray);
    return highNum * word.length;
}