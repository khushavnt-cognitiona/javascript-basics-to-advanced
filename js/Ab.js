let personObj = {
  name: "Rajesh",
  age: 34,
  status: "Active",
  gender: "Male",
  isWorking: function () {
    console.log("Working...");
  },

  acemdics: {
    sem1: "AC",
    sem2: "ATKT",
    sem3: "DC",
    sem4: {
      a: 123,
      b: 345,
      c: 678,
      d: {
        x: "hi",
        v: "Hello",
        k: [
          true,
          false,
          undefined,
          null,
          {
            df: "HTML",
            kj: "CSS",
            lk: "JS",
            op: {
              nl: "Here is your ans"
            }
          }
        ]
      }
    }
  }
};

console.log("Full Object ---->");
console.log(personObj);

console.log("Final Answer (nl) ---->");
console.log(personObj.acemdics.sem4.d.k[4].op.nl);
