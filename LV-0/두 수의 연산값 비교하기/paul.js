function solution(a, b) {
    let result1 = String(a) + String(b);
    let result2 = 2*Number(String(a))*Number(String(b));

    return result1 == result2 ? result1 : Math.max(result1, result2);

}