// Given a staircase of n steps, count the number of distinct ways to climb to the top. You can either climb 1 step or 2 steps at a time.

// If you have to climb to step n, you can only climb from step n-1 or n-2

function climbingStaircase (n){
    let noOfways = [1,2]
    
    for (let i = 2; i < n; i++) {

        noOfways[i] = noOfways[i-1] + noOfways[i-2]
        
    }

    return noOfways[n-1]
}

// Big O: O(n)
console.log(climbingStaircase(1));
console.log(climbingStaircase(2));
console.log(climbingStaircase(3));
console.log(climbingStaircase(4));
console.log(climbingStaircase(5));
console.log(climbingStaircase(6));
console.log(climbingStaircase(7));