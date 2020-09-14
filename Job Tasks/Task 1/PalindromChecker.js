/**
 * input: "A mene tu, ni minute nema"
 * output: “Palindrom”
 *input: "Trka automobila"
 * output: “Nije palindrom”
 * 
 */

/**
 * @author Marko Golemovic
 * @since 14.09.2020
 * @version 1.0
 * @desription: palindrom
 */


function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}
palindrome("A mene tu, ni minute nema");