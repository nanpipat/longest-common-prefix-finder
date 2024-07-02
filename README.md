# Longest Common Prefix Finder

This Node.js project implements a function to find the longest common prefix string amongst an array of strings.

## Problem Description

Given an array of strings, the task is to find the longest common prefix (LCP) amongst all strings. If there is no common prefix, the function returns an empty string.

### Examples

Example 1:

```javascript
Input: ["flower","flow","flight"]
Output: "fl"
Explanation: The longest common prefix among the strings "flower", "flow", and "flight" is "fl".
```

Example 2:

```javascript
Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the strings "dog", "racecar", and "car", hence the output is an empty string.
```

## Installation and Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/longest-common-prefix.git
   cd longest-common-prefix
   ```

2. Install dependencies (none required for this project):

   ```bash
   # No dependencies needed
   ```

3. Run the example:

   ```bash
   node index.js
   ```

   This will execute the function with example inputs and print the results.

4. Modify `index.js` or integrate `longestCommonPrefix` function into your own project as needed.

## Function Description

### `longestCommonPrefix(strs)`

- **Parameters**:

  - `strs`: An array of strings for which we need to find the longest common prefix.

- **Returns**:
  - Returns the longest common prefix among the input strings as a string. If no common prefix exists, returns an empty string `""`.

## Notes

- The function handles edge cases such as an empty input array by returning an empty string.
- The implementation assumes all input strings consist only of lowercase English letters, as per the problem constraints.
