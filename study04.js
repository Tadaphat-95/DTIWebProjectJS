//type conversion การแปลงชนิดข้อมูล
// string conversion
let a =  '100'
let b = '5'
let c = ''
let d = 'wow'
console.log(Number(a) * Number(b))
console.log(parseInt(a) * parseInt(b))
console.log(parseFloat(a) * parseFloat(b))
console.log(Boolean(a))
console.log(Boolean(b))
console.log(boolean(c)) // false เพราะ c ไม่มีค่าข้อมูล
console.log(boolean(d))

//number conversion
let e = 100
let f = 522.44
let g = 0
console.log(e.toString())
console.log(e.toFixed(2))
console.log(f.toFixed(4))
console.log(Boolean(e))
console.log(Boolean(f))
console.log(Boolean(g))

//boolean conversion
let h = true
let i = false
console.log(Number(h));
console.log(Number(i));
console.log(h.toString());
console.log(i.toString());

//array conversion
let j = []
let k = [10, 20, 30]
console.log(boolean(j)); // true
console.log(boolean(k)); // true

//object conversion
let l = {}
let m = { a : 10, b : 20, c : 30}
console.log(boolean(l)); // true
console.log(object(m)); // true