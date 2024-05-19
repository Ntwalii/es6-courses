// function * printer(){
//     let x=yield
//     console.log(x)
//     let arr=[x,2,3,4,5,6];
//     for(const ar of arr){
//         yield ar
//     }
// }

// let big=printer()

// // big.next();
// // console.log(big.next("Aubin"))
// // console.log(big.next())
// // console.log(big.next())

// big.next(2)
// for(let bi of big){
//     console.log(bi)
// }

// // function* displayResponse() {
// //     const x=yield;
// //     console.log(x);
// //     let arr=[1,2,3,4,5,6];
// //     for(const ar of arr){
// //         yield ar
// //     }
// // }

// // const iterator = displayResponse();

// // iterator.next(); 
// // console.log(iterator.next("Hello")); 

function * generator(){
    let x=yield;
    console.log(x);
}

console.log(generator().next(2))
console.log(generator().next())
