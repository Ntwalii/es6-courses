let names= "Noah,Emily,Lyli,Lagon,Robert,Naoh,Samantha,Chloe,Jacob,Sophia,Logan,Emma,Addison,Abigail"
let weights= [5,2,3,4,2,2,1,3,6,4,4,1,1,2]
let n= 5
let ranked=[];
// The function should return: "PauL"
function rank(st, we, n) {
  if (st.length==""){
    return "No participants"
  }
  else if(n>st.split(",").length){
    return "Not enough participants"
  }
  let winnings={};
  let sum=0;
  st.split(",").forEach((element,index)=>{
    element.split("").forEach((elt)=>{
        sum+=((elt.toLowerCase().charCodeAt(0))-96)
    })
    sum=(sum+element.length)*we[index]
    if(!winnings.hasOwnProperty(sum)){
    winnings[sum]=element
    }
    else{
      winnings[sum]=[winnings[sum],element]
      winnings[sum]=[...winnings[sum]]
    }
    sum=0
  })

  
  let sortedArray=Object.keys(winnings).sort((a,b)=>b-a)
  sortedArray.forEach((a)=>{
    if(typeof winnings[a]==="string"){
      ranked.push(winnings[a])
    }
    else{

      ranked.push(...winnings[a].sort())
    }
  })

   return ranked;
}

console.log(rank(names, weights, n));