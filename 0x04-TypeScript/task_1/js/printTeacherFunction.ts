interface printTeacherFunction {
    (firstName: string, lastName: string): string
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    const firstLetter = firstName.charAt(0);
    return `${firstLetter}. ${lastName}`;
};

const teacherName = printTeacher("John", "Doe");
console.log(teacherName) 