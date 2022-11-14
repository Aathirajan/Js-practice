let fruit = ['apple', 'orange', 'dhall', 'carrot'];
console.log(fruit);
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);
console.log(fruit[3]);
fruit.push('lemon');
console.log(fruit);

fruit.push('rice');
console.log(fruit);


fruit.push('sauce');
console.log(fruit);

console.log(fruit.slice(0, 3));
console.log(fruit.slice(1, 6));

// array methods with slice, push, indexOf,lenght:

let fruit = ['apple', 'orange', 'dhall', 'carrot'];
console.log(fruit);
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);
console.log(fruit[3]);
fruit.push('lemon');
console.log(fruit);

fruit.push('rice');
console.log(fruit);


fruit.push('sauce');
console.log(fruit);

console.log(fruit.slice(0, 3));
console.log(fruit.slice(1, 6));
console.log(fruit.indexOf('dhall'));
console.log(fruit.length)



// let fruits =['pa','ma','po','pi','ap','pa','ma','po','pi','ap','pa','ma','po','pi','ap','pa','ma','po','pi','ap','pa','ma','po','pi','ap']

// // for(let i=0;i<fruits.length;i++)
// //   {
// //     console.log(fruits[i])
// //   } 

// // for of 
// for (let i of fruits)
//   {
//     console.log(i)
//   }  

// let double=(numbers)=>{
// let results=[];
// let num=[1,2,3,4,5,6]
// for (let i of num)
//   {
//     // console.log(i*5)
//     results.push(i*2)
//   }
//   return results
// }
// console.log(double([1,2,3,4,5,6]))

let x=(array)=>{
    let m=[];
    for(let i of array)
    {
      m.push(i*i)
    }
  return m
  }
  console.log(x([1,2,3,4,5,6]))