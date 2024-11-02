// import * as mm from './test9.js'

// console.log(mm.func());

// console.log(mm.default.yy());


// import { func } from './test9.js';
// import { func as f} from './test9.js';
// //default必须要起别名  才能使用
// import { default as dd} from './test9.js';


//动态导入
let x = 100
if(x === 100){
  import('./test9.js').then(res => {
  // res.default.yy();
  console.log(res.default.yy());
  })
}