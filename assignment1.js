
//dynamic programming function to return an array of Fibonacci numbers
function fibs(n){
    let result = [];
    let a = 0;
    let b = 1;
    result.push(a, b);
    for (let i = 3; i <= n; i++){
        let c = a + b;
        a = b;
        b = c;
        result.push(b)
    }
    return result
}
console.log(fibs(8))

// recursion method to return the array of fibonacci numbers
function fibsRec(n){
    if (n <= 0){
        return [];
    }
    else if (n === 1){
        return [0]
    }
    else if (n === 2){
        return [0, 1];
    }
    else {
        let seq = fibsRec(n-1);
        seq.push(seq[n-2] + seq[n-3]);
        return seq;
    }
    
}
console.log(fibsRec(8))