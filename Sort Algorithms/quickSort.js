function quickSort(arr) {
    if(arr.length < 2 ){
        return arr
    }

    const target = arr[0];
    let leftArray = []
    let rightArray = []
    for (let i = 1; i < arr.length; i++) {
        
        if (arr[i] < target){
            leftArray.push(arr[i])
        }
        if (arr[i] > target){
            rightArray.push(arr[i])
        }
        
    }

    return [...quickSort(leftArray), target, ...quickSort(rightArray)]
    
}

// Big O(worst case:already sorted array): O(n^2)
// avg case: O(nlog(n))
const array = [5, -4, 6, 9, 120, 3, 20]
let a = quickSort(array)
console.log(a);