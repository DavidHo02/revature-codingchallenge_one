// console.log('Hello World!')

function isPalindrome(word) {
    // remove all capitalization
    word = word.toLowerCase();

    // keep only letters, digits, and underscores
    word = word.replaceAll(/[^\w]/g, '');

    //console.log(word);
    //console.log(word.length);

    /*
    Now check that word is a palindrome by having a left and right pointer
    checking each letter to see if they are the same
    */
    let l = 0;
    let r = word.length - 1;
    while(l < r) {
        if(word.at(l) != word.at(r)) {
            console.log(`${word[l]}, ${word[r]}`)
            return false;
        }
        l++; r--;
    }

    return true;
}

console.log(isPalindrome('Racecar!'));
console.log(isPalindrome('A man a plan a canal Panama'));