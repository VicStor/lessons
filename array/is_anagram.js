// Given two strings,
// check to see if they are anagrams.
// An anagram is when the two strings can be written
// using the exact same letters
// (so you can just rearrange the letters to get a different phrase or word).
//
// For example:
// "public relations" is an anagram of "crap built on lies."
//
// "clint eastwood" is an anagram of "old west action"



// 1)naïve - O(n**2), compare each to each
// 1)sort - O(n lg n), compare

function isAnagram(str1, str2) { // XOR O(n) time, O(1) memory
  let bitVector = 0;
  const str = str1.concat(str2);

  [].forEach.call(str, (char) => {
    if(char === ' ') return; // and other non letters chars
    bitVector ^= char.toLowerCase().charCodeAt(0);
  });

  if(bitVector === 0) return true;
  return false;
}

// const str1 = "public relations";
// const str2 = "crap built on lies";

// const str1 = "clint eastwood";
// const str2 = "old west action";

const str1 = "clint eastwood";
const str2 = "old wwest action";

const res = isAnagram(str1, str2);

console.log(res);
