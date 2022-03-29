//Week3 Build program about Change money(ฺฺBaht) on function.
//Ok, let's go!

// on Start Money.
// You can add/edit your money here!!! +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let myPocket = 2385;
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function product is use to stock product jam
function product(productName, price, typeProduct) { 
    this.productName = productName,
    this.price = price,
    this.typeProduct = typeProduct;

    this.showDetails = function() {
        console.log( '------payment------');
        console.log(`typeProduct: ${typeProduct}`);
        console.log(`You buy: ${productName}`);
        console.log(`Price: ${price} ฿`);
        console.log(`Total: ${price} ฿`);
        const closs = '-------------------';        
        return closs;
    }

    // function calculate money
    this.calculate = function() {
        let stepOne = myPocket - this.price
        let results = stepOne
        return results;
    }
}

// function calculate Change_Monney
function aa(independentVariable){
    // 1000 Baht Function
    let stepOne = independentVariable / 1000;
    this.fullResultSOne = function (){
        return stepOne
    }
    this.roundDownSOne = function (){
        return Math.floor(stepOne) // Math.floor() rounds a number DOWN to the nearest integer
    }

    // 500 Baht Function
    let stepTwo = independentVariable / 500;
    this.fullresultSTwo = function (){
        return Math.abs((1000*this.roundDownSOne() - stepTwo*500)/500); //---Math.abs() is absolute on math |x|
    }
    this.roundDownSTwo = function (){
        return Math.floor(this.fullresultSTwo())
    }

    // 100 Baht Function 
    let stepThree = independentVariable / 100;
    this.fullresultSThree = function (){
        return Math.abs(((1000*this.roundDownSOne()+500*this.roundDownSTwo()) - stepThree*100)/100); //---Math.abs() is absolute on math |x|
    }
    this.roundDownSThree = function (){
        return Math.floor(this.fullresultSThree())
    }

    // 50 Baht Function
    let stepThreeA = independentVariable / 50;
    this.fullresultSThreeA = function (){
        return Math.abs(((1000*this.roundDownSOne()+500*this.roundDownSTwo()+100*this.roundDownSThree()) - stepThreeA*50)/50); //---Math.abs() is absolute on math |x|
    }
    this.roundDownSThreeA = function (){
        return Math.floor(this.fullresultSThreeA())
    }

    // 20 Baht Function
    let stepFive = independentVariable / 20;
    this.fullresultSFive = function (){
        return Math.abs(((1000*this.roundDownSOne()+500*this.roundDownSTwo()+100*this.roundDownSThree()+50*this.roundDownSThreeA()) - stepFive*20)/20); //---Math.abs() is absolute on math |x|
    }
    this.roundDownSFive = function (){
        return Math.floor(this.fullresultSFive())
    }

    // 10 Baht Function
    let stepSix = independentVariable / 10;
    this.fullresultSSix = function (){
        return Math.abs(((1000*this.roundDownSOne()+500*this.roundDownSTwo()+100*this.roundDownSThree()+50*this.roundDownSThreeA()+20*this.roundDownSFive()) - stepSix*10)/10); //---Math.abs() is absolute on math |x|
    }
    this.roundDownSSix = function (){
        return Math.floor(this.fullresultSSix())
    }

    // 5 Baht Function
    let stepSeven = independentVariable / 5;
    this.fullresultSSeven = function (){
        return Math.abs(((1000*this.roundDownSOne()+500*this.roundDownSTwo()+100*this.roundDownSThree()+50*this.roundDownSThreeA()+20*this.roundDownSFive()+10*this.roundDownSSix()) - stepSeven*5)/5); //---Math.abs() is absolute on math |x|
    }
    this.roundDownSSeven = function (){
        return Math.floor(this.fullresultSSeven())
    }

    // 1 Baht Function
    let stepEight = independentVariable / 1;
    this.fullresultSEight = function (){
        return Math.abs(((1000*this.roundDownSOne()+500*this.roundDownSTwo()+100*this.roundDownSThree()+50*this.roundDownSThreeA()+20*this.roundDownSFive()+10*this.roundDownSSix()+5*this.roundDownSSeven()) - stepEight*1)); //---Math.abs() is absolute on math |x|
    }
    this.roundDownSEight = function (){
        return Math.floor(this.fullresultSEight())
    }
}

