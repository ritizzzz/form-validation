// regex is case sensitive so when Ninja is searched for in string
// nothing is returned, the i flag makes insensitive
// while the g flag stands for global and searches
// every match
const string = 'ninja asdfas Ninja';
console.log(string.match(/ninja/gi));