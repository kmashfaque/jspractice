            // Numbers=[];
            // n=parseInt(prompt("How many numbers do you wanna put?"));
            // for(i=0;i<=n;i++){
            //     Numbers[i]=parseInt(prompt("Enter your number"));
            
                
            // }
            // var sum = 0;
            // for(i=0;i<Numbers.length;i++){
            //     sum=sum + Numbers[i];
            // }
            // console.log(Numbers);
            
            // console.log(sum);


            
            
            // for of loop=== mainly used for array

            // const names = ["Abir", "Gshad", "Shimee", "Rigan"]
            // for(let x of names){
            //     console.log(x)
            // }

          
          
          
            // for in loop===mainly used for objcts

            // let student1 ={
            //     name : 'James',
            //     roll : 1,
            //     Id : 1,
            //     address : 'Chawkbazar'

            // }
            // for (let y in student1){
            //     console.log(y)
            // }

            // the output will be === name,roll,id, address



            // to get the values from the Array

            //   for (let y in student1){
            //     console.log(student1[y])
            // }    

            // the output will be === james,1, 1, chawkbazar

          
           
            // to get the property and the values of the property


            // for (let y in student1){
            //     console.log(`${y} : ${student1[y]}`)
            // }    
            
            
            // the output will be === name:james, roll:1, id:1, address:cahwkbazar

            // var numbers= [10, 15, 30, 40, 50];
            // for(i=0 ; i < numbers.length; i++){
            //     console.log(numbers[i]);
            // }










            // by using forEach function


            // var numbers= [10, 15, 30, 40, 50];
            // numbers.forEach(myFunction);
            // function myFunction(x){
            //     console.log(x)
            // }

           
            // by using annonymous function

            // var numbers= [10, 15, 30, 40, 50];
            // numbers.forEach(function(x){
            //     console.log(x);
            // })
            
                     
            // var numbers= [10, 15, 30, 40, 50];
            // var squareNumbers=[];
            // numbers.forEach(myFunction);
            // function myFunction(x){
            // (squareNumbers.push(x*x));
         
            // }
            // console.log(squareNumbers);
            // console.log(numbers);



            // var numbers= [10, 15, 30, 40, 50];
            // numbers.forEach(myFunction);
            // function myFunction(x,index,arr){
            //     arr[index] = x + 5;
            // }
            // console.log(numbers);



            // var numbers= [10, 15, 30, 40, 50];
            // for(i = 0; i < numbers.length; i++){
            //     numbers[i] = numbers[i] + 5;
                
            // }
            // console.log(numbers);


            // var numbers = [45, 4, 9, 16, 25];
            // var square = [];

            // numbers.forEach(myFunction);
            
            // function myFunction(value) {
               
            //    return square.push(value*value);
            
            // }
            // console.log(square);
            // document.write(numbers + "<br>")

              //foreach function ends here









            // map function

            // var numbers = [5,6,7,8,9,6,10,16,15,17,13,12,14,1];
            // var square = numbers.map(myFunction);
            
            
            // function myFunction(value) {
            // var squares = (value * value);
            // console.log(squares);
            //     return squares;
            // }
            // console.log(square);
           
            // document.write(numbers + "<br>")








            // filter function

            // var numbers = [1,2,5,6,7,8,9,6,10,16,15,17,13,12,14,1];
            // var square = numbers.filter(myFunction);
              
            // function myFunction(value) {
            //    return value*value> 36;
            // }
            // console.log(square);
            // document.write(numbers + "<br>")

            
            // var numbers = [1,2,5,6,7,8,9,6,10,16,15,17,13,12,14,1];
            // var square = numbers.filter(myFunction);
            
            
            // function myFunction(value) {
            //    return value + 25 > 36;
               
            // }
            // console.log(square);
           
            // document.write(numbers + "<br>")

            // filter function ends here



            // reduce function

            // var numbers = [45, 4, 9, 16, 25];
            // var sum = numbers.reduce(myFunction, 100);


            // function myFunction(total, value) {
            // return total + value;
            // }
            // console.log(sum);
            // console.log(numbers);




            
            
        
        
            // in the given example find method is used to find the 
            // 1st number that will pass the test...the answer will be 25

            // var numbers = [4, 9, 16,26, 29];
            // var first = numbers.find(myFunction);

            // function myFunction(value, index, array) {
            // return value > 18;
            // }
            // console.log(first);
            




             
            
            //     const studentsInfo = [
                //             {
                //                 name: 'Sultan',
                //                 id:1,
                //                 gpa:3.45,
                //                 address:'chawkbazar'

                //             },

                //             {
                //                 name: 'Muhammad',
                //                 id:2,
                //                 gpa:4.45,
                //                 address:'chawkbazar'

                //             },
                //             {
                //                 name: 'Rahim',
                //                 id:3,
                //                 gpa:4.25,
                //                 address:'chawkbazar'

                //             },
                //             {
                //                 name: 'Rahaman',
                //                 id:4,
                //                 gpa:3.75,
                //                 address:'chawkbazar'

                //             },
                //             {
                //                 name: 'John',
                //                 id:5,
                //                 gpa:3.95,
                //                 address:'chawkbazar'

                //             },
                //             {
                //                 name:'Doe',
                //                 id:6,
                //                 gpa:4.05,
                //                 address:'chawkbazar'

                //             }
                        
                // ]


                //    for(i=0;i<studentsInfo.length;i++){
                //     console.log(studentsInfo[i].name);
                //    } 

                //   function studentsName(){
                //     return studentsInfo.filter(myfunction).map(namesFunction);
                //     function myfunction(x){
                //         return x.gpa>4.00;
                //     }
                //     function namesFunction(y){
                //             return y.name;
                //     }
                //   }
                //   console.log(studentsName());



              
                

                // By using arrow function
                
                // const studentsName2 = () => {
                //     return studentsInfo.filter((x)=> x.gpa>4).map((y) => y.name);
                // }
                // console.log(studentsName2());  
                // const studentsName2 = () => studentsInfo.filter((x)=> x.gpa>4).map((y) => y.name);
                // console.log(studentsName2());  

                
                
                
                // arrow function ends here









                // closures
                // function closuresDemo() {
                // var x = 10;
                // return function() {
                //     var y = 20;
                //     console.log('Sum: ' + (x + y));
                // }
                // }
                // closuresDemo()();
            
                



                //function within object = method(function)

                // var myCustomObj = {
                // name: 'Abir',
                // age: 21,
                // job: 'Student',
                // msg: function() {
                //         console.log('My name is '+ this.name);
                // }
                // }
                // console.log(myCustomObj);
                // myCustomObj.msg()





                // call method


                // var myCustomObj = {
                // name: 'Zonayed Ahmed',
                // age: 21,
                // job: 'Student',
                // anotherObj: {
                //     name: 'Ahmed Zonayed',
                //     msg: function() {
                //         console.log('My name is: ' + this.name);
                //     }
                // }
                // }
                // myCustomObj.anotherObj.msg();
                // myCustomObj.anotherObj.msg.call(myCustomObj);
                




                // var karim = {
                // name: 'Karim Rahman',
                // dob: 1996,
                // age: function(currentYear) {
                //     console.log(this.name + ' is ' + (currentYear - this.dob) + ' years old!');
                // },
                // msg: function(currentYear){
                //     console.log('Hello, Mr ' + this.name + ' You are ' + (currentYear - this.dob) + ' years old!');
                // }
                // }
                // karim.age(2021);


                // var Rahim = {
                //     name: 'Rahim Ahmed',
                //     dob:2000
                // }

                // karim.age.call(Rahim,2021);
                // karim.msg.call(Rahim,2021);



                //bind method


                // var karim = {
                // name: 'Karim Rahman',
                // dob: 1996,
                // age: function(currentYear,msg) {
                //     console.log(this.name + ' is ' + (currentYear - this.dob) + ' years old! '+ msg);
                // },
               
                // }
               


                // var Rahim = {
                //     name: 'Rahim Ahmed',
                //     dob:2000
                // }

                // var rahimAge=karim.age.bind(Rahim,2022)
                // rahimAge("Hello me Rahim")


                // var obj = {
                // Bangladesh :
                
                
                //     array within object

                // [
                //     {fruit:'apple'},
                //     {fruits:'mango'},
                //     {fruites:'pineapple'},
                //     {fruitsss:'watermelon'},
                //     {fruitssss:'lichi'},

                //     ],
                // India: 'Delhi', 
                // Nepal: 'Kathmandu', 
                // Afganistan: 'Kabul', 
                // Thailand: 'Bangkok'
                // }
               
               
                // for(i=0;i<obj.Bangladesh.length;i++){
                //     console.log(obj.Bangladesh[i]);
                // }
                
                
            
                // // by using normal function

                // function manyFuncHere(){
                //     var capitals = (Object.values(obj));
                //     return capitals;
                //  }
                // console.log(manyFuncHere());
             


                // by using map function

                // var capitals = (Object.values(obj));
                // capitals.map(manyFuncHere);
                // function manyFuncHere(capital){
                //     console.log(capital);
                // }
                // console.log(capitals);







               
                // constructor function

                // var Personwitmethod = function(name, age, job) {
                // this.name = name;
                // this.age = age;
                // this.job = job;
                // this.dateOfBirth = function() {
                //     console.log(this.name + ' is born in ' + (2018 - this.age));
                // }
                // }
                // var samirwithmethod = new Personwitmethod('Samir Hossain', 20, 'Student');
                // samirwithmethod.dateOfBirth();





                

                //javascript prototype



                // var PersonOnly = function(name, age, job) {
                // this.name = name;
                // this.age = age;
                // this.job = job;
                // }

                // PersonOnly.prototype.dateOfBirth = function() {
                // console.log(this.name + ' born in ' + (2018 - this.age));
                // }

                // var zawad = new PersonOnly('Zawad Ahmed', 1, 'Child');
                // zawad.dateOfBirth();

                // PersonOnly.prototype.address = 'Bangladesh';
                
                // console.log(zawad)
                // console.log(zawad.address)
               



             
             
                

                // var PersonOnly = function(name, age, job) {
                // this.name = name;
                // this.age = age;
                // this.job = job;
                // }

                // PersonOnly.prototype={
                //     address: 'Bangladesh',
                //     getName:function(){
                //         return this.name;
                //     }
                // }
                // var zawad = new PersonOnly('Zawad Ahmed', 1, 'Child');

                // console.log(zawad.getName());



               
               
    
                
                // var Person = function(name, age, job) {
                // this.name = name;
                // this.age = age;
                // this.job = job;
                // }


                // var Teacher = function(name, age, job, subject) {
                // this.name = name;
                // this.age = age;
                // this.job = job;
                // this.subject = subject;
                // }



                // var Teacher = function(name, age, job, subject) {
                // Person.call(this, name, age, job);
                // this.subject = subject;
                // }


                // var kamaljeet = new Teacher('Kamaljeet Saini', 53, 'Teacher', 'CSE');
                // console.log(kamaljeet);


                // console.log(kamaljeet.name);
                // console.log(kamaljeet.age);
                // console.log(kamaljeet.job);
                // console.log(kamaljeet.subject);



               
               
               
               
               
                // var GeneralPeople = function(name, age, job) { 
                // this.name = name;
                // this.age = age;
                // this.job = job;
                // }


                // var Athlete = function(name, age, job, prize) {
                // GeneralPeople.call(this);
                // this.prize = 100;
                // }



                
                
                
                // var name = 'Zonayed Ahmed';
                // var age = 10;

                // address = 'Cumilla';

                // console.log('My name is ' + name + ' and I am ' + age + ' years old!');

                // function aFunc() {
                // job = 'Student';
                
                // }

                // aFunc();
                // console.log(job)

                // console.log('I am a ' + job + ' And I am from ' + address);




                 // function calculateAge(dob) {
                //     var age = `I'm ${2018 - dob} years old!`;
                //     return age;
                // }

                // console.log(calculateAge(1996));
                // console.log(calculateAge(2000));






                // const dob = [1996, 1986, 2017, 1989];
                // const currentAge5 = dob.map(myFunction);
                
                // function myFunction(oneDob,index) {  
                //     return age = `${index} : ${2018 - oneDob}`;
                    
                // }
                // console.log(currentAge5); 	







                //array destructuring

                // let me = [1,2,3,4,5,6,8];
                // let[num1,num2,num3,...z] = me;
                // console.log(num1);
                // console.log(num2);
                // console.log(num3);
                // console.log(z);







                //sawpping by destructuring
                // let a = 10;
                // let b = 20;
                // [a,b]=[b,a];
                // console.log(a);
                // console.log(b);





                //object destructuring
                // let studentsInfo2 = {


                //     id:1,
                //     name:'Nothing',
                //     address:'what',
                // }
                // let {id,name,address}=studentsInfo2;
                // console.log(id);
                // console.log(name);
                // console.log(address);


            //     let studentsInfo3 = {


            //     id:2,
            //     name:'Noothing',
            //     address:'wwhat',
            //     languages:{
            //         native:'bangla',
            //         advance:'english',
            //     }
            // }
             
            //     let{id,name,address,languages} = studentsInfo3;
            //     console.log(id);
            //     console.log(name);
            //     console.log(address);
            //     console.log(languages.native);


            //without destructuring
            // console.log(studentsInfo3.languages['native']);
                



            //ধরি নিচে এরকম অবজেক্ট এর ভিতরে অবজেক্ট রয়েছেঃ
                
                
            // var comObj = {
            //     anotherObj: {
            //         anotherNewObj: {
            //             title: 'JavaScript ES6'
            //         }
            //     }
            //     };
            //     const { anotherObj: { anotherNewObj: { title } } } = comObj;
            //     console.log(title);
                
                
                
            //এখন titleতাই অন্যনামে চাইলে আগের টেকনিকগুলো একসাথে মিক্স করলেই হবেঃ

            // const { anotherObj: { anotherNewObj: { title: newTitle } } } = comObj;









            //array find method


            // const array1 = [5, 12, 8, 130, 44];
            

            //     const found = array1.find(my1Function);
            //     function my1Function(values){

            //         return values > 10;
            //     }
            //     console.log(found);




            //     const array2 = [5, 12, 8, 130, 44];

            //     const found2 = array2.findIndex(element => element > 10);
            //     const found3 = array2.find(element => element > 10);
            //     console.log(found2);
            //     console.log(found3);







            
            
            
            
            
            //ইএস৫ এ আমরা ফাংশন কন্সট্রাক্টর এভাবে ইউজ করতে পারতামঃ

            // var Child5 = function(name, dob) {
            // this.name = name;
            // this.dob = dob;
            // }
            // var zawad = new Child5('Zawad Ahmed', 2017);
            // console.log(zawad.name);
            // console.log(zawad.dob);

            // Child5.prototype.currentAge = function() {
            // console.log(this.name + ' is ' + (2018 - this.dob) + ' years old!');
            // }
            // zawad.currentAge();



           
           
           
           
           
          
           
           
            // এখন আমরা উপরের এই সেইম জিনিসটাই ইএস৬ এর সিন্ট্যাক্স ইউজ করে অর্থাৎ ক্লাস (Class) ইউজ করে করবো।



            // class Child6 {
            // constructor(name, dob) {
            //     this.name = name;
            //     this.dob = dob;
            // }

            // currentAge() {
            //     console.log(`${this.name} is ${2018 - this.dob} years old!`);
            // }
            // }


            // const zawad6 = new Child6('Zawad Ahmed', 2017);
            // console.log(zawad6.name);
            // console.log(zawad6.dob);
            // zawad6.currentAge();










            // class PersonClass {
            //     constructor(name, age, job) {
            //         this.name = name;
            //         this.age = age;
            //         this.job = job;
            //     }
            //     }


            //     class TeacherClass extends PersonClass {
            //     constructor(name, age, job, subject) {
            //         super(name, age, job);
            //         this.subject = subject;
            //     }
            //     }

            //     const ourSir = new TeacherClass('Shafiq Sir', 46, 'Assistant Teacher', 'Physics');


            //     console.log(ourSir.name);
            //     console.log(ourSir.age);
            //     console.log(ourSir.job);
            //     console.log(ourSir.subject);
                            



               
               
                // এখন সেইমভাবে আমাদের ক্লাসে যদি কোনো মেথডও থাকে তাহলে সেটাও ইনহেরিট করা যাবে সহজেই। 
                // ধরি আমাদের একটা ক্লাস আছে মেথডসহঃ

                // class PersonClassMeth {
                // constructor(name, age, job) {
                //     this.name = name;
                //     this.age = age;
                //     this.job = job;
                // }
                // dateOfBirth() {
                //     console.log(`${this.name} born in ${2018 - this.age}`);
                // }
                // }

                // class TeacherClassMeth extends PersonClassMeth {
                // constructor(name, age, job, subject) {
                //     super(name, age, job);
                //     this.subject = subject;
                // }
                // }
                // const ourSirMeth = new TeacherClassMeth('Shafiq Sir', 46, 'Assistant Teacher', 'Physics');
                // console.log(ourSirMeth.dateOfBirth());

                    


                


                
                // var arr = [1,2,3,4,5,6,7,8,9];
                // var sum=0
                // for(i=0;i<arr.length;i++){
                //     var sum =sum + arr[i];
                //     console.log(sum);
                // }
                // console.log('Sum of first 9 digits is = ' + sum);




                // var arr2 = [1,2,3,4,5,6,7,8,9];
                // var sum2 = arr.reduce(reduceFunction);
                // function reduceFunction(a,b){
                //     return a+b;
                // }
                // console.log('Sum of first 9 digits is = ' + sum2)













            //     function sayName(name) {
            //     return 'Hello, ' + name;
            // }

            // // Todays Topics

            // // 1. A Function can be stored in a Variable * Passed

            // var hello = sayName;
            //  var fun = sayName('HM Nayem');

            //  console.log(hello);
            //  console.log(fun);

            // console.log(hello('HM Nayem'));

            // var anotherHello = hello;

            // console.log(anotherHello('HM Nayem'));






            // // 2. A Function can be stored in an Array * Passed
            // var arr = [1, 2, 3, anotherHello('Abir')];
            // arr.push(sayName('Jemi'));
            // console.log(arr);






            // // 3. A Function can be stored as an Object Field or Property * Passed
            // var person = {
            //     name: 'HM Nayem',
            //     sayName,
            //     myFunc: function () {
            //         console.log('Hi ' + this.name);
            //     }
            // }

            // console.log(person);
            // console.log(person.myFunc());
            // console.log(person.sayName('ME'));





            // // 4. We can create function as needed  * Passed
            // var sum = 10 + (function () {
            //     return 50
            // })();
            // console.log(sum);





           
           
            // // 5. We can pass function as an arguments  * passed


            // function sayName(name) {
            //     return 'Hello, ' + name;
            // }


            // function wow(name, nothing) {
            //     return nothing(name);
            // }

            // var result = wow('HM Nayem', sayName);
            // console.log(result);


           
            // function sayName(name) {
            //     return 'Hello, ' + name;
            // }


            // function wow(nothing) {
            //     return nothing('Abir');
            // }


            // console.log(wow(sayName))
            





            // 6. We can return function from another function

            // function base(b) {
            //     return function (n) {
            //         var result = 1;

            //         for (var i = 0; i < b; i++) {
            //             result *= n;
            //         }

            //         return result;
            //     }
            // }

            //  var power = base(3);
            //  var result = power(5);

            // var result = base(3)(5);
            // console.log(result);



            // var result2 = 1;
            // var a = 5;
            // var power = 3;
            // for(i=0;i<power;i++){
            //     result2 *= a;
            //     console.log(result2);
            // }

            // console.log(result2);


            // function firstNumber(x){
            //     return x + 5;
            // }
            // function secondNumber(callback){
            //     return callback(10);
            // }
            // console.log(secondNumber(firstNumber));






            
            
            //promise function uses callback function
            
            
          
      //       var data = true;
      //       var promise = new Promise(anotherFunction);
      //       function anotherFunction(resolve,reject){
      //           if (data){
      //               resolve ('Success');
      //           }else {
      //           reject('Error');
      //           }
      //       }

      //  console.log(promise)

