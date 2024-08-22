function bs (arr, target){
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex+rightIndex)/2)
        if(arr[middleIndex] === target){
            return middleIndex
        }
        if(arr[middleIndex] > target){
            rightIndex = middleIndex - 1
        }
        if (arr[middleIndex] < target){
            leftIndex = middleIndex + 1
        }
    }
    return -1
}
// big-O = O(log(n))
console.log(bs([4,12,15,56], 56));
