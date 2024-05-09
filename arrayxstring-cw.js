function makesTheSentence(characterArray, sentenceString) {
 let newArr=[];
 for (elt of characterArray){
    if(elt!==" "){
        newArr.push(elt)
    }
 }

 if(characterArray.length===newArr.length){
    let x=characterArray.sort((a,b)=>a.charCodeAt(0)-b.charCodeAt(0))
    let y=characterArray.sort((a,b)=>a.charCodeAt(0)-b.charCodeAt(0))
    return x===y
 }
 else return false

 
 
  
}

console.log(makesTheSentence(['D', 'u', 'c', 'k', 's', 'q', 'u', 'a', 'c', 'k', '.'], "Ducks quack."))
