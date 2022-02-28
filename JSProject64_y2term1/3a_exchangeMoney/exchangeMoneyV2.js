
    let OnStartMoney = 1900


    // for(let i = independentVariable; i > 0; i--){
    //     i / 500;
    //     console.log(i.toFixed(0));
    // }


    // Math.floor() rounds a number DOWN to the nearest integer
    function aa(independentVariable){
        // 1000 Baht Function
        let stepOne = independentVariable / 1000;
        this.fullResultSOne = function (){
            return stepOne
        }
        this.roundDownSOne = function (){
            return Math.floor(stepOne)
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

    }
    
    let calculate = new aa(OnStartMoney)

    console.log(`five-hundred-baht bill(1000 ฿): ${calculate.fullResultSOne()} <<process>>`)
    console.log(`five-hundred-baht bill(1000 ฿): ${calculate.roundDownSOne()} unit`)

    console.log(`five-hundred-baht bill(500 ฿): ${calculate.fullresultSTwo()} <<process>>`)
    console.log(`five-hundred-baht bill(500 ฿): ${calculate.roundDownSTwo()} unit`)

    console.log(`five-hundred-baht bill(100 ฿): ${calculate.fullresultSThree()} <<process>>`)
    console.log(`five-hundred-baht bill(100 ฿): ${calculate.roundDownSThree()} unit`)
