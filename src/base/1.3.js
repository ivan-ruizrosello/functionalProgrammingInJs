function showStudent(ssn) {
    var student = db.get(ssn);
        if(student !== null) {
            document.querySelector(`#${elementId}`).innerHTML =
                `${student.ssn},
                ${student.firstname},
                ${student.lastname}`;
            }
        else {
            throw new Error('Student not found!');
        }
   }
showStudent('444-44-4444'); 