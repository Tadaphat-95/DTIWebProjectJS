// Operator
// Arithmetic Operator + - * / % ** ++ --
//***Comparison Operator == ===  != !== > < >= <=  
console.log('10' == 10) // true
console.log('10' === 10) // false  === สนใจ type ด้วย

//Logical Operator ! && ||

//Assignment Operator = += -= *= /= %= **=  ++= --=
let x = 1
let y = 2
x = x + 1 + 554 * y
x += 1 + 554 * y

//Ternary Operator ____ ? _________ : ______ (if-else อย่างย่อ)
let aa = 10 

let bb = aa - 3 * 2 === '25' ? 'Wow...' : 'Hi...'

console.log(bb)

//Nullish Coalescing Operator ??
let cc = 50
let dd = null
console.log(cc ?? 'SAU...')
console.log(dd ?? 'DTI...')