export function longestCommonSubsequence(text1, text2) {
  const [m, n] = [text1.length, text2.length];
  // 创建二维动态规划表
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  let maxCount = 1;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
      maxCount = Math.max(maxCount, dp[i][j]);
    }
  }
  return maxCount;
}
longestCommonSubsequence("abcd", "abcde");
