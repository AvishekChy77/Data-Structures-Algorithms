function insertionSort(arr){
for (let i = 1; i < array.length; i++) {
    let numberToInsert = array[i];
    let j = i-1
    while (j>=0 && arr[j] > numberToInsert) {
        arr[j+1] = arr[j]
        j -= 1
    }
    arr[j+1] = numberToInsert
}
}

// Big O: O(n^2)
const array = [5, -4, 6, 9, 12, 3, 20]
insertionSort(array)
console.log(array);