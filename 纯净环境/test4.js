// let obj ={
//   name: "John",
//   age: 30,
// }

// console.log(Object.getOwnPropertyDescriptor(obj, "name"));
// console.log(Object.getOwnPropertyDescriptor(obj, "age"));
// //一次性获取所有属性的描述符
// console.log(Object.getOwnPropertyDescriptors(obj));
// obj.name = "Mike";
// console.log(obj.name);

// delete obj.age;

// for (const objKey in obj) {
//   console.log(obj[objKey]);
// }



//Getter和Setter
// 1. 定义一个对象，并用Object.defineProperty()方法定义name属性，并设置get和set方法
// 2. 在get方法中，打印一句话，并返回name属性的值
// 3. 在set方法中，打印一句话，并判断传入的值是否为空，如果为空，则抛出一个错误，否则将name属性的值设置为传入的值
// 4. 调用name属性的get和set方法，打印返回值和打印日志，并测试传入空值
// let obj ={
//   _name: "John",
//   age: 30,
// }

// Object.defineProperty(obj,'name',{
//   enumerable:true,
//   configurable:true,
//   get:function(){
//     console.log('get name');
//     return this._name;
//   },
//   set:function(value){
//     console.log('set name',value);
//     if(!value){
//       throw new Error('不能传入假值');
//     }else{
//       this._name = value;
//     }

//   }
// })


// obj.name = 'Mike';
// console.log(obj.name);
// obj.name='jk';
// console.log(obj.name);
// console.log(obj)


//简写 getter和setter
//在ES5中没有
// let obj ={
//   _name: "John",
//   age: 30,
//   get name(){
//     console.log('get name');
//     return this._name;
//   },
//   set name (value){
//     console.log('set name',value);
//     if(!value){
//       console.log('不能传入假值');
//     }else{
//       this._name = value;
//     }

//   }
// }
// obj.name = 'Mike';
// console.log(obj.name);
// obj.name='jk';
// console.log(obj.name);
// console.log(obj)


// let obj1 ={};
// let obj2 =new Object;
// let obj3 =new Object();

// console.log(obj1, obj2, obj3);

// let obj4 = Object.create(null);
// console.log(obj4);


// let Person = function() {};

// let obj6 = Object.create(Person.prototype, {
//   'name': { value: 'jk', enumerable: true },
//   'age': {
//     value: 20,
//     enumerable: true,
//     writable: false, // 设置为不可写
//     configurable: true
//   }
// });

// console.log(obj6); // 输出 obj6 对象

// // 使用 setter 来修改 age 属性
// Object.defineProperty(obj6, 'age', {
//   set: function(newValue) {
//     if (typeof newValue === 'number') {
//       this._age = newValue; // 存储在私有属性中
//     } else {
//       console.log("请提供一个数字作为年龄。");
//     }
//   },
//   get: function() {
//     return this._age;
//   },
//   enumerable: true,
//   configurable: true
// });

// obj6.age = 25; // 修改年龄
// console.log(obj6.age); // 输出更新后的年龄




// class Animal {}
// class Person extends Animal {name= 'yt';}
// class Teacher extends Person {}
// let teaher = new Teacher();
// let obj5 = Object.create(Person.prototype);
// console.log(obj5);
// console.log(new Person());

// let obj6={} // Objcet.prototype
// Object.setPrototypeOf(obj6,Person.prototype);
// console.log(obj6);


// console.log(Person.prototype.isPrototypeOf(obj6))




// function Animal(aa){
//   this.aa=aa;
// }
// function People(bb,cc){
//   Animal.call(this,bb);
//   this.cc=cc;
// }
// // People.prototype = new Animal();

// //写法不一样 最终效果一样
// // Object.setPrototypeOf(People.prototype,Animal.prototype);
// People.prototype = Object.create(Animal.prototype);
// let p1 = new People();
// console.log(p1);



//Object的其他方法

// class Animal {}
// class Person extends Animal {
//   name= 'yt';
//   sayhHello(){
//     console.log('hello');
//   }
// }
// class Teacher extends Person {
//   age=20;
//   say(){
//     console.log('say');
//   }
// }
 
// let teacher = new Teacher();
// console.log(teacher);
// console.log(Object.hasOwn(teacher,'name'));
// console.log(Object.hasOwn(teacher,'age'));
// console.log(Object.hasOwn(teacher,'sayhHello'));
// console.log(Object.hasOwn(Person.prototype,'sayhHello'));
// //通过类方法去调用
// console.log(Object.hasOwn(Teacher.prototype,'say'));
// //Teacher.prototype.hasOwnProperty  通过实例去调用
// console.log(Teacher.prototype.hasOwnProperty('say'));

// let obj=Object.create(null);
// obj.name='jk';
// //通过Object.create(null)创建的对象没有原型链，所以没有hasOwnProperty方法
// // console.log(obj.hasOwnProperty('name'));
// //更通用
// console.log(Object.hasOwn(obj,'name'));


//Object.getOwnPropertyNames()方法
// let obj={
//   name: 'jk',
//   age: 20,

// }
// Object.defineProperty(obj,'age',{
//   enumerable:true,
// })
// for(const objkey in obj){
//   console.log(objkey);
// }
// console.log(Object.getOwnPropertyNames(obj));


//Object.getOwnPropertySymbols()方法
// let s1 =Symbol('s1');
// let s2 =Symbol('s2');
// let obj2={
//   [s1]:'hello',
//   [s2]:'world',
//   name:'jk'

// }
// for(const objkey in obj2){
//   console.log(objkey);
// }
// console.log(Object.getOwnPropertySymbols(obj2));
// console.log(obj2[Object.getOwnPropertySymbols(obj2)[0]]);


// console.log(new Date());
// console.log(new Date().toLocaleString());

// console.log({}.toLocaleString());
// console.log({name:'awa'}.toString());
// console.log({name:'jk'}.valueOf());

//冻结  无法对里面的属性进行修改
// let obj ={name:'awa',age:20}
// Object.freeze(obj);
// //判断是否被冻结
// console.log(Object.isFrozen(obj));
// obj.name='jk';
// console.log(obj);

//浅冻结  只会冻结第一层  无法冻结后面的属性
let obj ={name:'awa',age:20,xxx:{x:100}}
Object.freeze(obj);
console.log(Object.isFrozen(obj));
console.log(Object.isFrozen(obj.xxx));
obj.name='jk';
console.log(obj);
obj.xxx.x=200;
console.log(obj);

Object.freeze(obj.xxx);
console.log(Object.isFrozen(obj.xxx));
obj.xxx.x=300;
console.log(obj);
