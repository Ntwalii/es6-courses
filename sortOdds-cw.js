// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
function sortArray(array) {
    let sort,indexes=[]
array.forEach((element,index) => {
    if(element%2!==0){
        indexes.push(index);
        sort.push(element);
    } 
});
sort.sort((a,b)=>a-b);
indexes.forEach((element,index)=>{
    array.splice(element,1,sort[index])
})
return array;
  }




  console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));