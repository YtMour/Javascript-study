let obj={}
let s='200';
obj[s]=100;
console.log(obj[s]);  //100
console.log(obj.s);  //空
console.log(obj['s']);//空


let o = {nn:100};
let o1={['nn']:200}
let nn='xiao'
 let o2 ={[nn]:300}  //定义错误
console.log(o);
console.log(o1);
// console.log(o2);


let y = 'nn'
let o3 ={x:100,[y]:{y:{z:200}}}
console.log(o3.nn.y.z);
