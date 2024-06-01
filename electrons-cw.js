function atomicNumber(num){
 
    let arr=[];
    let temp=num;
    let currentShell;
    for(let i=1;i<=num;i++){
      currentShell=2*(i**2)
      if(temp===0){
        break;
      }
      else if(currentShell<=temp){
      arr.push(currentShell);
        temp-=currentShell
        }
      else{
        arr.push(temp);
        break;
      }
      
    }
    return arr;
  }
  console.log(atomicNumber(18));