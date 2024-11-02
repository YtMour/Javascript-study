

// let obj ={
//   sayHello: function(){
//     console.log("Hello, world!");
//   }
// };


// if(obj){
//   if(obj.sayHello){
//     obj.sayHello();
//   }
// }

// obj && obj.sayHello && obj.sayHello();

// //可选链 方法
// obj?.sayHello?.()

// let arr1=[]
// let arr2=new Array()
// let arr3=new Array(5)

// arr3[0]=100
// arr3[1]=200
// arr3[2]=300
// arr3[3]=400
// arr3[4]=500
// arr3[1]=arr3[4]

// let arr4=[1,2,3,4,5,6]
// console.log(arr1)
// console.log(arr2)
// console.log(arr3)
// console.log(arr3[0])
// console.log(arr4);
// console.log(arr4.length);
// //数组不会越界 输出undefined
// console.log(arr4[8]);

// //数组会自动扩容 输出10
// arr4.length=10;
// console.log(arr4);
// console.log(arr4.length);

// arr4.length=2;
// console.log(arr4);
// console.log(arr4.length);



// var a=50;
// var arr=[
//   'abc',
//   10,
//   [100,200],
//   {x:1,y:2},
//   function(){
//     console.log('hello');
//   },
//   function(num){return num},
//   function(){return 600}(),
//   a+10
// ]
// console.log(arr);
// console.log(arr[5](1000));
// console.log(arr[6]);
// console.log(arr[2][1]);
// console.log(arr[3].x);



// let arr1 = [100,200,300,400,500];
// console.log(arr1[0]);
// //at 可以取 负 索引
// console.log(arr1.at(-1));

// let arr1 = [100,200];
// let arr2=[300,400,500];
// //数组合并
// console.log(arr1.concat(arr2));


// // 创建一个数组 arr1，包含多个数字
// let arr1 = [100,200,300,400,300,500];
// //先出现的元素的索引
// console.log(arr1.indexOf(300)); // 查找元素 300 在数组中的第一个索引
// //最后出现的元素的索引
// console.log(arr1.lastIndexOf(300)); // 查找元素 300 在数组中的最后一个索引
// //查找元素是否存在
// console.log(arr1.includes(300)); // 判断元素 300 是否存在于数组中
// //查找元素是否存在 从索引2开始
// console.log(arr1.includes(300,2)); // 从索引 2 开始判断元素 300 是否存在
// //查找元素是否存在 从索引2开始 到索引4结束
// console.log(arr1.includes(300,2,4)); // 从索引 2 到 4 判断元素 300 是否存在
// //添加元素到数组末尾
// console.log(arr1.push(600,888,999),arr1); // 向数组末尾添加元素并输出新数组

// console.log(arr1.pop(),arr1); // 移除数组末尾的元素并输出这个移除的元素和新数组
// console.log(arr1.shift(),arr1); // 移除数组第一个元素并输出这个移除的元素和新数组
// console.log(arr1.unshift(1000,2000),arr1); // 在数组第一个位置添加元素并输出新数组
// console.log(arr1.splice(2,0,3000,4000),arr1); // 在索引 2 位置插入元素 3000 和 4000 并输出新数组
// console.log(arr1.splice(2,2),arr1); // 从索引 2 开始删除 2 个元素并输出这个删除的元素和新数组
// console.log(arr1.slice(2,4),arr1); // 从索引 2 到 4 截取数组并输出新数组
// console.log(arr1.map(function(item){return item*2}),arr1); // 遍历数组并将每个元素乘以 2 并输出新数组
// console.log(arr1.filter(function(item){return item<400}),arr1); // 过滤数组中小于 400 的元素并输出新数组
// console.log(arr1.reduce(function(prev,curr){return prev+curr}),arr1); // 遍历数组并求和并输出结果和新数组
// console.log(arr1.reduceRight(function(prev,curr){return prev+curr}),arr1); // 遍历数组并从右向左求和并输出结果和新数组
// console.log(arr1.some(function(item){return item<400}),arr1); // 判断数组中是否有元素小于 400 并输出结果和新数组
// console.log(arr1.every(function(item){return item<400}),arr1); // 判断数组中是否所有元素都小于 400 并输出结果和新数组
// console.log(arr1.sort(function(a,b){return a-b}),arr1); // 排序数组并输出结果和新数组
// console.log(arr1.reverse(),arr1); // 反转数组并输出结果和新数组




// let arr = [1,2,3,4,5,5,700,800,1,700,2];
// let newArr=[];
// for(let i=0;i<arr.length;i++){
//   if(arr.indexOf(arr[i])===i){
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);




