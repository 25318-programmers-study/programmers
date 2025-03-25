function solution(a, b) {
    var num1 = Number(`${a}${b}`);
    var num2 = Number(`${b}${a}`); 
    return Math.max(num1, num2);
}

console.log(solution(3, 4)); 