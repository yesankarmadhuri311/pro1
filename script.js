// let arr1=[12,14,15,6,18,95,4]

// will not make a true copy
// let arr2=arr1

// console.log("arr1 - "+ arr1 )
// console.log("arr2 - "+ arr2 )

//  arr2[2]="aplha"

// console.log("arr1 - "+ arr1 )
// console.log("arr2 - "+ arr2 )

// to clone 
let arr1=[12,14,15,6,18,95,4]
let clone=[]


for(let i=0;i<=arr1.length-1;i++)
{
    clone[i]=arr1[i]
}
console.log(arr1)

console.log(clone)

clone[2]="changed"

console.log(arr1)

console.log(clone)


// functions -> block of code it is used to perfomr  specific task it executed when it is called ,it promotes re usability of code

// defination
// function functionName(parameters){

//     //code

// }

// functionName(arguments)



// function isEven(num){

//     if(num%2==0)
//     {
//         console.log('number is even')
//     }else{
//         console.log("number is odd")
//     }
// }

// isEven(78)


// Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// [1, 2, 4, 0]


function array_clone(arr){
let copy=[]
for(let i=0;i<=arr.length-1;i++)
{
    copy[i]=arr[i]
}
  return copy
   console.log(5+6) 
}
let arr_copy1=array_clone([1,2,3,4,5,6,7])
let arr_copy2=array_clone([1,2,3,4,5,6,7])
console.log(arr_copy1)

// write a function that will return reverse of an arr

let alpha=["a","b","c","d","e","f","g","h","i"]



function revArr(arr){


let revAlpha=[]
let j=0
for(let k=arr.length-1;k>=0;k--)
{
      revAlpha[j]=arr[k]
      j++
}

return revAlpha


}

let abc=revArr(alpha)
let pqr=revArr([1,2,3,4,5,6,7,8,9])

console.log(abc)
console.log(pqr)


// Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

// 4. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]





