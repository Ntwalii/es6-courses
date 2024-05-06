let weak=new WeakMap();
let obj1={
    a:1
}
let obj2={
    a:1
}
weak.set(obj1,"Hello")
weak.set(obj2,"Hello")

console.log(weak.has(obj1))
console.log(weak.has(obj2))
console.log(weak.get(obj1))