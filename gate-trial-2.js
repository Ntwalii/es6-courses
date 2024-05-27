// Write a function that takes an object as input 
// and returns a new object with all the key-value 
// pairs reversed (keys become values and values become keys)

const originalObj = {aa: "1", bf: "3", cq: "5"};


let reverseObject=(obj)=>{

    let result={};
    let keys=Object.values(obj)
    let values=Object.keys(obj)

    for(let key of keys){
       
            if(result[key]){
                break;
            }
            result[key]=value;
        }
    }
    return result;
}

const reversedObj = reverseObject(originalObj);
console.log(reversedObj); 
// output: {"1": 'aa', "3": 'bf', "5": 'cq'} // Expected output


