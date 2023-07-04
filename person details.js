class person{
    constructor(fn,ln,age,dob,height,p){
        this.firstname=fn;
        this.lastname=ln;
        this.age=age;
        this.dateofbirth=dob;
        this.height=height;
        this.profession=p;

    }
}
const person1 = new person("siva","murgesh","26","1997","6.3","tech");
console.log(person1)