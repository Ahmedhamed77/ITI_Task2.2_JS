//what is Palindrome ??
// string is said to be a palindrome if the string read from left to right is equal to the string read from right to left
// 1- the empty string is a palindrome;
// 2- a string constituted only by a single character is a palindrome;
// 3- a string c s d is a palindrome, if s is a palindrome and c is a character equal to d;


// how to check if string is palindrome ?
// so it's a simple way we just reverse the string and compare it to the original one, but it is not the most efficient one.

function getPalindrome() {
    let palindromeValue = prompt("enter your string");

    let isPalindrome = checkPalindrome(palindromeValue);

    document.getElementById('res').value = isPalindrome;
}


function checkPalindrome(str){
    let reversed = str.split("").reverse().join("")
    return str === reversed
}



window.addEventListener('load',function () {
    getPalindrome();
})