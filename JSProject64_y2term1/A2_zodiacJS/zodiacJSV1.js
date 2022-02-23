//week2 Project about Zodiac

const zodiac = ['monkey','rooster(chiken)','dog','pig','rat','ox','tiger','rabit','dragon','snake','hourse','sheep']

//put in year is your born 
let userYearBorn = 2022;

//Chack calculate
let calculateZodiac = userYearBorn % 12 
console.log(calculateZodiac)

//condition switch-case
switch(calculateZodiac){
    case 0:
        console.log(`your zodiac is: ${zodiac[0]}`)
    break;
    case 1:
        console.log(`your zodiac is: ${zodiac[1]}`)
    break;
    case 2:
        console.log(`your zodiac is: ${zodiac[2]}`)
    break;
    case 3:
        console.log(`your zodiac is: ${zodiac[3]}`)
    break;
    case 4:
        console.log(`your zodiac is: ${zodiac[4]}`)
    break;
    case 5:
        console.log(`your zodiac is: ${zodiac[5]}`)
    break;
    case 6:
        console.log(`your zodiac is: ${zodiac[6]}`)
    break;
    case 7:
        console.log(`your zodiac is: ${zodiac[7]}`)
    break;
    case 8:
        console.log(`your zodiac is: ${zodiac[8]}`)
    break;
    case 9:
        console.log(`your zodiac is: ${zodiac[9]}`)
    break;
    case 10:
        console.log(`your zodiac is: ${zodiac[10]}`)
    break;
    case 11:
        console.log(`your zodiac is: ${zodiac[11]}`)
    break;

}