
function isPalindromeString(str, left = 0, right = -1) {

    if (right == -1) {
        right = str.length - 1;
    }
    // console.log(right + ' count left >= right : ' + left + ' >= ' + right);

    if (left >= right) {
        return true;
    }

    // console.log('str[left] ' + str[left] + '   !==  ' + str[right] + ' str[right]')
    if (str[left] !== str[right]) {
        return false;
    }

    return isPalindromeString(str, left + 1, right - 1);

}


if (isPalindromeString("MadaM") == true) {
    console.log("is Palindrome");
} else {
    console.log("is not Palindrome");
}