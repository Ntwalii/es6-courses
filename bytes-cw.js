function dataReverse(data) {
    let arr=[];
 for(let i=0;i<=data.length;i=i+8){
    arr.push(...data.slice(i,i+8))
    arr.push(",")

 }
return arr.join("").split(",").filter(Boolean).reverse().join("").split("").map(elt=>Number(elt))
  }

  console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]));






















