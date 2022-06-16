// regex is case sensitive so when Ninja is searched for in string
// nothing is returned, the i flag makes insensitive
// while the g flag stands for global and searches
// every match

console.log('basic flags');
const string = 'ninja asdfas Ninja';
console.log(string.match(/ninja/gi));

// patterns

console.log('character sets');
// character sets is way to match different chracters in a single position
const string1 = 'ninja ginja adfadf';

//match either n or g in the first position
// chracter sets don't need something after them
console.log(string1.match(/[ng]inja/gi));

//match all instance of a and f and h
console.log(string1.match(/[afh]/g));


// exclude sets
console.log('exclude sets');
const string2 = 'a000 b000 c000 p000 %000'
// match all except p000 and a000 exclude(^)
console.log(string2.match(/[^pa]000/g));

// range
console.log('Ranges')
const string3 = 'ainja, Ainja, Binja, Zinja, zinja 9inja 0inja';
// allvalues from a-z and A-Z followed by inja is matched
console.log(string3.match(/[a-zA-z]inja/g));
// all natural numbers from 0-9 followed by inja in matched
console.log(string3.match(/[0-9]inja/g));

//repeating characters
console.log('repeating characters')
const number = '0423423430 089458230458, 9890343244'
// + sign means at  least 1 times but can go up to unlimited times
console.log(number.match(/[0-9]+/g))
// curly brace states how many times the character sets should repeat
// so 10 times means look for 0-9 at least 10 times
console.log(number.match(/[0-9]{10}/g))
// between 10-12 numbers
console.log(number.match(/[0-9]{10,12}/g))
// match at least up to 12 characters so 10 characters don't match
console.log(number.match(/[0-9]{12,}/g))

//meta characters
console.log('meta characters');
//  \d same as [0-9]
// \w match world character a-z, A-Z, 0-9 and _
// \s spaces and tabs
// \t matches tab

const string4 = '   the quick brown box jumped over the 38 lazy dog';
console.log(string4.match(/\d/gi));
console.log(string4.match(/\w/gi));
console.log(string4.match(/\s/gi));

// first is digit second is space and third must be some word character
const string5 = '3 adfs 33klads'
console.log(string5.match(/\d\s\w/g))

// 2 digits a space and 6 letter word
const string6 = '10 avenue';
console.log(string6.match(/\d{2}\s\w{6}/g))


// special characters
console.log('special characters');
// '+' one or more character
// '\' the escape character
// '[]' character set
// '[^]' negate character set
// '?' zero or one quantifier - either a zero or one time
// '.' any character whatsoever - except the new line chracter
// '*' the zero or more quantifer

const string7 = 'the quick brown fox jumped over the lazy dog'
// both a and an matches, a-z to can appear zero to one time
console.log(string7.match(/a[a-z]?/g)); 
// any character
console.log(string7.match(/.+/g))
// a-z after a can appear as many times as it likes
console.log(string7.match(/a[a-z]*/g))

// starting and ending patterns
// '^' outside of the character set means it must be at the start
// '$' five letter must be at the end as well

const string8 = 'hello';
//match - just match a five letter word
console.log(string8.match(/^[a-z]{5}$/g));
// no match
console.log(string7.match(/^[a-z]{5}$/g));