//        const aPromise=(control)=>{
//          return new Promise((resolve,reject)=>{
//            if(control){
//              resolve()
//            }else{
//              reject()
//            }
//          })
//        }

// aPromise(true).then(()=>{
// console.log("This is a success")
// })
            //by using anonymous funtion


            // promise.then(function(msg){
            //     console.log(msg);
            // },
            // function (err){
            //     console.log(err);
            // });

            
            
            
            
           
            // var data = false;
            // var promise = new Promise(anotherFunction);
            // function anotherFunction(resolve,reject){
            //     if (data){
            //         resolve ('Success');
            //     }else {
            //     reject('Error');
            //     }
            // }
           
           
            
            
            //by using normal function

            // promise.then(myAnotherFunction, myAnotherFunction2);
            // function myAnotherFunction(msg){
            //     console.log(msg);
                
            // }
            // function myAnotherFunction2(err){
            //     console.log(err)                
                
            // }
        


            // var data = false;
            // var promise = new Promise(anotherFunction);
            // function anotherFunction(resolve,reject){
            //     if (data){
            //         resolve ('Success');
            //     }else {
            //     reject('Error');
            //     }
            // }

            // promise.then((msg)=>{
            //     console.log(msg);
            // }).catch((err)=>{
            //     console.log(err);
            // })


            // const myFunction = (num, callback) =>{

            //     console.log(`Hello, from ${num} function`);
              
            //     callback();

            // }

            // const my2ndFunction = () =>{

            //   console.log('Hello, from my 2nd function.')
            // };

            // myFunction('first', my2ndFunction);
            // my2ndFunction();
            // setTimeout(myFunction('first', my2ndFunction), 2000, )




            // const helloMe = true;

            // const yoo = new Promise((resolve,reject)=>{

            //     if (helloMe){
            //         resolve('true')
            //     }else{
            //         reject('false')
            //     }
            // })

            // yoo.then=((msg)=>{
            //     console.log(msg);
            // })
            // .catch=((err)=>{
            //     console.log(err);
            // });


            
            // var data = false;
            // var promise = new Promise(anotherFunction);
            // function anotherFunction(resolve,reject){
            //     if (data){
            //         resolve ('Success');
            //     }else {
            //     reject('Error');
            //     }
            // }

            // promise.then((msg)=>{
            //     console.log(msg);
            // }).catch((err)=>{
            //     console.log(err);
            // })


        






        //nested callback functions



        //   const task1 = (callback1)=>{
        //     setTimeout(()=>{
        //         console.log("Task 1 completed.")
        //         callback1();
        //     },2000);
        //   };

        //   const task2 = (callback2)=>{
        //       console.log("Task 2 completed.")
        //       callback2()
        //   }

        //   const task3 = (callback3)=>{
        //     setTimeout(()=>{
        //         console.log("Task 3 completed.")
        //         callback3();
        //     },5000)
        // }

        // const task4 = ()=>{
        //     console.log("Task 4 completed.")
            
        // }

        // task1(()=>{
        //     task2(()=>{
        //         task3(()=>{
        //             task4(()=>{

        //             });
        //         });
        //     });
        // });





        //nested Promise
        // const taskOne=()=>{
        //     return new Promise((resolve,reject)=>{
        //         resolve('Task 1 is completed')
        //     });
        // };
        // const taskTwo=()=>{
        //     return new Promise((resolve,reject)=>{
        //         resolve('Task 2 is completed')
        //     });
        // };
        // const taskThree=()=>{
        //     return new Promise((resolve,reject)=>{
        //         reject('Task 3 is not completed')
        //     });
        // };
        // const taskFour=()=>{
        //     return new Promise((resolve,reject)=>{
        //         resolve('Task 4 is completed')
        //     });
        // };

        // taskOne()
        // .then((res)=> console.log(res))
            

        // .then(taskTwo)
        // .then((res1)=>  console.log(res1))
              
            
        // .then(taskThree) 
        // .then((res2)=>console.log(res2))
           
            
        // .then(taskFour)
        // .then((res3)=>console.log(res3))

        // .catch((err)=> console.log(err))
            


        // for(i=0;i<number.length;i++){

        //     console.log(number[i])
        // }

        //var number = 12

        // do{
        //     console.log(number);
        //     number +=1;
        // }while(number<11);
        // console.log('I am from outside the loop.')

        // while(number<11){
        //     console.log(number);
        //     number+=1;
        // }



