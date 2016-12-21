// Given an integer array,
// output all the unique pairs that sum up to a specific value k.

function findUniq(arr, summ) {
  let target;
  let hash = {};
  let results = [];

  arr.forEach((current) => {
    target = summ - current;

    if(hash[+target]) { // (+target in hash && hash[+target] !== false)
      hash[+target] = false;
      hash[+current] = false;
      results.push([target, current]);
      return;
    }

    if(hash[+current] !== false) {
      hash[+current] = true
    }
  });

  return results;
}
const arr1 = [1,2,3,2,1,3,3,1,2]; //summ - 4 //2
const arr2 = [1,9,2,8,3,7,4,6,5,5,13,14,11,13,-1]; //summ - 10 //6


const res = findUniq(arr1, 4);

console.log(res.length);
