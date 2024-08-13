function twoSum(nums, target) {
  let numObj = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (numObj.hasOwnProperty(complement)) {
      return [numObj[complement], i];
    }
    numObj[nums[i]] = i;
  }
}
