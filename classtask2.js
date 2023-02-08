// let arrayz =  [["car", 6000],["truck", 500], ["bike", 6500]]
// console.table(arrayz)
// console.table(arrayz[0][0])
// arrayz.push(["scooter",1500])
// console.table(arrayz)
// arrayz[0].push(['Toyota', 'Nissan'])
// arrayz[1].push(['Ford'])
// arrayz[2].push(['Honda'])
// arrayz[3].push([null])
// console.table(arrayz)

//  let newarrays = [["james",700], ['moyin', 800]]
// for(let i = 0; i < newarrays.length; i++){
//     console.log(newarrays[i])
// }

let arr = [[200, 50, 300, 5],
           [10, 25, 7, 100],
           [25, 20, 70, 45],
           [500, 170, 11, 35]]
console.table(arr) 
let row = 4
let start = 0
let end = 2 
let result = '';

for(let i = 0; i < arr.length; i++){
    if(row < 0 || row > 4 || start > arr[i].length || start < 0 || end > arr[i].length){
        console.log('index out of bound')
    }else{
         result = arr[row].slice(start, end + 1)
        }
}console.log(result)
