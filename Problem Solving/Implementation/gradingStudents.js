function gradingStudents(grades) {
    let grad = [];
    for(let i = 0; i < grades.length; i++){
        if ( grades[i]%5 == 3 && grades[i] >=38 ){
            grad.push(grades[i]+2);
        } else if ( grades[i]%5 == 4 && grades[i] >=38 ) {
            grad.push(grades[i]+1);
        } else {
            grad.push(grades[i]);
        }
    }
    return grad;
}