//Week2 Body Mass Index

// <<<<<input your data HERE!>>>>>________________________
let id ='007';
let name = 'Thiger';
let surname = 'Color';
let weight = 75; // meters
let hight = 1.75; // kilometers
//________________________________________________________

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

function BMICategories(chakeBMI) {
if((result()) >= 30){   
    chakeBMI = 'Dangerous obesity: Should go to a doctor'
} else if((result()) >= 25){
    chakeBMI = 'Obesity: You should control your eating and exercise.'
} else if((result()) >= 23){
    chakeBMI = 'Fat: More exercise.'
} else if((result()) >= 18){
    chakeBMI = 'Normal range: You look so good.'
} else if((result()) <= 18){
    chakeBMI = 'Underweight: More exercise and eating.'
} else {
    chakeBMI = 'EROR!! Number is over limit OR Chack your number again'
}
return chakeBMI
}

//ShowOutPut
console.log(``);
console.log(`<<<Body Mass Index(BMI) Calculate>>>_______________________________________________________`);
console.log(`<id:${id}> <name:${name} ${surname}> <YourBMI:${result()}(kg/m^2) "Your Status is ${BMICategories()}">`);
console.log(`___________________________________________________________________________________________`);
console.log(``);
