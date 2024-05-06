// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
let temp=[];
function accum(string){
    string=string.toLowerCase();
    string=string.split("")
    let placeholder=""
    for(let i=0;i<string.length;i++){
        for(let j=0;j<=i;j++){
            if(j!==0){
            placeholder+=string[i];}
            else{
                placeholder+=string[i].toUpperCase();
            }
        }
      temp.push(placeholder) 
      placeholder=""
       
    }
    

    return temp.join('-');
}

console.log(accum("ZpglnRxqenU"))