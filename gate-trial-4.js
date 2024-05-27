// const longFormatData = [     { id: 1, name: "Alice", age: 30 },
//                               { id: 2, name: "Bob", age: 25 },
//                               { id: 3, name: "Charlie", age: 35 } 
//                         ]; 

//          const keys = ["id", "name"]; 

//          // const wideFormatData = pivotLongToWide(longFormatData, keys); 
//          // console.log(wideFormatData); 
//         //  output: {   id: [ 1, 2, 3 ],   name: [ 'Alice', 'Bob', 'Charlie' ] }

//         const pivotLongWide=(obj1,arr)=>{
//             let result={}
//             for(const ar of arr){
//                 for(let obj of obj1){
//                     if(ar in obj){
//                     result[ar]=[obj[id]]
//                     }
//                 }
//             }
//         }




// Question II
// Create a function that performs a JOIN operation on
//  two arrays of objects, based on a common property,
//   and returns a new array of merged objects.
const employees = [
    { id: 1, name: 'John', department: 'IT' },
    { id: 2, name: 'Jane', department: 'HR' },
    { id: 3, name: 'Doe', department: 'IT' }
];

const salaries = [
    { id: 1, salary: 50000 },
    { id: 2, salary: 60000 },
    { id: 4, salary: 550000 }
];


const sqlJoin=(arr1,arr2)=>{
    let result={}
    for(let obj1 of arr1){
        for(obj1 of arr2){
            
        }
    }
}




// //const result = sqlJoin(employees, salaries, 'id');
// //console.log(result);

// output: [
//        {id: 1, name: 'John', department: 'IT', salary: 50000},
//        {id: 2, name: 'Jane', department: 'HR', salary: 60000}
// ]