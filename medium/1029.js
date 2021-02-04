// 1029. Two City Scheduling
// A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti], the cost of flying the ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti.

// Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.

// Example 1:

// Input: costs = [[10,20],[30,200],[400,50],[30,20]]
// Output: 110
// Explanation: 
// The first person goes to city A for a cost of 10.
// The second person goes to city A for a cost of 30.
// The third person goes to city B for a cost of 50.
// The fourth person goes to city B for a cost of 20.

// The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.
// Example 2:

// Input: costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]
// Output: 1859
// Example 3:

// Input: costs = [[515,563],[451,713],[537,709],[343,819],[855,779],[457,60],[650,359],[631,42]]
// Output: 3086
 

// Constraints:

// 2 * n == costs.length
// 2 <= costs.length <= 100
// costs.length is even.
// 1 <= aCosti, bCosti <= 1000

var twoCitySchedCost = function(costs) {
    const diff = costs.map((prices, i) => {
        return [prices[0] - prices[1], i];
    })
   
    diff.sort((a, b) => a[0] - b[0]);
    
    let output = 0;
    for (let i = 0; i < diff.length/2; i++) {
        let index = diff[i][1];
        output += costs[index][0];
    }
    
    for (let j = diff.length/2; j < diff.length; j++) {
        let index = diff[j][1];
        output += costs[index][1];
    }
    
    return output;
    
};


// [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]

// [[-511, 0], [394, 1], [259, 2], [45, 3], [722, 4], [108, 5]]


// [0, 3, 5, 2, 1, 4]

// A = 259 + 184 + 577
// B = 54 + 667 + 118
