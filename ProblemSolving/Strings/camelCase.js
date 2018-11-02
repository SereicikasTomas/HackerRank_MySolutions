function camelcase(s) {
    let arr = s.split(/(?=[A-Z])/);
    return arr.length;
}