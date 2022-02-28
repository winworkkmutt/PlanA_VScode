//Week3 Build program about Change money(ฺฺBaht) on function.
//Ok, let's go!

//on Start Money
let myPocket = 2500

//function product is use to stock product jam
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

    //function calculate money
    this.calculate = function() {
        let stepOne = myPocket - this.price
        let results = 'Your Credit: ' + stepOne + ' ฿'
        return results;
    }
    


}

function changeMoney(){
    let independentVariable = userList.calculate()

    for(let i = independentVariable; i > 0; i--){
        let fivethouson = i -500;
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


//You can Buy Product HERE!!! Ex.{jamA,JamB,jamBa,fruitA,drinkA}
let userList = drinkA;


//Show output payment paper
console.log(userList.showDetails());
console.log(`Your Spent: ${myPocket}`);
console.log(userList.calculate());
console.log('-------------------');

//Oh! This not program Change money. I don't underStand. I should learn more about this.