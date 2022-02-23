//Week2 Body Mass Index

//input your data HERE!
let id ='007';
let name = 'Thiger';
let surname = 'Color';
let weight = 75; // meters
let hight = 1.75; // kilometers

//function calculate bmi metric
function bmiCalculate() {
    let stepOne = hight * hight;
    let stepTwo = weight/stepOne;
    return stepTwo
}

//function to fix Decimal Places for beautyfull result
function result(){
let fixDecimalPlaces =  bmiCalculate().toFixed(2);
return fixDecimalPlaces
}

//ShowOutPut
console.log(`<id:${id}> <name:${name} ${surname}> <YourBMI:${result()}>`);