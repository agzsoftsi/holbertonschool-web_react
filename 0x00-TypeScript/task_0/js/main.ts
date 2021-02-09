interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const stud1: Student = {
  firstName: "Carlos",
  lastName: "Garcia",
  age: 33,
  location: "Cali",
};

const stud2: Student = {
  firstName: "Marcela",
  lastName: "Arismendi",
  age: 32,
  location: "Palmira",
};

const studentsList: Array<Student> = [stud1, stud2];
const body = document.getElementsByTagName("body")[0];
const table = document.createElement("table");

studentsList.forEach((stud) => {
  const row = table.insertRow(0);
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);

  cell1.innerHTML = stud.firstName;
  cell2.innerHTML = stud.location;
});

body.append(table);