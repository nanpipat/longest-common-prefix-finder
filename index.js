// index.js

function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return "";
  }

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    while (
      j < prefix.length &&
      j < strs[i].length &&
      prefix[j] === strs[i][j]
    ) {
      j++;
    }
    prefix = prefix.substring(0, j);

    if (prefix === "") {
      return "";
    }
  }

  return prefix;
}

// Example usage:
const example1 = ["flower", "flow", "flight"];
const example2 = ["dog", "racecar", "car"];

console.log(
  "Longest common prefix for example 1:",
  longestCommonPrefix(example1)
); // Output: "fl"
console.log(
  "Longest common prefix for example 2:",
  longestCommonPrefix(example2)
); // Output: ""

module.exports = longestCommonPrefix;
