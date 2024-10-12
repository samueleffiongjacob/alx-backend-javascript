// Task 1: Teacher interface
export interface Teacher {
  readonly firstName: string; // FirstName is readonly
  readonly lastName: string;  // LastName is readonly
  fullTimeEmployee: boolean;  // FullTimeEmployee is required
  yearsOfExperience?: number; // Optional property
  location: string;           // Location is required
  [propName: string]: any;    // Allow dynamic properties
}

// Task 2: Directors interface extending Teacher
export interface Directors extends Teacher {
  numberOfReports: number; // Additional property specific to Directors
}

// Example usage of the Directors interface
const director1: Directors & DirectorInterface & TeacherInterface = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
  workFromHome() {
    return 'Working from home';
  },
  getCoffeeBreak() {
    return 'Getting a coffee break';
  },
  workDirectorTasks() {
    return 'Getting to director tasks';
  },
  workTeacherTasks() {
    return 'Getting to work';
  },
};

console.log(director1);

// Existing code for Teacher and Director classes
export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home';
  }

  getCoffeeBreak() {
    return 'Getting a coffee break';
  }

  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

export class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot work from home';
  }

  getCoffeeBreak() {
    return 'Cannot have a break';
  }

  workTeacherTasks() {
    return 'Getting to work';
  }
}

export function createEmployee(salary: (number | string)): (Director | Teacher) {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

export function isDirector(employee: (Director | Teacher)) {
  return employee instanceof Director;
}

export function executeWork(employee: (Director | Teacher)) {
  if (isDirector(employee)) {
    return (employee as Director).workDirectorTasks();
  }
  return (employee as Teacher).workTeacherTasks();
}

export type Subjects = ('Math' | 'History');

export function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  if (todayClass === 'History') {
    return 'Teaching History';
  }
}

// Task 3: PrintTeacher function and interface
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe

// Task 4: StudentClass implementation
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface Student {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements Student {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage of StudentClass
const student1 = new StudentClass({ firstName: 'John', lastName: 'Doe' });
console.log(student1.workOnHomework()); // Output: Currently working
console.log(student1.displayName()); // Output: John
