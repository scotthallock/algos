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
// const dailyTemperatures = (temps) => {
//   const result = [];
//   // Iterate through each day
//   for (let i = 0; i < temps.length; i++) {
//     // Iterate through each day after the initial day
//     let j = i + 1;
//     let waitTime = 1;
//     // Look for a warmer day or reach the end of the array
//     while (temps[i] >= temps[j] && j < temps.length) {
//       waitTime++;
//       j++;
//     }
//     result.push(j === temps.length ? 0 : waitTime);
//   }
//   return result;
// };

const dailyTemperatures = (temps) => {
  // Create an n-sized array filled with 0s
  const answer = Array(temps.length).fill(0);

  // Create a stack that will hold days
  // such that the temperatures are in decreasing order
  const stack = [];

  for (let currDay = 0; currDay < temps.length; currDay++) {
    const currTemp = temps[currDay];

    while (stack.length && temps[stack.at(-1)] < currTemp) {
      // The previous day (on the stack) temperature is less than
      // the current temperature
      //
      // This means we have an answer for the previous day!
      // The wait time for prevDay is equal to currDay - prevDay
      const prevDay = stack.pop();
      answer[prevDay] = currDay - prevDay;
    }

    // Add the current day on the stack
    stack.push(currDay);
  }

  return answer;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
