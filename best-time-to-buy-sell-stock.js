/*
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

/*
|
|                  x
|
|             x                x
|                         x        x     
|
|   x                                          x
|        x       
|                                        x
+---------------------------------------------------------
         ^                               ^
         this is a potential buy price   |
         "lock it in" and look for the maximum profit
                                         |
                      this is another potential buy price
                      because it is LOWER than the previous
                      "lock it in" and look for the maximum profit
*/

const maxProfit = (prices) => {
  // We will update the buy price only when we encounter a price
  // that is lower than the current buy price
  let buyPrice = Infinity;

  let profit = 0;

  for (const price of prices) {
    buyPrice = Math.min(buyPrice, price);

    // Calculate the profit if we were to sell at this pricee
    const potentialProfit = price - buyPrice;
    profit = Math.max(profit, potentialProfit);
  }

  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 1, 5, 3, 6, 4, 0, 10])); // 10
console.log(maxProfit([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])); // 0
