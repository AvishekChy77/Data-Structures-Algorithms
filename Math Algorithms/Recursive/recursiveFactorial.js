function recFact(n){
    if(n===0){
        return 1
    }
    return n* recFact(n-1)
}

// Big(O): O(n)
console.log(recFact(5));
console.log(recFact(7));
console.log(recFact(10));