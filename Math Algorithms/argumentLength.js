// Write a function argumentsLength that returns the count of arguments passed to it.

const argumentsLength = (...args) => {
    return [...args].length
};

// Big O: O(1)
argumentsLength(1, 2, 3); // 3