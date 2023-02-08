// types of array declaration in js
let arr = [1, 2, 3, 4, "ugo"];
let arr2 = new Array('1', '2', '3', '4', '5', '6');


// declaring the array size
let arr3 = new Array(12);

// settting values to inject into any array in my code file
Array.prototype.lol= "ha ha"
Array.prototype.lmao = 'heheheheheheh!!!'
console.log(arr.lol)
console.log(arr2.lmao)

// NOTE: you can assign a function to a variable in js at the piont of creation.
Array.prototype.lolz = function(){
    for(let i = 0; i < this.length; i++){
        this[i] = this[i].toUpperCase();
    }
    return this;
};
console.log(arr2.lolz())

// Array method:
// push and pop
// shift and unshift
// slice and splice

// push example (insert value into the last ndex)
 let result = arr2.lolz()
 result.push('yemi')
 console.log(result)

// pop example (remove the last value)
result.pop()
console.log(result)

// unshift example (insert vale at the first index)
result.unshift('kemi')
console.log(result)

// shift example
result.shift()
console.log(result)

// slice example (print values at indicated index )
console.log('slice')
let result2 = result.slice(0, 3)
// this remove values at end of the array b4 printing
let result3 = result.slice(1, -2)
console.log(result2)
console.log (result3)

// splice example (can be used to remove elements at specified index and can also be used to replace values at spcified index)
let result4 = result.splice(0, 3)
let result5 = result.splice(1, 3,"king", "james")
console.log(result4)
console.log('splicing replace')
console.log(result)
console.log(result5)


// split and splicing in real note
let badword = ["fuck", "hate", "bitch"]
let  sentence = "i hate you bitch fuck"
let sentencesplit = sentence.split(" ")
console.log(sentencesplit)
for(let i = 0; i < badword.length; i++){
    if (badword[i].includes(sentencesplit[i])){
      splice(sentencesplit[i])
    }
}console.log(sentencesplit)


let myarray = [1,2,3,4,5]
for(numbers of myarray){
    console.log(numbers)
}
for(numbers in myarray){
    console.log(numbers)
}

myarray.forEach(element => { console.log(element + 1)});


