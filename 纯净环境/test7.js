
// //对象
// let obj={name:'zhangsan',age:20}
// console.log(obj);

// //本质上是字符串
// let str = `{'name':"${obj.name}",'age':${obj.age}}`;
// console.log(str);

// //JSON.stringify()方法可以将对象转换为JSON字符串
// console.log(JSON.stringify(obj));

// let tmp ={name:'lisi',age:25,xyz:{xx:[1,2,300]}}
// console.log(JSON.stringify(tmp));

//JSON.parse()方法可以将JSON字符串转换为对象
// let str = '{"name":"lisi","age":25,"xyz":{"xx":[1,2,300]}}';
// let json=JSON.parse(str);
// console.log(json);
// console.log(json.xyz.xx[2]);

//注意：JSON.stringify()方法只能序列化对象，不能序列化函数、undefined、symbol、BigInt等类型的值。
//如果要序列化这些类型的值，需要使用其他方法。
//比如，可以使用JSON.stringify()方法序列化数组，然后再使用JSON.parse()方法反序列化。
//可以包含 Number、String、Boolean、Array、Object、null、undefined 等类型的值。
//不能包含 Function、Symbol、BigInt 等类型的值。
//属性名必须使用双引号，不能使用单引号。
//对象的最后一个属性后面不能加逗号。
