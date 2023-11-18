const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  const developers=data.filter((person)=>person.profession === "developer");
  developers.forEach((developer)=>{
    console.log(`Name: ${developer.name}, Age: ${developer.age},Profession: ${developer.profession}`);
  });
}

// 2. Add Data
function addData() {
  const newdata={
    id:data.length+1,
    name: prompt("Enter the name:"),
    age: parseInt(prompt("Enter the age:")),
    profession: prompt("Enter the profession:"),
  };
  data.push(newdata);
  console.log("New data added:", newdata);
}

// 3. Remove Admins
function removeAdmin() {
  const removeAdmins=data.filter((person)=>person.profession !== "admin");
  console.log("After removing all the admins: ",removeAdmins)
}

// 4. Concatenate Array
function concatenateArray() {
  const dummyArray = [
    { id: 4, name: "R P", age: 24, profession: "developer", salary: 1500 },
    { id: 5, name: "G K", age: 25, profession: "scientist", salary: 1800 },
  ];
  const combinedArray = data.concat(dummyArray);
  console.log("Concatenated array:", combinedArray);
}

// 5. Average Age
function averageAge() {
  const totalAge = data.reduce((sum, person) => sum + person.age, 0);
  const average = totalAge / data.length;
  console.log("Average age:", average);
}

// 6. Age Check
function checkAgeAbove25() {
  const isAbove25 = data.some((person) => person.age > 25);
  console.log("Is there anyone above 25? ", isAbove25);
}

// 7. Unique Professions
function uniqueProfessions() {
  const professionsSet = new Set(data.map((person) => person.profession));
  const uniqueProfessions = Array.from(professionsSet);
  console.log("Unique professions:", uniqueProfessions);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log("Sorted array by age:", data);
}

// 9. Update Profession
function updateJohnsProfession() {
  const john = data.find((person) => person.name === "john");
  if (john) {
    john.profession = "manager";
    console.log("Updated John's profession:", john);
  } else {
    console.log("John not found in the array.");
  }
}

// 10. Profession Count
function getTotalProfessions() {
  let developerCount=0;
  let adminCount=0;
  for (let i = 0 ;i< data.length; i++){
  const profession = data[i].profession;
if(profession==="developer") {
  developerCount++;
}
else if(profession==="admin"){
  adminCount++;
} }
  console.log("Total Developers:", developerCount);
  console.log("Total Admins:", adminCount);
}
