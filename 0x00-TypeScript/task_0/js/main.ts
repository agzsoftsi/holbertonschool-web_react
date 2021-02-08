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

const studTable: Array<Student> = [stud1, stud2];
