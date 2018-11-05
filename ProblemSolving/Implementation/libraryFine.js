function libraryFine(d1, m1, y1, d2, m2, y2) {
    // Just check with if statements on how long the return is due and return the fine
    return d1 > d2 && m1 == m2 && y1 == y2 ? 15*(d1-d2):
            m1 > m2 && y1 == y2 ? 500*(m1-m2):
            y1 > y2 ? 10000 : 0;
}