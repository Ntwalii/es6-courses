function * printer(){
    let x=yield
    console.log(x)
    let arr=[x,2,3,4,5,6];
    for(const ar of arr){
        yield ar
    }
}

let big=printer()

big.next();
console.log(big.next("Aubin"))
console.log(big.next())
console.log(big.next())

// function* displayResponse() {
//     const x=yield;
//     console.log(x);
//     let arr=[1,2,3,4,5,6];
//     for(const ar of arr){
//         yield ar
//     }
// }

// const iterator = displayResponse();

// iterator.next(); 
// console.log(iterator.next("Hello")); 
