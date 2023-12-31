interface StudentClassInterface {
    workOnHomework: () => string;
    displayName: () => string;
}

interface StudentConstuctorInterface {
    new (firstName: string, lastName: string): StudentClassInterface;
}

export default class StudentClass implements StudentClassInterface{
    private _firstName: string;
    private _lastName: string;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    public workOnHomework(): string {
        return 'Currently working';
    }

    public displayName(): string {
        return this._firstName;
    }
}
