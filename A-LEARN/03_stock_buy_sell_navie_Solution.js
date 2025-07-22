

/**
 * This function takes an array of stock prices and returns the maximum possible profit that can be made with one buy and one sell transaction.
 *
 * @param {number[]} prices - An array of stock prices in the order they were observed.
 * @returns {number} The maximum possible profit.
 */
function maxProfit(prices) {
    let maxProfit = 0;
    let n = prices.length;

    for (let i = 0; i < n; i++) {

        for (let j = i + 1; j < n; j++) {

            let profit = prices[j] - prices[i];

            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }

    }
    return maxProfit;
}


console.log(maxProfit([7, 6, 4, 3, 1])); // Output: 0 (No profit)
console.log(maxProfit([2, 4, 1]));       // Output: 2