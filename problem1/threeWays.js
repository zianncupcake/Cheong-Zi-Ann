var sum_to_n_a = function(n) {
    return n * (n + 1) / 2
};

var sum_to_n_b = function(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};

var sum_to_n_c = function(n) {
    if (n <= 1) {
        return n;
    }
    return n + sum_to_n_c(n - 1);
};

console.log("sum_to_n_a = function(n)", sum_to_n_a(10) )
console.log("sum_to_n_b = function(n)", sum_to_n_a(10) )
console.log("sum_to_n_c = function(n)", sum_to_n_a(10) )
console.log("sum_to_n_a = function(n)", sum_to_n_a(5) )
console.log("sum_to_n_b = function(n)", sum_to_n_a(5) )
console.log("sum_to_n_c = function(n)", sum_to_n_a(5) )
console.log("sum_to_n_a = function(n)", sum_to_n_a(1) )
console.log("sum_to_n_b = function(n)", sum_to_n_a(1) )
console.log("sum_to_n_c = function(n)", sum_to_n_a(1) )
console.log("sum_to_n_a = function(n)", sum_to_n_a(0) )
console.log("sum_to_n_b = function(n)", sum_to_n_a(0) )
console.log("sum_to_n_c = function(n)", sum_to_n_a(0) )