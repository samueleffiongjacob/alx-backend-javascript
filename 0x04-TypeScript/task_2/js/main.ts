// Define the DirectorInterface with required methods
export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}
// Define the TeacherInterface with required methods
export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}
// Implement the Director class that adheres to the DirectorInterface

export class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home';
  }
   // Method to return the string when getting a coffee break

  getCoffeeBreak() {
    return 'Getting a coffee break';
  }
  // Method to return the string when performing director tasks
  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}
  // Implement the Teacher class that adheres to the TeacherInterface
export class Teacher implements TeacherInterface {
  // Method to return the string when working from home
  workFromHome() {
    return 'Cannot work from home';
  }
  // Method to return the string when getting a coffee break
  getCoffeeBreak() {
    return 'Cannot have a break';
  }
  // Method to return the string when performing teacher tasks
  workTeacherTasks() {
    return 'Getting to work';
  }
}
// Function to create an employee based on the salary type and value
// If salary is a number and less than 500, return a Teacher, otherwise a Director
export function createEmployee(salary: (number | string)): (Director | Teacher) {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}
  // Type predicate function to check if the employee is a Director
export function isDirector(employee: (Director | Teacher)) {
  return employee instanceof Director;
}
  // Function to execute work based on the type of employee
  // Calls the appropriate method depending on if the employee is a Director or Teacher
export function executeWork(employee: (Director | Teacher)) {
  if (isDirector(employee)) {
    return (employee as Director).workDirectorTasks();
  }
  return (employee as Teacher).workTeacherTasks();
}
  // Define a string literal type for the subjects allowed (Math or History)
export type Subjects = ('Math' | 'History');
  // Function to teach a class based on the subject passed
  // Returns a different string depending on whether the subject is Math or History
export function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  if (todayClass === 'History') {
    return 'Teaching History';
  }
}
