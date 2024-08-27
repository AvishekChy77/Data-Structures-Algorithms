function mergeSort(arr) {
    if(arr.length < 2 ){
        return arr
    }
    
    const target = Math.floor(arr.length/2)
    const leftArray = arr.slice(0, target)
    const rightArray = arr.slice(target)

    return merge(mergeSort(leftArray), mergeSort(rightArray))
    
}

function merge(leftArray, rightArray) {
    const sortedArray = []
    while (leftArray.length && rightArray.length) {
        if (leftArray[0] > rightArray[0]) {
            sortedArray.push(rightArray.shift())
        }else{
            sortedArray.push(leftArray.shift())
        }
    }
    return [...sortedArray, ...leftArray, ...rightArray]
}

// Big O: O(nlog(n))
const array = [5, -4, 6, 9, 120, 3, 20]
let a = mergeSort(array)
console.log(a);