interface StudentClassInterface {
    workOnHomework: () => string;
    displayName: () => string;
}

interface StudentInterface {
    firstName: string;
    lastName: string
}

export default class StudentClass implements StudentClassInterface{
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public workOnHomework(): string {
        return 'Currently working';
    }

    public displayName(): string {
        return this.firstName;
    }
}

let stu1 = new StudentClass('dave', 'jones')
stu1.displayName()
stu1.workOnHomework()