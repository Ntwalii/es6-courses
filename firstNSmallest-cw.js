

// Array	        N	Expected
// [1, 2, 3, 4, 5]	3	[1, 2, 3]
// [5, 4, 3, 2, 1]	3	[3, 2, 1]
// [1, 2, 3, 4, 1]	3	[1, 2, 1]
// [1, 2, 3, -4, 0]	3	[1, -4, 0]
// [1, 2, 3, 4, 5]	0	[]

function firstNSmallest(array, n){
let temp=[...array];
let biggest;
if(n===0){
    return [];
}
while(array.length>n){
    for(let arr in temp){
        if(array.length===n){
            break;
     }
    biggest=temp.sort((a,b)=>b-a)[0];
    console.log(biggest);
    if(biggest===temp[arr]){
        temp.splice(arr,1);
        array.splice(array.lastIndexOf(biggest),1)
        count++
        break;
    }}

}
return array;
}

console.log(firstNSmallest([2,1,2,3,4,2],2));