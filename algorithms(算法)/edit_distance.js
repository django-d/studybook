function editDistance(text1, text2) {
  const m = text1.length;
  const n = text2.length;
  // 定义dp[i][j]为text1再i的范围内核text2再j的范围内最小操作次数
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

  // 初始化
  for (let i = 1; i <= m; i++) {
    dp[i][0] = dp[i - 1][0] + 1;
  }
  for (let i = 1; i <= n; i++) {
    dp[0][i] = dp[0][i - 1] + 1;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i] === text2[j]) {
        // 啥也不用干
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // dp[i][j] = dp[i-1][j-1] + 1 替换操作
        // dp[i][j] = dp[]
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;
      }
    }
  }
  return dp[m][n];
}
