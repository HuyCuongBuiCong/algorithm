// Links : https://leetcode.com/problems/unique-paths/

// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?

const initArray = (m,n) => {
    const arr = [];
    for(let i =0; i< n; i ++){
        arr.push(Array.from({length: m}, () => 1));
    }
    return arr;
};
// m: col
// n: row
var uniquePaths = function(m, n) {
    if(n == 1 || m == 1){
        return 1;
    }
    const result = initArray(m,n);
    for(let i = 1; i < n; i ++ ){
        for(let j = 1; j < m; j++){
            result[i][j] = result[i-1][j] + result[i][j-1]
        }
    }
    return result[n-1][m-1];
};


