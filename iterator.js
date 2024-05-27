const digits = {
    a:1,
    b:2,
    c:3,
    [Symbol.iterator](){
        return {
            next(){
                
            }
        }
    }
}

const arrayIterator = digits[Symbol.iterator]();

for(const arr of arrayIterator){
    console.log(arr)
}

// console.log(arrayIterator.next());
// console.log(arrayIterator.next());
// console.log(arrayIterator.next());
// console.log(arrayIterator.next());
// console.log(arrayIterator.next());
// console.log(arrayIterator.next());
// console.log(arrayIterator.next());
// console.log(arrayIterator.next());
// console.log(arrayIterator.next());
// console.log(arrayIterator.next());
