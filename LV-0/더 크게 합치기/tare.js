function solution(a, b) {
  const strA = a.toString();
  const strB = b.toString();
  const ab = strA+strB;
  const ba = strB+strA;
  return ab < ba ? Number(ba) : Number(ab) || Number(ab); 
}