
// let YtMour;

// (function(){
//   let a=5;
//   function test(){
//     console.log(a);
//   }
//   YtMour=test;
// })();


// (function(){
//   YtMour();
// })();



// let YtMour=(function(){
//   let a=5;
//   function test(){
//     console.log(a);
//   }
//   return test;
// })();


// (function(){
//   YtMour();
// })();

// let YtMour;
// let A;
// (function(){
//   let a=5;
//   function test(){
//     console.log(a);
//   }
//   A=a;
//   YtMour=test;
  
// })();


// (function(){
//   console.log((A));
  
//   YtMour();
// })();


// let obj={};
// (function(){
//   let a=5;
//   function test(){
//     console.log(a);
//   }
//   obj.A=a;
//   obj.YtMour=test;
  
// })();


// (function(){
//   console.log((obj.A));
  
//   obj.YtMour();
// })();



// let obj=(function(){
//   let a=5;
//   function test(){
//     console.log(a);
//   }
//   return{
//     a:a,
//     test:test
//   }
  
// })();


// (function(){
//   console.log((obj.a));
  
//   obj.test();
// })();



//全局对象赋值
// (function(){
//   let a=5;
//   function test(){
//     console.log(a);
//   }
//   window.ATest=a;
//   window.YtMour=test;
  
// })();


// (function(){
//   console.log((window.ATest));
  
//   window.YtMour();
// })();




//全局对象简写  不推荐
// (function(){
//   let a=5;
//   function test(){
//     console.log(a);
//   }
//   ATest=a;
//   YtMour=test;
  
// })();


// (function(){
//   console.log((ATest));
  
//   YtMour();
// })();


//自有属性 自有方法
// function test(a){
//   console.log(100);
// }
// console.log(test.length);
// console.log(test.name);
// test();
// test.call();
// test.apply();


// function test(a,b){
//   console.log(this,a,b);
// }
// let obj1={name:'obj1'};
// let obj2={name:'obj2'};
// test(100,200);
//  test.call(obj1,100,200);   //利用obj1 去调用test函数
//  test.call(obj2);

// test.apply(global);
// test.apply(obj1, [100,200]);
// test.apply(obj2);



// function func(a,b){
//   console.log(this,a,b);
// }
// func(100,200);
// let obj1={xxx:300};
// let newFunc=func.bind(obj1);
// newFunc(400,500);

// let newFunc2=func.bind(obj1,100);
// newFunc2(300);


//构造函数中 传递返回值  没有意义 不起作用
// class Person{
//   constructor(name,age){
//     this.name=name;
//     this.age=age;
//   }
// }
//   let Person1=new Person('Tom',20);
//   console.log(Person1);
//   let Person2=new Person('Jerry',30);
//   console.log(Person2);



// class Person{
//   //似有属性   #开头    必须先声明不可省略
//   #name;
//   #age =18;
//   constructor(name,age){
//     this.#name=name;
//     this.#age=age;
//   }
//   getAge(){return this.#age;}
//   setAge(age){
//     if (age>=0 && age<=120){
//     }else{
//       console.log('年龄不合法');
//       return;
//     }
//     this.#age=age;
//   }
//   getNmae(){return this.#name;}
//   setNmae(name){this.#name=name;}


// }
//   let Person1=new Person('Tom',20);
//   Person1.setAge(25);
//   let age=Person1.getAge();
//   console.log(Person1,age);
//   let Person2=new Person('Jerry',30);
//   console.log(Person2);



//简写
// class Person{
//   //似有属性   #开头    必须先声明不可省略
//   #name;
//   #age =18;
//   constructor(name,age){
//     this.#name=name;
//     this.#age=age;
//   }
//   get age(){return this.#age;}
//   set age(age){
//     if (age>=0 && age<=120){
//     }else{
//       console.log('年龄不合法');
//       return;
//     }
//     this.#age=age;
//   }

// }
//   let Person1=new Person('Tom',20);
//   Person1.age=25;

//   console.log(Person1.age);




//继承
// class Person{
//   //私有属性   #开头    必须先声明不可省略
//   #name;
//   #age;
//   #sex;
//   constructor(name,age,sex){
//     this.#name=name;
//     this.#age=age;
//     this.#sex=sex;
//   }
//   get name(){return this.#name;}
//   get age(){return this.#age;}
//   get sex(){return this.#sex;}

// }
// let p1=new Person('Tom',20,'male');
// console.log(p1.name,p1.age,p1.sex);

// class Teacher extends Person{
//   teach(){
//     console.log('教学');
//   }
// }
// let p2 =new Teacher('Jerry',30,'male');
// console.log(p2.name);
// p2.teach();



// class Student extends Person{
//   study(){
//     console.log('学习');
//   }
// }

// let p3=new Student('Lily',25,'female');
// console.log(p3.name);
// p3.study();




// class Person{
//   //似有属性   #开头    必须先声明不可省略
//   #name;
//   #age;
//   #sex;
//   constructor(name,age,sex){
//     this.#name=name;
//     this.#age=age;
//     this.#sex=sex;
//   }
//   get name(){return this.#name;}
//   get age(){return this.#age;}
//   get sex(){return this.#sex;}
//   sayHello(){
//     console.log(`Hello,${this.#name}`);
//   }
// }
// let p1=new Person('Tom',20,'male');
// console.log(p1.name,p1.age,p1.sex);
// p1.sayHello();

// class Teacher extends Person{
//   teach(){
//     console.log('教学');
//   }
//   sayHello(){
//     console.log(`Hello,${this.name}`);
//   }
//   toString(){
//     return `${this.name} is a teacher`;
//   }
// }

// let p2 =new Teacher('Jerry',30,'male');
// console.log(p2.name);
// p2.teach();
// p2.sayHello();
// console.log(p2,p2.name);
// console.log(p2.toString());





//重写构造函数
// class Person{

//   #name;
//   #age;
//   #sex;
//   constructor(name,age,sex){
//     this.#name=name;
//     this.#age=age;
//     this.#sex=sex;
//   }
//   get name(){return this.#name;}
//   set name(name){this.#name=name;}
//   get age(){return this.#age;}
//   get sex(){return this.#sex;}
//   sayHello(){
//     console.log(`Hello,Person`);
//   }
//   static test(){
//     console.log('test Person');
//   }
// }


// class Teacher extends Person{
//   constructor(name,age,sex){
//       super(name,age,sex);
//       this.name=name+' teacher';
//       this.flag=1;
//     }
//   teach(){
//     console.log('教学');
//     //this.sayHello();
//     super.sayHello();
//   }
//   sayHello(){
//     console.log(`Hello,Teacher`);
//   }
//   static test(){
//     console.log('test Teacher');
//   }

// }

// let p2 =new Teacher('Jerry',30,1);
// console.log(p2.name);
// console.log(p2);
// p2.teach();
// Person.test();
// Teacher.test();



//多态
class Demo{
  sayHello(){
    console.log('Hello,Demo');
  }
}

class Test extends Demo{
  sayHello(){
    console.log('Hello,Test');
  }
}
//要自己额外进行检查   校验
function abc(obj){
  if(obj instanceof Demo){
    obj.sayHello();
  }
  // obj && obj.sayHello && obj.sayHello();
  // obj.sayHello();
}

let demo=new Demo();
let test=new Test();

abc(demo)
abc(test)
abc(100)

console.log(demo instanceof Demo);
console.log(test instanceof Test);
console.log({} instanceof Demo);