//       const points = [40, 100, 1, 5, 25, 10];

//       function myFunction() {
//         for (let i = points.length -1; i >= 0; i--) {
//           let j = Math.floor(Math.random() * (i))

//          console.log(j)
         

//           let k = points[i]

          

//           points[i] = points[j]


//           points[j] = k
          
//         }
//         console.log(points)
//         return points
//     }

// myFunction()       



// nulllish coalescing


// function calculateMyItemPrice(description,taxes,price){

//   description=description?? "deafult item"
//   taxes=taxes??.05
//   const total=price*(1+taxes)
//   console.log(`${description} price is ${total} with ${taxes} taxes`)

// }
// calculateMyItemPrice("My item ",.07,100)
// calculateMyItemPrice("My item ",0,110)
// calculateMyItemPrice("",.07,110)



// styling console log

// function calculateMyItemPrice(description,taxes,price){

//   description=description??"deafult item"
//   taxes=taxes??.05
//   const total=price*(1+taxes)
//   console.log(`%c${description} price is ${total} with ${taxes} taxes`,"color:green")

// }
// calculateMyItemPrice("My item ",.07,100)
// calculateMyItemPrice("My item ",0,110)
// calculateMyItemPrice("",.07,110)





// optional chaining


// class Person{
//   constructor(name,address,hobbies){
//     this.name=name,
//     this.address=address,
//     this.hobbies=hobbies
//   }
//   print(){
//     console.log(this)
//   }
  // printName(){
  //   console.log(this.name)
  // }
