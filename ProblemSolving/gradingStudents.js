function gradingStudents(grades) {
    // Create an empty array where you will store rounded grades
    let grad = [];
    // Loop through all grades 
    for(let i = 0; i < grades.length; i++){
        // Check how much the grade is missing to be rounded and add that number.
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

// Shorter version

function gradingStudents(grades) {
    let grad = [];
    grades.forEach(grade => { 
        grade%5 == 3 && grade >=38 ? grad.push(grade+2):
        grade%5 == 4 && grade >=38 ? grad.push(grade+1): grad.push(grade);
    });
    return grad;
}