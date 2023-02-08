// console.log("james is a good boy")
//  function sum(a , b , c){
//     return (a + b + c)}
// a = sum (1, 2 ,7)
// console.log(a)
// if (a == 6){
//     console.log("your answer is six")


// }
// else{
//     console.log("i want six")
// }

// c = 'my name is'
// b = 'james king'
// console.log(c + ' '+ b)
// for( a = 1; a < 13; a ++){
//     console.log("2 times "+ a +" is " + 2*a )
// }



//juggling variables

// let num1 = 2
// let num2 = 4
// let num3 = 6
// tmp = num1
// num1 = num2
// num2 = num3
// num3 = tmp
// console.log(num1)
// console.log(num2)
// console.log(num3)


// //COMPARISON OPERATOR
// // var check = 3 === "3";
// // console.log(check);

// console.log(true && true)
// console.log(true && false)
// console.log(true && !true)
// console.log(true || true)
// console.log(false && false)


// // ARETHIMETIC OPERATOR
// console.log(2+4 * 3 % 5 - 1 * 6 / (1 + 1))


// //OBJECT

let c14_database = Object()

c14_database["001"] = {
    
    name: "eniola",
    age: '23',
    gender: 'female',
    height :2.4
}

c14_database["002"] = {
    
    name: "james",   
    age: '25',
    gender: 'male',
    height :2.6
}
// using (for in) to get key value pairs
for(key in c14_database){ console.log(c14_database[key].gender)}
// NOTE: you have (.keys), (.values), (.entries)... keyword for iterating through object while using (for of) control statement

// // console.log(c14_database[001])

// let random = Math.floor(Math.random() * 100);
// console.log(random)



// //type coersion
// //this converts input or user input to what ever type the programmer needs it to be in the program

// let age = "20"
// age = String(age).valueOf()
// console.log(typeof age)

// let hieght = "35"
// age = Number(age).valueOf()
// console.log(typeof age)

// //coverting a boolen to a number

// let check = true;
// check = Number(check).valueOf();
// console.log(check)

// // converting a numberinto a boolean

// // let n = 2
// // Boolean.valueOf(n)/console

// let id = "001"
// let avalable = "true"
// let count = "4"
// let book = "eloquent javascript"
// let author = "ugo"


// let c14_library = Object()

//  c14_library['001'] = {
//     identification : String(id).valueOf(),
//     availablity : Boolean(avalable).valueOf(),
//     amount : Number(count).valueOf(),
//     bookname : String(book).valueOf(),
//     bookauthor :  String(author).valueOf(),

// } 
// console.log(c14_library['001'])


//tainary operator


// //if
// renike = 'grace'
// //do
// ?console.log('grace')
// //else 
// : console.log('glory')
// renike = 'kindness'
// ? console.log('kindess')
// : console.log('nawa')







