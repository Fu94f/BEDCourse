//SWAP PLACES

const swap = <T> (item1:T, item2:T): T[] =>{
    return [item1, item2].reverse();
}

console.log (swap("hello", "hi"));
console.log (swap(1, 2));
