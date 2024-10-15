// const {VM, VMScript} = require("vm2");
// const fs = require("fs");
//
// const vm = new VM();				                            //创建虚拟机
// const code = fs.readFileSync("./input.js");		                //读入JS代码
// const script = new VMScript(code, "./debugJS.js");		        //创建脚本
// const result = vm.run(script);			                        //运行脚本，返回结果
// console.log(result);
// //fs.writeFileSync("./output.js", code);


// let xjb_require = require;
// require = undefined;
// console.log(require);
// console.log(xjb_require);
//
// module = undefined;
// console.log(module);
// delete process;
// //console.log(process);
// //console.log(global);
// //console.log(Buffer);
// //console.log(SharedArrayBuffer);

const {VM, VMScript} = require("vm2");
const fs = require("fs");
const path = require('path');

// 创建虚拟机
const vm = new VM({
    sandbox: {setTimeout, xjb_require: require}
});

// 读取并创建脚本
const code = fs.readFileSync(path.join(__dirname, './input.js'), 'utf8');
const script = new VMScript(code, path.join(__dirname, './debugJS.js'));

try {
    // 删除一些全局变量
    vm.run(`['global', 'SharedArrayBuffer', 'GLOBAL', 'root', 'VMError', 'Buffer'].forEach(v=>delete this[v])`);

    // 运行脚本并返回结果
    const result = vm.run(script);
    console.log(result);
} catch (err) {
    console.error('Error running script:', err);
}

//fs.writeFileSync("./output.js", code);




// global.a = 100;
// console.log(global.a);
// console.log(a);

// var a = 200;
// console.log(this.a);

// console.log(globalThis);
// console.log(globalThis === global);




















