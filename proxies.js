let obj={
    name:"Aubin",
    age:21
}

let handler = {
    get(target, propName) {
        if (target[propName] === "Aubin") {
            return "Of course it's Aubin";
        } else {
            return "It's not Aubin, who cares.";
        }
    },
    set(target, propName, value) {
        if (propName === "grade") {
            value = `${value} grade`;
        }
        target[propName] = value;
        return true;
    }
};


let proxy= new Proxy(obj,handler);

console.log(proxy.name)
proxy.grade=3;
console.log(proxy)