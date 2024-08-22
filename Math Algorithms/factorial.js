function factorial(n){
    if(n<0){
        return false
    }
    let res = 1
    while (n>0){
        res *= n
        n-=1
    }
    return res
}

// Big(O): O(n)
console.log(factorial(5));
console.log(factorial(7));
console.log(factorial(10));