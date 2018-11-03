function kangaroo(x1, v1, x2, v2) {
    // If the second kangaroo moves faster and is further the first one will never catch up
    return x2>x1 && v2>v1? "NO":
            // Check if first kangaroos speed is enough to catch up to second one
           (x2-x1)%(v1-v2) == 0? "YES": "NO";
}