let firstPromise=new Promise( (resolve,reject)=>{
    let x=1;
    let y=2;
    let z=false

    if(x&&y&&z){
        resolve("Created successfully");
    }
    else{
        reject("Promises are complicating")
    }
}
).then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.error(error)
})

let secondPromise=new Promise( (resolve,reject)=>{
    let x=0;

    if(x){
        resolve("Created successfully");
    }
    else{
        reject("Promises are complicating")
    }
}
).then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.error(error)
})

let thirdPromise=new Promise( (resolve,reject)=>{
    let x=1;

    if(x){
        resolve("Created successfully");
    }
    else{
        reject("Promises are complicating")
    }
}
).then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.error(error)
})

// console.log(Promise.race([firstPromise,secondPromise,thirdPromise]))
// console.log(Promise.all([firstPromise,secondPromise,thirdPromise]))
// console.log(Promise.allSettled([firstPromise,secondPromise,thirdPromise]))