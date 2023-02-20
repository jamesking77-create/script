
//regex is an object for inputed data validation......
//regex  decalartions
var regex  = /[a-z]+/;
var regex2 = RegExp("[a-z]");
//this declaration check if it has small letters up to 6
var regex3  = /[a-z]{6,}/;
//this declaration check if it has small and capital letters up to 6
var regex4  = /[a-zA-Z]{6,}/;

console.log(typeof regex);
console.log(typeof regex2);
console.log(typeof regex3);
console.log(typeof regex4);

//outputing the current pattern of the regex... (to see if it matches)
console.log(regex.exec("Abc"))
console.log(regex2.exec("Arc"))
console.log(regex3.exec("Arcghjhjk"))
console.log(regex4.exec("ArcgGGGhjhjk"))
// checking if the value match the parttern stated
console.log(regex.test("Abc"))
console.log(regex2.test("Abc"))
console.log(regex3.test("Abcjjhfjhgfdsd"))
console.log(regex4.test("Abcjjhfjhgfdsd"))
