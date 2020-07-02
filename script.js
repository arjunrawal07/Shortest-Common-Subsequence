/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

//Define str1, str2
//Find all possible combinations of str1 and str2 using the letters of each
//Loop through each combination
//removing letters that would return str1 and str2
//somehow compare the numbers of letters removed from each combo to each other to find the minimum (or fewest) number of letters it would take to reach str1 and str2 from the combination
//return the combination associated with that number of letters removed

let str1 = "abac";
let str2 = "cab";
let baseArray = ["a", "a", "a", "b", "c"];

var shortestCommonSupersequence = function (str1, str2) {
  let baseStr = str1.concat(str2);
  let baseArray = baseStr.split("");
};
