// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "samuel",
  lastName: "Effiong",
  age: 20,
  location: "Nigeria",
};

const student2: Student = {
  firstName: "EFFIONG",
  lastName: "SAMUEL",
  age: 22,
  location: "nIGERRIA",
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Using Vanilla JavaScript to render a table
const body = document.querySelector("body");
const table = document.createElement("table");

// Create table header row
const headerRow = table.insertRow();
const headerCell1 = headerRow.insertCell(0);
headerCell1.innerHTML = "<b>First Name</b>";
const headerCell2 = headerRow.insertCell(1);
headerCell2.innerHTML = "<b>Location</b>";

// Loop through the studentsList array and append rows to the table
studentsList.forEach((student) => {
  const row = table.insertRow(); // Create a new row
  const firstNameCell = row.insertCell(0); // First cell for first name
  const locationCell = row.insertCell(1); // Second cell for location

  firstNameCell.innerText = student.firstName;
  locationCell.innerText = student.location;
});

// Append the table to the body if body exists
if (body) {
  body.appendChild(table);
}
