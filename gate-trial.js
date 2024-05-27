// You are given an array of objects representing employees in 
// a company. Each object contains the following properties: name, age, a
// nd department. Your task is to write a function to calculate the average 
// age of each department's employees. The function should return an object 
// containing the department name and the summation of employees' age in each department.

// //Example Input:
const employees = [
{ name: 'Alice', age: 30, department: 'Engineering' },
{ name: 'Bob', age: 25, department: 'Marketing' },
{ name: 'Charlie', age: 35, department: 'Engineering' },
{ name: 'David', age: 40, department: 'HR' },
{ name: 'Eve', age: 28, department: 'Marketing' },
];

// // output:
// {
// Engineering: 65,
// Marketing: 53,
// HR: 40
// } // Expected output

let sumOfAges={}

for (const employee of employees){
if(!sumOfAges[employee.department]){
    sumOfAges[employee.department]=0;
}
sumOfAges[employee.department]=sumOfAges[employee.department]+employee.age;
}

console.log(sumOfAges);



