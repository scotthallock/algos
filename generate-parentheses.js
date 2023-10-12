/*
https://leetcode.com/problems/generate-parentheses/description/

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Constraints:
1 <= n <= 8

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
*/

/*
DFS solution
*/
const generateParenthesis = (n) => {
  const result = [];

  const generate = (str, left, right) => {
    // left: the number of left parens we still need to add
    // right: the number of right parens we still need to add
    if (left === 0 && right === 0) {
      return result.push(str);
    }

    // If we still need to add a left parens, add one
    if (left > 0) {
      generate(str + '(', left - 1, right);
    }

    // If we still need to add a right parens, add one
    //
    // A right parenthesis can only be added if there are
    // currently less right parens than left parens
    if (right > 0 && right > left) {
      generate(str + ')', left, right - 1);
    }
  };

  generate('', n, n);

  return result;
};

console.log(generateParenthesis(4));
