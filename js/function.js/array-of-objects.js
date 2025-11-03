let personArr = [
  {
    id: 1,
    name: "khushvant",
    age: 34,
    status: "Active",
  },
  {
    id: 2,
    name: "vishal",
    age: 30,
    status: "InActive",
  },
  {
    id: 3,
    name: "Akash",
    age: 32,
    status: "Active",
  },
  {
    id: 4,
    name: "kunal",
    age: 35,
    status: "Active",
  },
  {
    id: 5,
    name: "Sakshi",
    age: 28,
    status: "InActive",
  },
];

console.table(personArr);

let filterarr = personArr.filter((a) => a.name !== "Akash");

console.log(filterarr);

for (let i = 0; i < personArr.length; i++) {
  if (personArr[i].age < 30 && personArr[i].status === "InActive") {
    personArr[i].status = "Active";
  }
}
console.log(personArr);

for (let i = 0; i < personArr.length; i++) {
  if (personArr[i].age === 35) {
    personArr[i].city = "Nagpur";
  }
}
console.table(personArr);

for (let i = 0; i < personArr.length; i++) {
  if (personArr[i].id === 2) {
    personArr[i].name = "Vishu";
    personArr[i].age = 24;
    personArr[i].status = "Active";
  }
}
console.table(personArr);

for (let i = 0; i < personArr.length; i++) {
  if (personArr[i].status === "Active") {
    personArr[i].salary = 500000;
  }
}
console.table(personArr);
