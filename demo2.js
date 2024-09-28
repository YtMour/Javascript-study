// function func(){
//   console.log('func');

//   function test(){
//   console.log('test');

//     function abc(){
//     console.log('abc');

//     }
//     abc();
//   }
//   test();
// }

// func();


// let a=101;
// if(a===100){
//   var abc = function(){
//     console.log(200);
//   }
// }
// abc();


// function func(){
//   console.log('func');

//   function test(){
//     console.log('test');
//     {
//       function abc(){
//         console.log('abc');
//         }
//     }
//     abc();
//   }
//   test();
// }

// func();



// function func(){
//   console.log('func');

//   function test(){
//     console.log('test');
//     {
//       let abc=function(){   //or   var声明
//         console.log('abc');
//         }
//         abc();
//     }
//       // abc();  or var声明
//   }
//   test();
// }

// func();


console.log(1);
function fn1(){
  console.log(2);
  function fn2() {
      console.log(3);
  }
  fn2();
  console.log(4);
}
fn1();
console.log(5);