/**
 * DP를 이용한 피보나치 수열 계산
 * @param {number} n - 계산할 피보나치 수열의 인덱스
 * @returns {number} n번째 피보나치 수
 */
const fibonacciDP = (n) => {
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

/**
 * 재귀를 이용한 피보나치 수열 계산
 * @param {number} n - 계산할 피보나치 수열의 인덱스 
 * @returns {number} n번째 피보나치 수
 */
const fibonacciRecursive = (n) => {
  if (n <= 1) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};

// 테스트 코드
const n = 10;
console.log(`DP 방식: ${fibonacciDP(n)}`);
console.log(`재귀 방식: ${fibonacciRecursive(n)}`);

