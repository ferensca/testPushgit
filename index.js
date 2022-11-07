/*Kaminang, Anjelita Ferensca*/

let person = [

    {
        name: "john",
        age: 35,

    },
    {
        name: "bill",
        age: 23,
    },
    {
        name: "bob",
        age: 17,
    },
    {
        name: "jack",
        age: 20,
    },
];

  let newPerson = person;
  let max = person[0].age;
  let min = person[0].age;
  let maxIndex = 0;
  let minIndex = 0;
  for (let i = 0; i < person.length; i++) {
    if (person[i].age > max) {
      max = person[i].age;
      maxIndex = i;
      
    }
    if (person[i].age < min) {
      min = person[i].age;
      minIndex = i;
      
    }
    newPerson.slice(maxIndex, i);
    newPerson.splice(minIndex, i);
    console.log(
      "hasil akhir umur tertua dan termuda adalah ",
      newPerson
    );
  }
