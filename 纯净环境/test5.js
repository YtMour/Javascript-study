

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




function filter(num){
  for(let i=0;i<arr.length;i++){
    if(arr[i]>num){
      console.log(arr[i]);
    }
  }
  console.log('==========');
}
let arr= [1,200,500,75,85,97,66]

filter(100)