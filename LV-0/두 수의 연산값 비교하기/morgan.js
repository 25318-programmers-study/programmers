function solution(a, b) {
    var multiple = 2 * a * b;
    var num = `${a}${b}`
return Math.max(num,multiple);
    
}
console.log(solution(3,5));