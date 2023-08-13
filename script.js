//ES6 - Computed Property Names

// Test 1
// let prop = 'name';
// let id = 1234;
// let mobile = '0687840372';

// let user = {
//     [prop]: 'Jack',
//     [`user_${id}`]: `${mobile}`
// };
// console.log(user.name + " " + user.user_1234);


// // Test 2
// var i = 0;
// var a = {
//     ['test1']: i,
//     ['test' + 2]: 13
// }
// console.log(a.test2);



// //test 3
// var esm = 'name';
// var sen = 'age';
// var keshvar = 'land';
// var person = {
//     [esm] : 'Jack',
//     [sen] : 12,
//     [keshvar] : 'USA'
// }
// console.log(person.name +" ... "+ person.age +" ... "+ person.land);



// test 4
// Bold the first letter of a word
var sName = 'shiraz';
console.log(sName.charAt(0).toUpperCase(1)+ sName.slice()); //Shiraz

var param = 'size';
var config = {
    [param] : 12,
    ['mobile'+ param.charAt(0).toUpperCase(1)+param.slice(1)]: 8
};
console.log(config.mobileSize); //8
console.log(param.slice(1));




