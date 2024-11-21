function removeDuplicates(numbers: number[]): number[]{
    let newArray: number[] = [];
    numbers.map(num => !newArray.includes(num)? newArray.push(num) : "")
    return newArray;
}