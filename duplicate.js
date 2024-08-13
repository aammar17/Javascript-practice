function findDuplicates(nums) {
  const numCounts = {};

  for (let num of nums) {
    numCounts[num] = (numCounts[num] || 0) + 1;
  }
  const duplicates = [];

  for (let key in numCounts) {
    if (numCounts[key] > 1) {
      duplicates.push(Number(key));
    }
  }
  return duplicates;
}
