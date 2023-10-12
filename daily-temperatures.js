/*
https://leetcode.com/problems/daily-temperatures/description/

Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

Example 1:
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

Example 2:
Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]

Example 3:
Input: temperatures = [30,60,90]
Output: [1,1,0]
*/

/*
Brute-force solution
*/
const dailyTemperatures = (temps) => {
  const result = [];
  // Iterate through each day
  for (let i = 0; i < temps.length; i++) {
    // Iterate through each day after the initial day
    let j = i + 1;
    let waitTime = 1;
    // Look for a warmer day or reach the end of the array
    while (temps[i] >= temps[j] && j < temps.length) {
      waitTime++;
      j++;
    }
    result.push(j === temps.length ? 0 : waitTime);
  }
  return result;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
