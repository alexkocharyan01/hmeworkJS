function fibonacci(n){
    if(n < 2) return n;
    if(n < 0) return 0;
    fibonacci.cache = fibonacci.cache || [];
    if(!fibonacci.cache[n]){
        fibonacci.cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
    }
    return fibonacci.cache[n];
}

console.log(fibonacci(6));
