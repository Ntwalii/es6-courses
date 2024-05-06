
let obj1={
    a:1
}
let obj2={
    a:1
}
let weak=new WeakSet([obj1,obj2]);


console.log(weak)