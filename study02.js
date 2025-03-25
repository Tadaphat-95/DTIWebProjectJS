// Varible ตัวแปร
// var เปลี่ยนค่าได้ กำหนดค่าทีหลังได้ --> เป็น global 
// let เปลี่ยนค่าได้ กำหนดค่าทีหลังได้ --> เป็น local 
// const เปลี่ยนค่าไม่ได้ กำหนดค่าทีหลังไม่ได้ --> เป็น local

var aa 
aa = 10
var bb = 20

let cc 
cc = 30
let dd = 40
cc = 300 
dd = 400

// cont ee ERROR
const ee = 50
//ee = 6000 ERROR

// Scope ขอบเขตการใช้งาน (Global/Local Scope)  คือ {.......}

var a1 = 10
let a2 = 20
const a3 = 30
{
    var a1 = 100
    let a2 = 200
    const a3 = 300
{
    var c1 = 1000
    let c2 = 2000
    const c3 = 3000
    console.log(a2)
    //console.log(b2)
    // console.log(c2) ERROR
}
console.log(a2);
//console.log(b2);
//console.log(c2);
}
console.log(a2);
// console.log(b2); ERROR
//console.log(c2);