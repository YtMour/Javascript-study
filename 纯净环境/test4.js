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
let obj ={
  _name: "John",
  age: 30,
  get name(){
    console.log('get name');
    return this._name;
  },
  set name (value){
    console.log('set name',value);
    if(!value){
      console.log('不能传入假值');
    }else{
      this._name = value;
    }

  }
}
obj.name = 'Mike';
console.log(obj.name);
obj.name='jk';
console.log(obj.name);
console.log(obj)