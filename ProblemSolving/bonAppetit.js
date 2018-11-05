function bonAppetit(bill, k, b) {
    let sum = 0;
    bill.forEach(pay => sum += pay);
    (sum-bill[k])/2 == b ? console.log("Bon Appetit"): console.log(b-((sum-bill[k])/2));
}