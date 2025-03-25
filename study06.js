//Control Statement
//Condition/Selection Statement
//if, if-else, if-else-if, switch-case


//Loop Statement
//while, do-while, for , for-in, for-of , forEach

//break , continue
for(let i = 1; i <= 5; i++){
    if(i === 3){
        break
    }
    console.log(`${i}...Hi`);
}
console.log('**************');
for(let i = 1; i <= 5; i++){
    if(i === 3){
        continue
    }
    console.log(`${i}...Hi`);
}
console.log('*******for each*******');
//foreach ใช้กับ array (เข้าถึงข้อมูลทุกตัวใน array)
let data = [10, 20, 30, 40]
console.log(data[0] * 100);
console.log(data[1] * 100);
console.log(data[2] * 100);
console.log(data[3] * 100);
console.log('******for each********');
data.forEach((value) => {
    console.log(value * 100);
})
console.log('*****for of*********');
//for-of ใช้กับ array
for(let value of data){
    console.log(value * 100);
}
console.log('******for in********');
//for-in ใช้กับ object
let info = {
    aa : 10,
    bb : 20,
    cc : 30,
    dd : 40
}
console.log(data[0] * 100);
console.log(data[1] * 100);
console.log(data[2] * 100);
console.log(data[3] * 100);
console.log('******for in********');
for(let key in info){
    console.log(key);
    console.log(`${key} : ${info[key] * 100}`);
}
