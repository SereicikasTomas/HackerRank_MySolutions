function angryProfessor(k, a) {
    return a.filter(x => x<=0).length >= k ? "NO" : "YES";
}