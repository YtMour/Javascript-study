
// // 演示数组的引用行为
// let arr1= [1,2,3,4,5];
// let arr2= arr1;
// console.log(arr1);
// console.log(arr2);

// // 修改 arr1 的第一个元素
// arr1[0] = 10;
// console.log(arr2);


// // 该文件用于演示数组的复制和修改过程
// let arr1= [1,2,3,4,5];
// let arr2= [];
// // 使用循环将arr1的值复制到arr2
// for(let i=0;i<arr1.length;i++){
//   arr2[i]=arr1[i];
// }
// // 修改arr1的第一个元素
// arr1[0] = 10;
// // 打印修改后的arr1
// console.log(arr1);
// // 打印未受影响的arr2
// console.log(arr2);

// //数组的 浅拷贝
// let arr1= [1,2,3,4,5];
// let arr2= arr1.slice();

// // 修改 arr1 的第一个元素
// arr1[0] = 10;
// console.log(arr1);
// console.log(arr2);   // 打印未受影响的arr2


// let obj={name:'zhangsan',age:18};
// let obj2=obj;
// obj.name='lisi';
// console.log(obj);
// console.log(obj2);

//对象的 浅拷贝
// let obj1={name:'zhangsan',age:18};
// let obj2={};
// for(const obj1key in obj1){
//   obj2[obj1key]=obj1[obj1key];
// }
// obj1.name='lisi';
// console.log(obj1);
// console.log(obj2);



// let obj1={name:'zhangsan',age:18};
// let obj2={};
// //通过Object.assign()方法实现对象的浅拷贝
// Object.assign(obj2,obj1);
// obj1.name='lisi';
// console.log(obj1);
// console.log(obj2);


//合并对象   没有的属性会被添加到对象中  已有的属性会被覆盖
// let obj1={name:'zhangsan',age:18};
// let obj2={name:'lisi',img:'http://www.baidu.com/img.jpg'};
// Object.assign(obj2,obj1);
// obj1.name='lisi';
// console.log(obj1);
// console.log(obj2);



//浅拷贝只会拷贝一层对象，如果对象中还有对象，那么只会拷贝一层对象，不会递归拷贝对象中的对象。
//如果有多层对象，那么只会拷贝一层对象。 修改会影响到原对象和副本对象。
// let obj1={name:'zhangsan',age:18,child:{name:'lisi',age:16}};
// let obj2={};
// Object.assign(obj2,obj1);
// obj1.name='lisi';
// obj1.child.age=17;
// console.log(obj1);
// console.log(obj2);

let addr={x:1,y:2};
let obj1={name:'zhangsan',age:20,addr:addr};

//深拷贝
let obj2=JSON.parse(JSON.stringify(obj1));
obj1.name='lisi';
obj1.addr.x=3;
console.log(obj1);
console.log(obj2);
console.log(obj3);