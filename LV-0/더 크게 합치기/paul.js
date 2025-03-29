function solution(a, b) {
    let result1 = String(a) + String(b);
    let result2 = String(b) + String(a);
    return result1 > result2 ? Number(result1) : Number(result2);
}