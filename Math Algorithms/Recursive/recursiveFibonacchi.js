// find the nth number in the fibonacci sequence

function recursiveFibo (n){

    if(n < 2){
        return n
    }

    return recursiveFibo(n-1) + recursiveFibo(n-2)
}

// Big O: O(2^(n-1)) ; this is the worst time complexity, better to solve with iteration
console.log(recursiveFibo(5));