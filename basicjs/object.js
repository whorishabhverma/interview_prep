const person ={
    name:"rishabh",
    course:"MCA",
   'Registration No': "2022Ca080"
}
//adding properties
person.age = 19

Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

// deleting properties
delete person.course;

// Checking if a property exists:
console.log("name" in person);  // true
console.log(person.hasOwnProperty("age"));  // true

// Getting all keys of an object:
console.log(Object.keys(person));
//// Getting all values of an object:
console.log(Object.values(person));

//lopping in object
for (let key in person) {
    console.log(key + ": " + person[key]);
}


//Merging objects:
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let merged = Object.assign({}, obj1, obj2);
// Or using spread operator:
// let merged = { ...obj1, ...obj2 };

//Sealing an object (prevents adding/deleting properties, but allows modifying existing ones):
Object.seal(person);

//prevent modifications
Object.freeze(person);

Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

///////////////////////////////////////////////////////////////////////


let person = {
    "first name": "John",
    "last name": "Doe",
    get fullname() {
      return this["first name"] + " " + this["last name"];
    },
    set fullname(name) {
      let parts = name.split(" ");
      this["first name"] = parts[0];
      this["last name"] = parts[1];
    }
  };
  
  // Using the getter
  console.log(person["full name"]);  // Output: John Doe
  
  // Using the setter
  person[fullname] = "Jane Smith";
  
  console.log(person["first name"]);  // Output: Jane
  console.log(person["last name"]);   // Output: Smith
  console.log(person["full name"]);   // Output: Jane Smith

