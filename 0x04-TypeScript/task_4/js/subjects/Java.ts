namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }
    export class Java extends Subject {
        getRequirement(): string {
            return 'Here is the list of requirements for Java';
        }
        getAvailableTeacher(): string {
            if (!this.teacher && this.teacher.experienceTeachingJava < 1) {
                return 'No available teacher';
            }
            return `Available Teacher: ${this.teacher.firstName}`
        }
    }
}