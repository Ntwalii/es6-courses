// 'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
//                True       True       False      True       False
                   
//         --> ['a','b','d']
    
// 'DIGEST'--> ['D','I','E','T']
function moreZeros(s){
  let count;
  let result=[];
    s.split("").forEach(element => {
        count=0;
        element.charCodeAt(0).toString(2).split("").forEach((elt)=>{
            if(elt==0){
                count++
            }
            if(count>(element.charCodeAt(0).toString(2).length/2)){
                
                result.includes(element)?"":result.push(element)
            }
        }
        
        )
  });

  return result;
}

console.log(moreZeros("DIGEST"));