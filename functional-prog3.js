//Ep.3
const persons2 = [
  {name: "John", age: 17},
  {name: "Jane", age: 10},
  {name: "Jim", age: 15}
]


//forEach 
//ใช้วน array แต่ละ index ได้
//คล้าย for แต่ forEach ไม่สามารถใช้ break หรือ continue ได้

//for loop สามารถใช้ break , continue  ได้
for(let i =0; i < persons2.length; i++) {
  if(persons2[i].age > 15) { //ถ้าอายุมากกว่า 15 ก็ไม่วนกลับขึ้นไป ไม่ทำ console.log
    continue;
  }
  console.log(`Name ${persons2[i].name} , Age ${persons2[i].age}`)
}

//forEach ต้องวนให้ครบทุก index
//ไม่ต้องมีตัวรับ เพราะไม่ได้จะให้รีเทินอะไรกลับมา
persons2.forEach(person => 
  console.log(`Name : ${person.name} , Age : ${person.age}`)
);


//find, findIndex

//find จะวน loop array ส่วนสิ่งที่จะรีเทินออกจาก find จะเป็นเงื่อนไข ถ้าเงื่อนไขเป็น true ให้รีเทิน object ปัจจุบันที่กำลังวน loop อยู่
//no find higher order function
//วน loop persons และหาเฉพาะคนที่มีชื่อเท่ากับ jane

// let jane = null;
// for(let i = 0; i < persons2.length; i++) {
//   if(persons2[i].name === "Jane") {
//     jane = persons2[i];
//     console.log("Name : ",jane);
//     break;
//   }
// }

//find 
const jane = persons2.find((person) => {
  return person.name === 'Jane';
});
console.log('Name' , jane);

//findIndex รีเทิน index ที่ตรงกับเงื่อนไข
const janeIndex = persons2.findIndex((person) => {
  return person.name === 'Jane'
});
console.log('Jane index ', janeIndex);


//every, some
//2 ตัวนี้จะ return true/false

//every : จะเช็คว่า object ใน array ทุกตัวผ่านเงื่อนไขที่สร้างขึ้นมา
//เวลาเอา object แต่ละindex มาเช็ค เงื่อนไขที่สร้างให้ every ถ้าทุก index ตรงตามเงื่อนไข ผลลัพธ์ที่ได้ทั้งหมดของ function every = true

//every 
//no higher order function
//จะเช็คว่าคนที่อยู่ใน array เป็นเด็กมั้ย คือ <= 15

let isKid = false;
for(let i = 0; i < persons2.length; i++) {
  if(persons2[i].age > 15) {
    isKid = false;
    break;
  }
}
console.log('isKid ' , isKid); //ถ้าใช้ , ตามด้วยค่าของมัน ถ้าใช้ + ตัวต่อไปจะกลายเป็น text

//every
const isKidEvery = persons2.every(person => person.age <= 15);
console.log('isKid ' , isKidEvery);


//some
//ถ้าเงื่อนไขตัวใดตัวหนึ่งจริงคือ return true ผลลัพธ์ของ some function = true ทันที
//some = false เมื่อทุกตัวใน index มีค่าที่ทำให้เงื่อนไขเป็น false ทั้งหมด จะทำให้ some return false
const isKidSome = persons2.some((person) => {
  return person.age <= 15;
});
console.log('isKid ' , isKidSome);