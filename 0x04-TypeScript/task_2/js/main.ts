import { number } from "yargs";

export interface DirectorInterface {
    workFromHome: () => string;
    getCoffeeBreak: () => string;
    workDirectorTasks: () => string;
}

export interface TeacherInterface {
    workFromHome: () => string;
    getCoffeeBreak: () => string;
    workTeacherTasks: () => string;
}

export class Director implements DirectorInterface {
    workFromHome = () => 'Working from home';

    getCoffeeBreak = () => 'Getting a coffee break';

    workDirectorTasks = () => 'Getting to director task';
}

export class Teacher implements TeacherInterface {
    workFromHome = () => 'Cannot work from home';

    getCoffeeBreak = () => 'Cannot have a break';

    workTeacherTasks = () => 'Getting to task';
}

export function createEmployee(salary: string | number): Teacher | Director {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

export function isDirector(employee: Teacher | Director) {
    return employee instanceof Director;
}

export function executeWork(employee: Teacher | Director) {
    if (isDirector(employee)) {
        (<Director>employee).workDirectorTasks();
    } else {
        (employee as Teacher).workTeacherTasks();
    }
}

export type Subjects = 'Math' | 'History';

export function teahClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else if (todayClass === 'History') {
        return 'Teaching History';
    }
}