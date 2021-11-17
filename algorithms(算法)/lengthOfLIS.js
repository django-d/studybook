function lengthOfLIS(nums) {
  const dp = new Array(nums.length).fill(1);
  let max = 1;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      // 表示nums[i]为最大递增数的最后一位
      if (nums[i] > nums[j]) {
        // 找出 i范围 内最大递增数 记录每个 dp[j] + 1 的值
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    max = Math.max(max, dp[i]);
  }
  return max;
}

const result = lengthOfLIS([4, 10, 4, 3, 8, 9]);

console.log(result);
