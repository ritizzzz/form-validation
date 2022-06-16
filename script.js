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

