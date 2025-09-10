function fibs(n, memo = [0, 1]) {
    if (n < memo.length) return { result: memo[n], arr: memo };

    const prev1 = fibs(n - 1, memo).result;
    const prev2 = fibs(n - 2, memo).result;

    memo[n] = prev1 + prev2;
    return { result: memo[n], arr: memo };
}

console.log(fibs(9).arr); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]