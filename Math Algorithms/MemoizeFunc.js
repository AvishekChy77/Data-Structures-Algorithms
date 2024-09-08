//Given a function fn, return a memoized version of that function.
//A memoized function is a function that will never be called twice with the same inputs. 
//Instead it will return a cached value.

function memoize(fn) {
    const cache = new Map();

    return function(...args) {
        const key = args.toString();
        if (cache.has(key)) {
            return cache.get(key);
        } else {
            const result = fn (...args);
            cache.set(key, result);
            return result
        }
    }
}


/** 
 * Big O: O(1)
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */