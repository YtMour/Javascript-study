// let a=Symbol()//无法遍历，但可以得到
// let o ={x:100,y:200,z:300 , [a]:400}

// for(const objKey in o){
//   console.log(objKey,o[objKey]);
  
// }
// let aa=Object.getOwnPropertySymbols(o);
// console.log(aa);

// function test(a){
//   console.log('xiao ' + a);
//   return 1000;
// }

// let o ={x:100,y:200,z:300 , s:test}
// console.log(o.s('yt'));



//完整
// let o={
//   x:100,y:200,
//     s:function(a){
//     console.log('xiao '+a);
//     return 666;
//   }
// };

// console.log(o.s('xx'));

//简化
// let x= 100;
// let o={
//   x,  //相当于  x:x 简写
//   y:200,
//     s (a){     //s:function(a)
//     console.log('xiao '+a);
//     return 666;
//   }
// };

// console.log(o.s('xx'));


// let o = {name:"xiao",age:18}
// let name = o.name;
// let age = o.age;
// console.log(name,age);


// let {name,age} = {name:"xiao",age:18}
// console.log(name,age);    //只限名字和变量一样

let {name: a,age: b} = {name:"xiao",age:18}
console.log(a,b);



