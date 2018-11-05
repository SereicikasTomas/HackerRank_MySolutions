function repeatedString(s, n) {
    let answ = s.replace(/[^a]/g, "").length * Math.floor(n / s.length);
    answ += s.substr(0, (n % s.length)).replace(/[^a]/g, "").length;
    return answ;
}