// }

// function printPersonStreet(person){
  //checks if person exist and then address exist and so on
//   console.log(person?.address?.street)
// }



// const kyle=new Person("kyle",{street:"12345 main st",city:"somewhere"},["bowling","weight lifting"])

// printPersonStreet(kyle)
// kyle.print()
// kyle.printName?.()



// first class function

// function callMyName(name,callback){
//   var myAge=23
//   callback(myAge)
//   console.log("Is it interestting! Yes, It is, Mr. "+name)
// }

// function showMyAge(age){
//   console.log("My age is "+age+" years old.")
// }

// callMyName("Abir",showMyAge)


// function callMyName(name){

//   console.log("Is it interesting! Yes, it is, Mr. "+name)

//   return function nameWithAge(age){
//     console.log("My name is " + name +". I am "+age+" years old")
//   }
// }

// callMyName("abir")(20)



// var obj={
//   Bangladesh:"Dhaka",
//   India:"Delhi",
//   Nepal:"Katmandu",
//   Afghanistan:"Kabul",
//   Thailand:"Bangkok"
// }

// for(values in obj){
//   console.log(obj[values])
// }


// returns an array
// console.log(Object.values(obj))
// this will return ["Dhaka","Delhi", "Katmandu","Kabul","Bangkok"]
// console.log(Object.keys(obj))
// this will return ["Banglkadesg","India","Nepal","Afghaistan","Thailand"]
// Object.keys(obj).map(country=>{

