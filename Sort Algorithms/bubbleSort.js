function bubbleSort (arr){
    let swapped
    do {
        swapped = false
        for (let i = 0; i < arr.length-1; i++) {
            if(arr[i+1] < arr[i]){
                const element = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] =element;
                swapped = true
            }
            
        }
        
    } while (swapped);
}

// Big-O: O(n^2)
const array = [5, -4, 6, 9, 12, 3, 20]
bubbleSort(array)
console.log(array);