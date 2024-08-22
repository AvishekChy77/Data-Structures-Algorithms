
function recursiveBS(arr, target){
    return search(arr, target, 0, arr.length-1)
}

function search (arr, target, leftIndex, rightIndex){
    let leftIndex = 0
    let rightIndex = arr.length - 1
    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex+rightIndex)/2)
        if(arr[middleIndex] === target){
            return middleIndex
        }
        if(arr[middleIndex] > target){
            return search(arr, target, leftIndex, middleIndex-1)
        }
        if (arr[middleIndex] < target){
            return search(arr, target, middleIndex+1, rightIndex)
        }
    }
    return -1
}

// big-O = O(log(n))
console.log(recursiveBS([4,12,15,56], 56));