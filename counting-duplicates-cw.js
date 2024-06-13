function duplicateCount(text){
text=text.toLowerCase().split("")
let duplicates=0;
let newSet=new Set(text);
newSet.forEach(elt=>{
    if(text.indexOf(elt)!==text.lastIndexOf(elt)){
        duplicates++
    }
})
return duplicates;
}

  console.log(duplicateCount("aaeevb"));