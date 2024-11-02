

// let obj = {
//   name: "John",
//   age: 30,
//   test: function() {
//     console.log(this.name);
//   }
// };

// function func(tmpObj){
//   // tmpObj && tmpObj.test && tmpObj.test();

//   try{
//     mpObj.test();
//   }catch(e){
//     //如果有异常，则捕获异常
//     console.log('catch error');
//   }finally{
//     //不管是否有异常，都会执行finally
//     console.log('finally');
//   }
//   console.log('func');
// }

// func(obj); // This is a test function




// let a = 100;
// let b= 0;
// //手动制作异常
// if(b === 0)throw new Error('除数不能为0');
// console.log(a/b);



//String的一些常用方法
// 创建一个空数组
let arr = new Array();
//String对象
// 创建一个String对象
let str = new String('hello world');
console.log(str);
//原始类型
// 创建一个原始类型字符串
let str2 = 'hello world';
console.log(str2);
console.log(str2.charAt(0)); // 获取字符串的第一个字符
console.log(str2[0]); // 获取字符串的第一个字符

let str3 = 'ytttt'
//拼接，可以给多个参数
// 字符串拼接
console.log(str2.concat(str3));

// 检查字符串的开始和结尾
console.log(str2.startsWith('he')); // 检查是否以'he'开头
console.log(str2.endsWith('ld')); // 检查是否以'ld'结尾
console.log(str2.includes('he')); // 检查是否包含'he'

// 对字符串进行重复、去除空格和替换
console.log(str2.repeat(2)); // 字符串重复两次
console.log(str2.trim()); // 去除字符串两端的空格
console.log(str2.replace('he', 'hi')); // 替换字符串部分内容
console.log(str2.slice(2, 5)); // 获取字符串的子串
console.log(str2.split(' ')); // 将字符串分割成数组
console.log(str2.indexOf('l')); // 查找字符首次出现的索引
console.log(str2.lastIndexOf('l')); // 查找字符最后一次出现的索引
console.log(str2.localeCompare('hello')); // 比较字符串的排序
console.log(str2.toLocaleLowerCase()); // 转换为小写
console.log(str2.toLocaleUpperCase()); // 转换为大写
console.log(str2.toLocaleString()); // 返回字符串的本地字符串表示
console.log(str2.match(/l/g)); // 匹配所有出现的字符'l'
console.log(str2.search('l')); // 返回字符'l'首次出现的位置
console.log(str2.codePointAt(0)); // 获取字符的Unicode编码
console.log(str2.normalize()); // 规范化字符串
console.log(str2.padStart(10)); // 在字符串前填充空格至指定长度
console.log(str2.padEnd(10)); // 在字符串后填充空格至指定长度
console.log(str2.matchAll(/l/g)); // 返回匹配所有字符'l'的迭代器
console.log(str2.raw()); // 返回模板字符串的原始内容
console.log(str2.repeatRight('2')); // 字符串右侧重复某个内容

