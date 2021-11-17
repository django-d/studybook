import { longestCommonSubsequence } from "../longestCommonSubsequence";

describe("算法", () => {
  it("最长子序列", () => {
    const count = longestCommonSubsequence("abcd", "abcde");
    expect(count).toBe(4);
  });
});
