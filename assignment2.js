
let a = [5, 2, 1, 4, 6, 3, 8, 10, 9, 7]

// functions that using recursion and the merge sort algorithm to sort an list 
// of numbers from smallest to highest
function mergeSort(input){
    // base case for recursion
    if (input.length <= 1){
        return input;
    }
    else {
        const mid = Math.floor(input.length/2);
        const left = input.slice(0, mid);
        const right = input.slice(mid);
        // here is where the recursion occurs
        const sortedLeft = mergeSort(left);
        const sortedRight = mergeSort(right);
        // calling the merge function that arranges the result array in 
        // the correct order
        return merge(sortedLeft, sortedRight);
    }
}

// function to order a new result array in specific order
function merge(leftInput, rightInput){
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftInput.length && rightIndex < rightInput.length){
        if (leftInput[leftIndex] < rightInput[rightIndex]){
            result.push(leftInput[leftIndex]);
            leftIndex++;
        }
        else {
            result.push(rightInput[rightIndex]);
            rightIndex++
        }
    }

    result = result.concat(leftInput.slice(leftIndex));
    result = result.concat(rightInput.slice(rightIndex));

    return result;
}

console.log(mergeSort(a))