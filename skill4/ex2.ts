// FIRST IN LINE

const firstItem = <T>(array: T[]): T => {
    return array[0]!;
}

console.log(firstItem(["a", "b", "c"]));
console.log(firstItem([1, 2, 3]));