// Product List___________________________________________
// Jam product list
let jamA = new product('Jam Apple', 599, 'jam')
let JamB = new product('Jam BlueBerry', 299, 'jam') 
let jamBa = new product('Jam Banana', 399, 'jam')
let jamO = new product('Jam Orange', 199, 'jam')
let jamS = new product('Jam Strawberry', 99, 'jam')

// fruit product list
let fruitA = new product('Apple', 189, 'fruit')
let fruitB = new product('BlueBerry', 129, 'fruit') 
let fruitBa = new product('Banana', 159, 'fruit')
let fruitO = new product('Orange', 119, 'fruit')
let fruitS = new product('Strawberry', 69, 'fruit')

// Drink-furit product list
let drinkA = new product('Apple Drink', 999, 'drink')
let drinkB = new product('BlueBerry Drink', 1299, 'drink')
//_________________________________________________________


// You can Buy Product HERE!!! Ex.{jamA,JamB,jamBa,fruitA,drinkA} +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let userList = drinkA;
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Show output payment paper
console.log(userList.showDetails());
console.log(`Your Spent: ${myPocket}`);
console.log(`Your Credit: ${userList.calculate()} ฿`);
console.log('-------------------');

// Show Output About change 
let yourCreadit = userList.calculate()
let calculate = new aa(yourCreadit)
console.log('---Change_Money--->')
// +++++ 1000 ฿
//console.log(`One-thousand-baht bill(1000 ฿): ${calculate.fullResultSOne()} <<process>>`)
console.log(`One-thousand-baht bill  (1000 ฿) : ${calculate.roundDownSOne()} unit`)
//+++++ 500 ฿
//console.log(`Five-hundred-baht bill(500 ฿) : ${calculate.fullresultSTwo()} <<process>>`)
console.log(`Five-hundred-baht bill   (500 ฿) : ${calculate.roundDownSTwo()} unit`)
//+++++ 100 ฿
//console.log(`One-hundred-baht bill (100 ฿) : ${calculate.fullresultSThree()} <<process>>`)
console.log(`One-hundred-baht bill    (100 ฿) : ${calculate.roundDownSThree()} unit`)
//+++++ 50 ฿
//console.log(`Fifty-baht bill (50 ฿) : ${calculate.fullresultSThreeA()} <<process>>`)
console.log(`Fifty-hundred-baht bill   (50 ฿) : ${calculate.roundDownSThreeA()} unit`)
//+++++ 20 ฿
//console.log(`Twenty-baht bill (20 ฿) : ${calculate.fullresultSFive()} <<process>>`)
console.log(`Twenty-baht bill          (20 ฿) : ${calculate.roundDownSFive()} unit`)
//+++++ 10 ฿
//console.log(`Ten-baht coin (10 ฿)   : ${calculate.fullresultSSix()} <<process>>`)
console.log(`Ten-baht coin             (10 ฿) : ${calculate.roundDownSSix()} unit`)
//+++++ 5 ฿
//console.log(`five-baht coin (5 ฿)   : ${calculate.fullresultSSeven()} <<process>>`)
console.log(`five-baht coin             (5 ฿) : ${calculate.roundDownSSeven()} unit`)
//+++++ 1 ฿
//console.log(`One-baht coin (1 ฿)   : ${calculate.fullresultSEight()} <<process>>`)
console.log(`One-baht coin              (1 ฿) : ${calculate.roundDownSEight()} unit`)
console.log('_________________________________________')

//Oh! This is program Change money. Good job.

    
    
