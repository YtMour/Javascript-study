

// class Demo{
//   naem="demo";
//   sayHello(){
//     console.log("hello "+this.naem);
//   }
// }

// console.log(new Demo());


// class Demo{
//   naem="demo";
//   sayHello=function(){
//     console.log("hello "+this.naem);
//   }
// }

// console.log(new Demo());
// console.log(new Demo());
// console.log(new Demo().sayHello===new Demo().sayHello);


//原型对象获取之一
// class Demo{
//   naem="demo";
//   sayHello=function(){
//     console.log("hello "+this.naem);
//   }
// }
// let demo=new Demo();
// console.log(demo);
// console.log(demo.__proto__);
// console.log(Object.getPrototypeOf(demo));
// console.log(Demo.prototype);
// console.log(Demo.prototype===Object.getPrototypeOf(demo));
// console.log(Demo.prototype===demo.__proto__);
// console.log(demo.__proto__===Object.getPrototypeOf(demo));
// let demo2=new Demo();
// console.log(demo2.__proto__===demo.__proto__);



//原型链    对象复杂的程度不同  原型链的长度也不同
// class Demo{}

// class Test extends Demo{
//   sayHello(){
//     console.log("hello");
//   }
// }
// let boj = new Test();
// //Test.prototype -->Demo.prototype -->Object.prototype
// //Demo.prototype -->Object.prototype --> null


// //继承时 子类的原型就是父类的实例
// class Animal{}
// class Prson extends Animal{}
// class Teacher extends Prson{}
// //teacher --> new Person --> new Animal --> new Object -->object.prototype --> null
// //        Teacher.prototype --> Person.prototype --> Animal.prototype --> Object.prototype --> null



//旧类

function People(){
  this.name="people";
  this.age=20;

}
People.prototype.sayHello=function(){
  console.log("hello "+this.name);
}

People.say =function(){
  console.log("say");
}


let obj=new People();
console.log(obj);
console.log(People.prototype);
obj.sayHello();
People.say();




