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


let t1 = 43;
let day = t1 % 7;
let x1= parseInt(t1 / 7);
console.log(t1,"天","=",x1,"星期",day,"天")

let t2 = 3661;
let h = parseInt(t2 / 3600);
let min =parseInt((t2-(h*3600)) / 60)
let miao =parseInt((t2-(h*3600)) % 60)

console.log(t2,"秒","=",h,"时",min,"分",miao,"秒")



let x = 4;
let y = (--x) + (x--) + (x * 10);
// let y = A + B + C
//       3/3 +  2/3 + 2 * 10
//   3 + 3 + 2 * 10
// x = 2, y = 26
console.log(x, y);

let a = 6;
let b = 10;
let c = a++ + b + ++a + b++ + ++b + a;
//      7/6 + 10 + 8/8 + 11/10 + 12/12 + 8
// 6 + 10 + 8 + 10 + 12 + 8 = 54
console.log(c);