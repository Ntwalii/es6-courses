const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

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
