
/*
Replaces all but the last num of characters with the specified mask character.

Use String.prototype.slice() to grab the portion of the characters that 
will remain unmasked and use String.padStart() 
to fill the beginning of the string with the mask character up to the original length. 
Omit the second argument, num, to keep a default of 4 characters unmasked. If num is negative, 
the unmasked characters will be at the start of the string. 
Omit the third argument, mask, to use a default character of '*' for the mask.
*/

const mask = (cc, num = 4, mask = "*") => {
    // 最右侧 num 个字符不变，在其左侧填充 mask 直到长度等于原字符串长度
    return `${cc}`.slice(-num).padStart(`${cc}`.length, mask);
}

let res = mask("13123", 3, "$")
console.log(res)
res = mask("123123123fuck")
console.log(res);