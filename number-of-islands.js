// Link: https://leetcode.com/problems/number-of-islands/
// Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.
//
//     An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
//
//
//
//     Example 1:
//
// Input: grid = [
//     ["1","1","1","1","0"],
//     ["1","1","0","1","0"],
//     ["1","1","0","0","0"],
//     ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:
//
// Input: grid = [
//     ["1","1","0","0","0"],
//     ["1","1","0","0","0"],
//     ["0","0","1","0","0"],
//     ["0","0","0","1","1"]
// ]
// Output: 3
//
//
// Constraints:
//
//     m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(!grid || !grid[0]){
        return 0;
    }
    const convertLandToWater = (i,j) => {
        if(grid[i] == undefined || grid[i][j] == undefined || grid[i][j] == "0"){
            return;
        }
        grid[i][j]="0";
        convertLandToWater(i+1,j);
        convertLandToWater(i,j +1);
        convertLandToWater(i-1,j);
        convertLandToWater(i,j -1);
    }

    let counter = 0;
    for (let i = 0; i < grid.length ; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] == "1"){
                counter++;
                convertLandToWater(i,j);
                //console.log(grid);
            }

        }
    }
    return counter;
};

const island = [["1","1","0","0","0"],
                ["1","1","0","0","0"],
                ["0","0","1","0","0"],
                ["0","0","0","1","1"]];
console.log('input');
console.log((island));

console.log(numIslands(island));


