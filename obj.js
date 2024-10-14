let obj1={}

obj1.name='Yt'
obj1.age="18"
obj1.sex='男'
console.log(obj1);


let obj2={}

obj2.name='tt'
obj2.age="1"
obj2.sex='女'
console.log(obj2);


console.log(obj1.name)//对象属性的访问   有限制
let nn = obj1.name
nn='xiao'
console.log(nn);


obj1.name='yt2'
console.log(obj1);
delete obj1.age
console.log(obj1);

console.log(obj1['name']);//通过中括号访问属性   更通用

let aa='na'
let bb ='me'
console.log(obj1[aa+bb]);




let a=Symbol()//生成唯一标识 防冲突   无法被枚举
let b=Symbol()
console.log(a,b);
console.log(a===b);

obj1 [a] = '124yt'
obj1 [b] = 'qweyt'
console.log(obj1[a]);
console.log(obj1[b]);
console.log(obj1);




// let obj5 = {};
// obj5.x=100;
// let obj6={};
// obj6.y=200;
// obj5.z=obj6;
// console.log(obj5);



let obj5 = {};
obj5.x=100;
obj5.y={}
console.log(obj5);
obj5.y.z=200
console.log(obj5);



