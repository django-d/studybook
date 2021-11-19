// 青蛙爬楼梯每次都可以怕1-2层
function frogUpstair(n) {
  // 定义dp[i]为青蛙到达第i层有dp[i]种方法

  const dp = new Array(n + 1).fill(0);

  for (let i = 0; i <= n; i++) {
    if (n <= 2) dp[i] = i;
    else {
      dp[i] = dp[i - 1] + dp[i - 2];
    }
  }

  return dp[n];
}
