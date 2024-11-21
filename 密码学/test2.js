
import CryptoJS from 'crypto-js';


// //console.log(CryptoJS.enc.Utf8.parse('ytmour'));
//
// console.log(CryptoJS.MD5('ytmour').toString());
// let xiaArr = CryptoJS.enc.Utf8.parse('ytmour');
// console.log(CryptoJS.MD5(xiaArr).toString());
// console.log(CryptoJS.enc);

// console.log(CryptoJS.enc.Utf8.parse('ytmour'));
// console.log(CryptoJS.enc.Hex.parse('7869616f6a69616e62616e67'));
// console.log(CryptoJS.enc.Base64.parse('eGlhb2ppYW5iYW5n'));

// let xjbU8 = CryptoJS.enc.Utf8.parse('ytmour');
// console.log(xjbU8.toString());  // Hex
// console.log(xjbU8 + '');        // Hex
// console.log(xjbU8.toString(CryptoJS.enc.Base64));
// console.log(xjbU8.toString(CryptoJS.enc.Utf8));
//
// console.log(CryptoJS.enc.Utf8.stringify(xjbU8));
// console.log(CryptoJS.enc.Base64.stringify(xjbU8));

// let xjbU8 = CryptoJS.enc.Utf8.parse('ytmour');
// let xjbHex = xjbU8.toString();
// console.log(xjbHex);
// //console.log(CryptoJS.enc.Hex.parse(xjbHex).toString(CryptoJS.enc.Base64));

// console.log(CryptoJS.MD5('ytmour').toString());
// console.log(CryptoJS.MD5('7869616f6a69616e62616e67').toString());
//


// // ECB
// xiaojian bangxiao jianbang ss
// SSSSSSSS EEEEEEEE RRRRRRRR TTTTTTTT
// SSSSSSSSEEEEEEEERRRRRRRRTTTTTTTT

// // CBC
// 12345678 //iv
// xiaojian bangxiao jianbang ss
//
// xiaojian ^ 12345678 SSSSSSSS
// dddddddd
// dddddddd ^ bangxiao RRRRRRRR
// TTTTTTTT
// TTTTTTTT ^ jianbang ffffffff
// hhhhhhhh
// ddddddddTTTTTTTThhhhhhhh






// let plainText = CryptoJS.enc.Utf8.parse('ytmour');
// let key = CryptoJS.enc.Utf8.parse('12345678');
// //let key = CryptoJS.enc.Utf8.parse('03254769');
// let iv = CryptoJS.enc.Utf8.parse('88888888');
// var cfg = {
//     iv: iv,
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.Pkcs7
// };
// let cipherObj = CryptoJS.DES.encrypt(plainText, key, cfg);
// //console.log(cipherObj.toString());
// console.log(cipherObj.ciphertext.toString());


// // // //9a41f0e3a278c6018bed9d770c482da2
// // let key = CryptoJS.enc.Utf8.parse('12345678');
// // //let key = CryptoJS.enc.Utf8.parse('03254769');
// // let iv = CryptoJS.enc.Utf8.parse('88888888');
// let cipherText = CryptoJS.enc.Hex.parse('5fa39214f2feaa94').toString(CryptoJS.enc.Base64);
// var cfg = {
//     iv: iv,
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.Pkcs7
// };
// let plainObj = CryptoJS.DES.decrypt(cipherText, key, cfg);
// console.log(plainObj.toString(CryptoJS.enc.Utf8));


//00110001 00110010 00110011 00110100 00110101 00110110 00110111 00111000   12345678
//00110000 00110011 00110010 00110101 00110100 00110111 00110110 00111001   03254769



//
// let plainText = CryptoJS.enc.Utf8.parse('ytmour');
// let key = CryptoJS.enc.Utf8.parse('123456783333333388888888');
// let iv = CryptoJS.enc.Utf8.parse('88888888');
// var cfg = {
//     iv: iv,
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.Pkcs7
// };
// let cipherObj = CryptoJS.TripleDES.encrypt(plainText, key, cfg);
// //console.log(cipherObj.toString());
// console.log(cipherObj.ciphertext.toString());




// b'Wmprek1UbGxaamczTVE9PQ=='
//
// let plainText = CryptoJS.enc.Utf8.parse('ytmour');
// let key = CryptoJS.enc.Utf8.parse('1234567890abcdef12345678');
// let iv = CryptoJS.enc.Utf8.parse('1234567890abcdef');
// var cfg = {
//     iv: iv,
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.Pkcs7
// };
// let cipherObj = CryptoJS.AES.encrypt(plainText, key, cfg);
// //console.log(cipherObj.toString());
// console.log(cipherObj.ciphertext.toString());




//
// let plainText = CryptoJS.enc.Utf8.parse('ytmour');
// let key = CryptoJS.enc.Utf8.parse('1234567890abcdef12345678');
// let iv = CryptoJS.enc.Utf8.parse('1234567890abcdef');
// // var cfg = {
// //     iv: iv,
// //     mode: CryptoJS.mode.CBC,
// //     padding: CryptoJS.pad.Pkcs7,
// //     format: CryptoJS.format.Hex
// // };
//
// let format = {
//     stringify: function (data){
//         let e = {
//             ct: data.ciphertext.toString(CryptoJS.enc.Base64),
//             miaoshu: "这是我们的自定义输出内容"
//         };
//         return JSON.stringify(e)
//     },
//     parse: function (data){
//         let json = JSON.parse(data);
//         let newVar = CryptoJS.lib.CipherParams.create({ciphertext: CryptoJS.enc.Base64.parse(json.ct)});
//         return newVar
//     }
// };
//
// var cfg = {
//     iv: iv,
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.Pkcs7,
//     format: format
// };
//
// let cipherObj = CryptoJS.AES.encrypt(plainText, key, cfg);
// console.log(cipherObj.toString());
//
// let cipherText = cipherObj.toString();
// let plainObj = CryptoJS.AES.decrypt(cipherText, key, cfg);
// console.log(plainObj.toString(CryptoJS.enc.Utf8));



// let format = {
//     stringify: function (data){
//         let e = {
//             ct: data.ciphertext.toString(),
//             iv: data.iv.toString(),
//             salt: data.salt.toString(),
//         };
//         return JSON.stringify(e)
//     },
//     parse: function (data){
//         let json = JSON.parse(data);
//         return  CryptoJS.lib.CipherParams.create({
//             ciphertext: CryptoJS.enc.Hex.parse(json.ct),
//             iv: CryptoJS.enc.Hex.parse(json.iv),
//             salt: CryptoJS.enc.Hex.parse(json.salt),
//         });
//     }
// };
// var cfg = {
//     format: format
// };
// let cipherObj = CryptoJS.AES.encrypt('ytmour', '12345678123456781234567812345678', cfg);
// let cipherText = cipherObj.toString();
// console.log(cipherText);
//
// let plainObj = CryptoJS.AES.decrypt(cipherText, '12345678123456781234567812345678', cfg);
// console.log(plainObj.toString(CryptoJS.enc.Utf8));



// console.log(CryptoJS.RIPEMD160('ytmour').toString());
// console.log(CryptoJS.HmacRIPEMD160('ytmour', 'keykeykey').toString());
// console.log(CryptoJS.PBKDF2('ytmour', 'keykeykey1234', {keySize: 4, iterations: 2000}).toString());
// console.log(CryptoJS.EvpKDF('ytmour', 'keykeykey1234', {keySize: 4, iterations: 2000}).toString());

// console.log(CryptoJS.RC4);
// console.log(CryptoJS.RC4Drop);
// console.log(CryptoJS.Rabbit);
// console.log(CryptoJS.RabbitLegacy);








