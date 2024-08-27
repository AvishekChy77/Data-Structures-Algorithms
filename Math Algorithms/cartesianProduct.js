function cartesianProduct(arr1, arr2){
    let result = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            result.push([arr1[i], arr2[j]])
        }
        
    }

    return result
}

// Big O: O(mn)
const cp = cartesianProduct([1,3,5] , [5,6,8,9])
console.log(cp);