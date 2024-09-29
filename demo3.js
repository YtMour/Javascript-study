let a = 100
function abc(){
  let b=200;
  function test(){
    let c =300;
    for (let i = 0;i<3;i++){
      let d = 400;
      console.log(i,d,c,b,a);
    }
  }
}


(function (){
   var a= 111;
   var b=222;
   console.log(a,b);
})();

{
  let a=100;
  let b=200;
  console.log(a,b);
}

(function (a,b){
  console.log(a+b);
}(111,222));