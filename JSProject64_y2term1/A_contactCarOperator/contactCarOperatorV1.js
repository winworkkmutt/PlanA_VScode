// We want project anything about learned in week 1
//OK: I will made car project About else if
const wantProductCar = ['ford','toyota','ordee'];;
const wantmodel = ['VwowMiNi1','standardFAST1','ForceSpeeder9'];
let userStatus = 0;
let managerStatus = 0;
const price = ['200,000 $','300,000 $','500,000 $']
const charactor = [null,'User:: ','Manager:: ']

//You can change number 0-3 to talk about car
userStatus = 3;

//You can select car here. number on array[] is 0-2
let aa = wantProductCar[2]
let ab = wantmodel[2]

//function controller about text User to select company&Model car to show out put
function SelectCarHere(wantProductCarID,wantmodelID) {
    var wantProductCarID = console.log('+From company: ' + aa);
    var wantmodelID = console.log('+And i select Model: ' + ab);    
    return SelectCarHere
}

//conditional if-else :: control flow-price
// wantmodel[2] = 0;
function PriceCar(Pricecar){
    wantmodel[2];
    if (aa == wantProductCar[0] && ab == wantmodel[0] || aa == wantProductCar[1] && ab == wantmodel[0] || aa == wantProductCar[2] && ab == wantmodel[0]){
        // wantmodel[0] = 0;
        Pricecar = console.log(`total amount is: ` + price[0])
    } else if (aa == wantProductCar[0] && ab == wantmodel[1] || aa == wantProductCar[1] && ab == wantmodel[1] || aa == wantProductCar[2] && ab == wantmodel[1]){
        Pricecar = console.log(`total amount is: ` + price[1] )
    } else if (aa == wantProductCar[0] && ab == wantmodel[2] || aa == wantProductCar[1] && ab == wantmodel[2] || aa == wantProductCar[2] && ab == wantmodel[2]){
        Pricecar = console.log(`total amount is: ` + price[2])
    } else {
        console.log('No Stock Sir')
    };
    return PriceCar;
    }

//conditional if-else :: control flow-talk
if (userStatus == 0){
    managerStatus = 0
} else if (userStatus == 1){
    managerStatus = 1
} else if (userStatus == 2){
    managerStatus = 2
} else if (userStatus == 3){
    managerStatus = 3
}else {
    console.log('error: plese put in number between 0-3 on user status.')
};

//conditional if-else :: talk content User  
if (userStatus == 0){
    console.log(charactor[1] +`I don't like your car`)
} else if (userStatus == 1){
    console.log(charactor[1] +`I want to see your car`)
} else if (userStatus == 2){
    console.log(charactor[1] +`I want to see more content about your car`)
} else if (userStatus == 3 ){
    console.log(charactor[1] +`Yes! I want to Buy a car`)
    console.log(SelectCarHere())
} else {
    console.log('error: plese check your statement.')
};

//conditional if-else :: talk content Manager
if (managerStatus == 0) {
    console.log(charactor[2] + `Ok, Get out`)
} else if (managerStatus == 1){
    console.log(charactor[2] +`Ok, This car is more company that we have, What user are like`)
}  else if (managerStatus == 2){
    console.log(charactor[2] +`We have ford, ordee, nission, benz, toyota sir. And each the car have summary details on the papersheet on website You can read that sir`)
} else if (managerStatus == 3){
    console.log(charactor[2] +` Thankyou and good luck for drive`)
    console.log(PriceCar())
} else {
    console.log('error: plese put in number between 0-3 or plese check your statement again.')
};

