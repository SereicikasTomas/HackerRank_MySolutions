function pageCount(n, p) {
    const get = (page) => Math.floor(page / 2);
    const max = get(n);
    const dest = get(p);
    const diff = max - dest;
    return dest < diff ? dest : diff;
}