//   console.log(`Capital of ${country} is ${obj[country]}`)
// })

// console.log(obj.Bangladesh)




// this behavior
// const obj={
//   myFunction(){
//     console.log(this)
//   },
//   myFunction3(){
//     function myFunction4(){
//       console.log(this)
//     }
//     return myFunction4()
//   }
// }



// const test1=obj.myFunction
// obj.myFunction()-->obj
// test1()-->global


// const myCustomObj={
//   name:"abir",
//   age:24,
//   job:"student",
//   msg:function(){
//     console.log(this)
//   }
// }
// myCustomObj.msg()
// var newObj=myCustomObj.msg
// newObj()//this would be in global form

//using new keyword
// function myFunction2(){
//   return this
// }

// const myOwn= new myFunction2()
// myOwn.a=100
// console.log(myOwn)
//when you do new keyword an object is created pointing to the  constructor function



// JSON.parse takes json string and transforms it into javascript Object

// let UserStr='{"name":"Sammy","email":"sammy@example.com","plan":"Pro"}'

// let newStr=JSON.parse(UserStr)
// console.log(newStr)


// JSON.stringify takes javsacript object and transfprms it into json string

// let UserObj={
//   name:"Sammy",
//   email:"sammy@example.com",
//   paln:"pro"
// }

// let UserStr2=JSON.stringify(UserObj)
// console.log(UserStr2)