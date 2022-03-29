//Week6 Array Topic is about type of Array

// 1. Array Literals ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(" ")
console.log("=== 1. Array Literals =========================================================");

let arrayLiteral1 = [];
arrayLiteral1 = [1,2,3,5,8,8.9]
    //Read value
    console.log(arrayLiteral1); //Read_All member in object
    console.log(arrayLiteral1[0]); //Read_First index in object array
    console.log(arrayLiteral1[arrayLiteral1.length - 1]); //Read_Last index in object array

console.log("");

// 2. Array of objects ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log("=== 2. Array of objects =======================================================");

let arrayLiteral2 = [
                    [1,2,3],
                    ['A','B',555],
                    ['The','Sim',3.5]
                    ] // this is array of array When you use index is same matric in math. |(0,0) (0,1) (0,2)|
                      //                                                                   |(1,0) (1,1) (1,2)|
                      //                                                                   |(2,0) (2,1) (2,2)|
                      // Ex. Read index 0,2
                         console.log(arrayLiteral2[0][2])
let arrayLiteral3 = [
                    {id:111 , name:'babe'},
                    {id:299 , name:'car'}
                    ] // this is array of objects
                      // Ex. When you Read. you should set [0] and .property
                         console.log(arrayLiteral3[1].name);

console.log("");

// 3. The ...variable is can use to coppy member array ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log("=== 3. The ...variable is can use to coppy member array =======================");

let arrayLiteral5 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // coppy member arrayLiteral5 to arrayLiteral6
    let arrayLiteral6 = [0, ...arrayLiteral5 , 11, 12 ]
        console.log(arrayLiteral6)
        console.log("");  
        
//3a. You can use for of to list all member of array
console.log("=== 3a. You can use for of to list all member of array ========================");
for( let nameAnything of arrayLiteral6){
  console.log(nameAnything)
}