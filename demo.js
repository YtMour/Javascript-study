console.log("this is one js code");

var a;
a= 100;

var b=200,c; //or   var b=200,c=30
//默认值undefined

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

