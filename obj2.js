let o1={x: 100,y:200,c:300}//对象字面量    简写

console.log(o1);

let o2={'x': 100,'y':200,'c':300}
console.log(o2.x);

let a='x'
let b='y'

let o3={[a+b]:100,[b]:200}
console.log(o3.y);
console.log(o3.xy);

let o4={'x':100,'y':{z:200}}
console.log(o4.y.z);


