                
                
    //  only constructor constructor function

    // var Personwitmethod = function(name, age, job) {
    // this.name = name;
    // this.age = age;
    // this.job = job;
    // this.dateOfBirth = function() {
    //     console.log(this.name + ' is born in ' + (2018 - this.age));
    // }
    // }
    // var samirwithmethod = new Personwitmethod('Samir Hossain', 20, 'Student');
    // console.log(samirwithmethod)
    // samirwithmethod.dateOfBirth();




    // by using class constructor

    class Personwitmethod2 {
        constructor(name, age, job){
            this.name = name;
            this.age = age;
            this.job = job
            this.myName = function(){
                console.log("My name is " + this.name)
            }
        }
        dateOfBirth(){
            console.log(this.name + 'is born in ' + (2018-this.age));
        }
    }

    var samirwithmethod2 =  new Personwitmethod2('Samir Hossain', 20, 'Student');
    console.log(samirwithmethod2)
    samirwithmethod2.dateOfBirth()
    samirwithmethod2.myName()


                
    //using prototype

    // function SamirPrototype(name, age, job){
    //     this.name=name;
    //     this.age=age;
    //     this.job=job
    // }

    // SamirPrototype.prototype={
    //     dateOfBirth(){
    //         console.log(this.name + 'is born in ' + (2018-this.age));
    //     }
    // }
    // const samir = new SamirPrototype('Samir Hossain', 20, 'Student')

    // console.log(samir)
    // samir.dateOfBirth()


            
    //using new keyboard
                
    // function SamirPrototype(name, age, job){
    //     let samirperson = Object.create(SamirPrototype.prototype)
    //     samirperson.name=name;
    //     samirperson.age=age;
    //     samirperson.job=job

    //     return samirperson
    // }

    // SamirPrototype.prototype={
    //     dateOfBirth(){
    //         console.log(this.name + 'is born in ' + (2018-this.age));
    //     }
    // }
    // const samir2 = SamirPrototype('Samir Hossain', 20, 'Student')

    // console.log(samir2)
    // samir2.dateOfBirth()

              



        



               
               
    
                
            
