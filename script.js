// regex is case sensitive so when Ninja is searched for in string
// nothing is returned, the i flag makes insensitive
// while the g flag stands for global and searches
// every match
const string = 'ninja asdfas Ninja';
console.log(string.match(/ninja/gi));

// patterns
// character sets is way to match different chracters in a single position
const string1 = 'ninja ginja adfadf';

//match either n or g in the first position
// chracter sets don't need something after them
console.log(string1.match(/[ng]inja/gi))

//match all instance of a and f and h
console.log(string1.match(/[afh]/g)) 

// exclude sets
const string2 = 'a000 b000 c000 p000 %000'

// match all except p000 and a000 exclude(^)
console.log(string2.match(/[^pa]000/g))