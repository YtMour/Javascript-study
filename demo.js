console.log("this is one js code");

var a;
a= 100;

var b=200,c; //or   var b=200,c=30
//默认值undefined
//null和undefined没有方法调用

let g = 300;

console.log(a,b,c,g);

//常量   一般全大写  或   _  分开
const PI = 3.14;
const YT_MOUR='YtMour';
console.log(PI,YT_MOUR);

//小驼峰 xiaoTuoFeng
//大驼峰 DaTuoFeng
//_命名  xia_hua_xian

console.log(typeof a);//or (typeof (a))   //typeof返回变量里 存储的数据的类型

console.log(Number.MIN_VALUE);//能表示的  最小值 和 最大值
console.log(Number.MAX_VALUE);// 进行+-运算  也不会改变最大最小
//当超出  或  小于  最大最小很多时  会返回无穷大 和 负无穷
//当输出的值，超过某一范围，会失去一定的精度

//大整数，任意长度，结尾带 n  结尾，只能与大整数相互运算
let big = 9n;

// BigInt  可以直接生成一个大整数

//转字符串
console.log(PI.toString());
console.log(YT_MOUR.toString());

//Symbol 创建唯一标识   不可枚举
let s1 = Symbol();
let s2 = Symbol();
console.log(s1,typeof s);
console.log(s2,typeof s);
console.log(s1===s2);

//字符转
//空字符串 unll 纯空格 都会转换为0
let c1="100";
c1=Number(c1);
console.log(c1+100);

//遇到不是数字，舍去后面    111aaaa  转换后 111
let d1=parseInt("111", 16);//可转换进制   默认10进制
console.log(d1,typeof d1);


let d2=parseFloat("100.8")//解析小数
console.log(d2,typeof d2)