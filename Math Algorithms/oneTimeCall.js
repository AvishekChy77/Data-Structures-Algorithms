// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.

const once = function(fn) {
    let call = false
    return function(...args){
        if(!call){
            call = true
            return fn(...args)
        }else {
            return undefined
        }
        
    }
};



/**
 * Big O: O(1)
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */