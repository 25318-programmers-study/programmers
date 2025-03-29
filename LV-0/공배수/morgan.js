function solution(big ,n ,m){
    var result = 0;
    if(big % n === 0 && big % m === 0){
        return result = 1;
    }else{
        return result = 0;
    }
}
console.log(solution(55, 10, 5));

