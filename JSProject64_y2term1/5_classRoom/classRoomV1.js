//Week 5: Create Student in Classroom. Use Constructor to build.

class ClassroomA {
    constructor(id,name,sex){
        if (id.length == 11 ) this._id = id; 
        else this._id = 'IS NOT ID';
        this._name = name;

        if (sex == 'male')this._sex = 'MR.';
        else if (sex == 'female')this._sex = 'MS.';
        else 'not fill your data'
    }
    
    get id(){
        return this._id;
    }
    set id(id){
        this._id = id;
    }
    
    get name(){
        return this._name;
    }

    get sex(){
        return this._sex;
    }

    toString(){
        return `id: ${this._id} name: ${this._sex} ${this._name}`
    }

}

let Student1 = new ClassroomA('631305','k','male');
let Student2 = new ClassroomA('63130500055','L','male');
let Student3 = new ClassroomA('63130500058','Z','female');

//can edit
Student1._id = '63130500007';

console.log(Student1.toString())
console.log(Student2.toString())
console.log(Student3.toString())