// function filterD(num){
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]>num){
//       console.log(arr[i]);
//     }
//   }
//   console.log('==========');
// }
// function filterX(num){
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]<num){
//       console.log(arr[i]);
//     }
//   }
//   console.log('==========');
// }
// let arr= [1,200,500,75,85,97,66]

// filterD(100)
// filterD(50)

// filterX(100)
// filterX(50)




// function filter(num,func){
//   for(let i=0;i<arr.length;i++){
//     if(func(arr[i],num)){  
//       console.log(arr[i]);
//     }
//   }
//   console.log('==========');
// }



// let arr= [1,200,500,75,85,97,66]
// function test1(num1,num2){
//   return num1>num2;
// }
// function test2(num1,num2){
//   return num1<num2;
// }
// function test3(num1,num2){
//   return num1=num2;
// }
// filter(100,test1)
// filter(50,test2)



// let arr= [1,200,500,75,85,97,66]
// // arr.sort()
// //从小到大排序
// arr.sort(function(num1,num2){
//   console.log(num1,num2);
  
//   return num1-num2;
// })
// console.log(arr);



//数组遍历  一般都是同类型的元素
// let arr = [1,200,500,75,85,97,66];
// for(let i=0;i<arr.length;i++){
//   console.log(arr[i]);
// }

// let arr =[
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],c=0;
// for(let i=0;i<arr.length;i++){
//   console.log(arr[i]);
  
//   for(let j=0;j<arr[i].length;j++){
//     console.log(arr[i][j]);
//     c++;
//   }
// }

// 该文件包含对数组的遍历示例
// 首先使用 for...in 循环遍历数组
// let arr = [1,200,500,75,85,97,66];
// for(const arrkey in arr){
//   console.log(arr[arrkey]);
// }

// 然后使用 for...of 循环遍历数组
// let arr = [1,200,500,75,85,97,66];
// for(const arrkey of arr){
//   console.log(arrkey);
// }
//区别 for in 循环可以遍历数组的键名，for of 循环可以遍历数组的元素值。
//for in 是无序的    for of 是有序的


// let obj = {x:200,y:300,z:400};
// for (const objkey in obj) {
//   console.log(obj[objkey]);
// }

//for of 遍历的是iterable接口的对象，可以是数组，字符串，Map，Set，TypedArray，arguments对象等。
// for (const objkey of obj) {
//   console.log(objkey);
// }


// let arr = [1,200,500,75,85,97,66];
// let newArr = arr.map(function(value,index,array){
//   // console.log(value,index,array) ;
//   console.log(value);
//   return value+10;
// })
// console.log(newArr);



// let arr = [1,200,500,75,85,97,66];
// //forEach 没有返回值，只用来遍历数组 不会改变原数组
// arr.forEach(function(value,index,array){
//   // console.log(value,index,array) ;
//   console.log(value);

// })



// let arr = [1,200,500,75,85,97,66];
//  let newArr = arr.filter(function(value,index,array){
//    console.log(value);
//    //过滤
//    return value>50;
//  })
// console.log(newArr);


//循环遍历数组 并进行运算 求和
// let arr = [1,200,500,75,85,97,66];
// let newArr = arr.reduce(function(a,b){
//   return a+b;
// },100)//可以赋予 初始值
// console.log(newArr);


//数组降维   扁平化  只能降一维  可以被链式调用
// let arr = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ];
// console.log(arr.flat());


// let arr = [
//   [1,2,3,[33,88]],
//   [4,5,6],
//   [7,8,9]
// ];
// let newArr = arr.flatMap(function(value,index,array){
//   // console.log(index,value);
//   return value;
// });
// console.log(newArr);


// let arr = [1,200,500];
// let people={name:'zhangsan',age:20};
// function func(args,obj){
//   args[2]=1000;
//   console.log(args);
//   obj.age=30;
//   console.log(obj);

// }
// func(arr,people);



// let people={name:'zhangsan',age:20};
// function func(){
//   let arr =[1,2,3];

//   return arr;
// }

// let newArr = func();
// console.log(newArr);
// console.log(newArr[2]);
// newArr[0]=999;
// console.log(newArr);


//arguments对象 类数组 对象  代表函数调用时传入的参数
// function func(){
//   // console.log(arguments);
//   for(let i=0;i<arguments.length;i++){
//     console.log(arguments[i]);
//   }
//   let argsArr = Array.prototype.slice.call(arguments);
//   console.log(argsArr);
  
//   console.log('==========');
  
// }
// func(100);
// func(100,200,300);




// function func(...arr){
//   console.log(arr);

// }
// func(100);
// func(100,200,300);


//数组解构
// let arr = [100,200,300];

// let a=arr[0];
// let b=arr[1];
// let c=arr[2];

// console.log(a,b,c);
//简写解构
// let [a,b,c] = arr;
// console.log(a,b,c);
//当数组元素个数不够时，可以设置默认值
//当元素足够 则输出数组元素
// let arr = [100,200,300,999];
// let [a,b,c,d=888]=arr;
// console.log(a,b,c,d);

//可以进行展开运算  展开数组元素
// let arr = [100,200,300];
// let [a,...b]=arr;
// console.log(a,b);



//函数参数直接解构
// let arr=[1,2,3,4,5,6,7,8,9];
// function test([a,b,c]){
//   console.log(a,b,c);
// }
// test(arr);

//变量交换
// let a=100;
// let b=200;
// [a,b]=[b,a];
// console.log(a,b);


//数组练习

let arr = [64,50,71,33,32,94,81,55,40,45,56,39,28,51,67,75,20,56,67,9]
let newArr1 = arr.slice(0,10).sort(function(a,b){
  return a-b;
});
let newArr2 = arr.slice(10).sort(function(a,b){
  return b-a;
});
let newArr3 = [...newArr1,...newArr2];
console.log(newArr1);
console.log(newArr2);
console.log(newArr3);
