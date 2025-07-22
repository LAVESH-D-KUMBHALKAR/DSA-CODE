function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        // Track the lowest price so far
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } 
        // Calculate profit if sold today and update maxProfit if it's better
        else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit;
}


console.log(maxProfit([7,1,5,3,6,4]));