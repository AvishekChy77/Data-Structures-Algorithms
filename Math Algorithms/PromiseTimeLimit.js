// You have an asynchronous function that might take some time to complete.
// You want to set a maximum time limit (t milliseconds) for the function to finish its work.
// If the function finishes its work within the time limit, return the result as usual.
// If the function takes too long (exceeds the time limit), return a message saying "Time Limit Exceeded".

const timeLimit = function(fn, t) {
    
    return async function(...args) {
        const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);
    });

    // Race between the function and the timeout
    return Promise.race([fn(...args), timeoutPromise]);
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */