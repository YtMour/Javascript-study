



// let plaintxt = "Hello World";

// let table = "0123456789abcdef";
// let ciphertext = "";
// for(let i=0;i<plaintxt.length;i++){
//   let ascii = plaintxt.charCodeAt(i);
//   let l = ascii >> 4;
//   let r = ascii & 0xF;
//   ciphertext += table[l] + table[r];
// }
// console.log(ciphertext);



// // 遍历给定字符串的每个字符并输出其对应的十六进制值
// for(let i=0;i<plaintxt.length;i++){
//     // 获取字符的Unicode编码
//     let charCode = plaintxt.charCodeAt(i);
//     // 将Unicode编码转换为十六进制字符串
//     let hex = charCode.toString(16);
//     // 输出十六进制值
//     console.log(hex);
// }

// ab
//
// 97 98
//
// 6162

// 120
// 0111 1000
// 78

// 0000 0111

// 0111 1000
// 0000 1111
// 0000 1000

import CryptoJS from 'crypto-js';

// let wordArray = CryptoJS.enc.Utf8.parse('ytmour');
// console.log(CryptoJS.enc.Hex.stringify(wordArray));
// console.log(CryptoJS.enc.Hex.parse('79746d6f7572').toString(CryptoJS.enc.Utf8));
// console.log(wordArray);

// let wordArray = CryptoJS.enc.Utf8.parse('中文');
// console.log(wordArray);
// console.log(CryptoJS.enc.Hex.stringify(wordArray));




let wordArray = CryptoJS.enc.Utf8.parse('ytmour');
let b64 = CryptoJS.enc.Base64.stringify(wordArray);
let b64_wordArray = CryptoJS.enc.Base64.parse(b64);
let hex = CryptoJS.enc.Hex.stringify(b64_wordArray);
console.log(b64, hex);




// http://www.baidu.com/index.html?user=ytmour&pass=xxxx&time=13011112222&sign=778d20fb67a0d0b2962717992ac77934

// ytmourxxxxruyi13011112225


//ytmourxxxxruyi
//778d20fb67a0d0b2962717992ac77934
//778d20fb67a0d0b2962717992ac77934

//ytmourxxxxruyi13011112222
// b'Wmprek1UbGxaamczTVE9PQ=='


//let CryptoJS = require('./CryptoJS');
// //let wordArray = CryptoJS.enc.Utf8.parse('ytmour');
// //let wordArray = '7869616f6a69616e62616e67';
// let wordArray = CryptoJS.enc.Hex.parse('7869616f6a69616e62616e67');
// console.log(CryptoJS.MD5(wordArray) + '');
// console.log(CryptoJS.MD5(wordArray).toString(CryptoJS.enc.Base64));
//
// let hexMd5 = CryptoJS.MD5(wordArray) + '';
// let yuanwen = CryptoJS.enc.Hex.parse(hexMd5);
// console.log(CryptoJS.enc.Base64.stringify(yuanwen));
// console.log(CryptoJS.MD5() + '');


// let CryptoJS = require('./CryptoJS');
// let wordArray = CryptoJS.enc.Utf8.parse('ytmour');
// console.log(CryptoJS.SHA1(wordArray) + '');
// console.log(CryptoJS.SHA256(wordArray) + '');
// console.log(CryptoJS.SHA512(wordArray) + '');
// // console.log(CryptoJS.SHA224(wordArray) + '');
// // console.log(CryptoJS.SHA384(wordArray) + '');
// // console.log(CryptoJS.SHA3(wordArray) + '');



// let CryptoJS = require('./CryptoJS');
// // console.log(CryptoJS.MD5('ytmour') + '');
//
// // let md5 = CryptoJS.algo.MD5.create();
// // md5.update('ytmour');
// // md5.update('liruyi');
// // let cipherText = md5.finalize() + '';
// // console.log(cipherText);
//
// let SHA1 = CryptoJS.algo.SHA1.create();
// SHA1.update('ytmour');
// let cipherText = SHA1.finalize() + '';
// console.log(cipherText);
// //SHA1.reset();
// SHA1.update('liruyi');
// console.log(SHA1.finalize() + '');



// let CryptoJS = require('./CryptoJS');
// console.log(CryptoJS.HmacMD5('', 'key') + '');
// console.log(CryptoJS.HmacMD5('ytmour', 'key') + '');
// console.log(CryptoJS.HmacSHA1('ytmour', 'key') + '');
// console.log(CryptoJS.HmacSHA1('ytmour', 'key').toString(CryptoJS.enc.Base64));
//
//
// let hmacSHA1 = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA1.create(), 'key');
// hmacSHA1.update('ytmour');
// console.log(hmacSHA1.finalize() + '');








