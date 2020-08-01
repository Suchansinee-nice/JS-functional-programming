//Ep.1
//1. Pure Function คือการที่เรา pass ค่า argument เป็นค่าใดๆก็ตาม และไม่ได้เปลี่ยนค่า argument เป็นค่าอื่น ผลลัพธ์ที่ได้จาก func. นั้นจะต้องเหมือนเดิมเสมอ
function addPure(a, b) {
  return a+b;
}
console.log('Pure Function :', addPure(1,6)); 
//ผลลัพธ์ที่ได้คือ 7 , pure function คือ ตราบใดที่ถ้าไม่ได้เปลี่ยนค่า a,b ที่ส่งเป็น 1,6 เข้าไป ผลที่ได้ต้องออกมาเท่ากับ  7 เสมอ
//pure function ทำให้สามารถคาดการณ์ได้ว่าผลลัพธ์ที่ได้จากฟังชันคืออะไร และ 
//ทำให้มั่นใจได้ว่าฟังชันจะทำงานถูกต้องเสมอ โดยไม่มีสิ่งอื่นๆมาทำให้ผลลัพของฟังชันทั้งหมดเปลี่ยนไป





//อะไรที่จะมีผลกับฟังชันของเรา ทำให้ผลลัพธ์ที่ได้มีค่าเปลี่ยนแปลงไปถึงแม้จะใส่ค่า argument เหมือนเดิมก็ตาม คือเรื่อง side effect
//สิ่งที่ทำให้ผลลัพธ์เปลี่ยนคือ side effect
//ซึ่งการที่เราสามารถ avoid หรือเลี่ยง side effect ได้ทำให้ฟังชันทำงานได้ถูกต้องสม่ำเสมอ โดยที่ไม่ขึ้นกับตัวแปรหรือปัจจัยภายนอก
//2. Avoid Side Effect

//b อยู่นอก function อยู่เหนือการควบคุมของ function อนาคตอาจมีกรณีใดๆเกิดขึ้นที่ทำให้ค่า b เปลี่ยนไป 
//เช่น b=16 ส่งผลให้ผลลัพธ์เปลี่ยน ทั้งที่ไม่ได้เปลี่ยนค่าใน argument ของเราเลย แต่ผลลัพธ์ก็เปลี่ยนไป
//เรียกตัวแปร b ว่า side effect เป็นตัวแปรที่มีผลกระทบต่อผลลัพธ์ของ function
//side effect จะทำให้เราคาดการณ์ผลลัพธ์ที่ return ออกมาจาก function ได้ยาก
//เพราะการทำงานภายในฟังชันของเราไปผูกอยู่กับค่าตัวแปรภายนอกฟังชัน ควรเลี่ยงการเกิด side effect
const b = 16; 
function addSideEffect(a) {
  return a+b;
}
console.log('Side Effect : ', addSideEffect(1));




//3. First class function คือ อย่าง OOP function ไม่สามารถที่จะ assign เข้าไปในตัวแปรได้, ไม่สามารถรีเทินค่าจาก function นี้ออกมาจาก function อีกตัวได้, ไม่สามารถ pass ค่าฟังชันเข้าไปใน argument ของฟังชันอีกตัวได้
///3.1 Assigning a function to a variable
const addAssigning = function addAssigning(a,b) { //สามารถลบชื่อ function addAssigningทิ้งได้
  return a+b;
}
console.log('Assigning : ',addAssigning(1,6));


///3.2 Returning a function
function addReturning(a,b) {
  return function() { //new function
    return a+b;
  }
}

const addTwoNumber = addReturning(1,6); //return new function ออกมาให้ มันรีเทินเป็นฟังชันไม่ใช่ค่า
console.log('Returning : ' + addTwoNumber()); //พอมันรีเทินเป็นฟังชัน หมายความว่าเราสามารถเรียกใช้ฟังชันได้ ตัวแปร addTwoNumber จะเป็นฟังชัน, เหมือนรีเทินเป็นฟังชัน(3.2) แล้วมัน assign function ใส่ในตัวแปรอะ(3.1) ตัวแปรนั้นก็กลายเป็นฟังชันไป

///3.3 Accepting a function as an argument
function addNumber(a,b) {
  return a+b;
}
function addAccepting(add, a, b) {
  return add(a,b);
}

console.log('Accepting : ', addAccepting(addNumber, 1,6)); //addNumber ใส่ไปแบบนี้เพราะ add เป็น parameter ไม่ใช่ function ไม่ใส่ addNumber()








//Ep2.
//4. Higher order functions ที่ build-in มากับ javascript
///4.1 Returning a function
///4.2 Accepting a fuction as an argument

const persons = [
  {name : "John", age: 17},
  {name : "Jane", age: 10},
  {name : "Jim", age: 15},
];

//filter
//no higher order functions : filter
//person : age <= 15
const kids = [];
for(let i =0; i < persons.length; i++) {
  const person = persons[i];
  if(person.age <= 15) {
    kids.push(persons[i]); //kids.push(person);
  }
}

console.log(kids);

//filter function
const kids2 = persons.filter((person) => {
  return person.age <= 15;
});

console.log(kids2);




//map
//no higher order functions : map
//age * 2

// const olderPersons = [];
// for(let i =0;i < persons.length; i++) {
//     // let person = {
//     //   name : persons[i].name,
//     //   age : persons[i].age * 2 
//     // }
//     // // console.log(persons[i].name); //มันปริ้นออกมาแต่มันพังด้วย เพราะต้องเป็น i < perons.length 
//     // olderPersons.push(person);

//     const person2 = persons[i];
//     olderPersons.push({
//       ...person2, //...คืออะไร?
//       age : person2.age * 2
//     })
// }

// console.log(olderPersons);

//map function
//การเขียน function ถ้าใช้ arrow func. ไม่ต้องใส่ชื่อ func. ส่งแค่ argumentเฉยๆ ใส่ลูกศร, แต่ถ้าจะเขียน function ปกติ ไม่ต้องใส่ลูกศร แต่ใส่คำว่า function
const olderPersons = persons.map((person) => { //step ทำงานเหมือน filter
  return { //return ตรงนี้ไม่ใช่ใส่เงื่อนไขแบบ filter สิ่งที่รีเทินคือรีเทิน object ไปเก็บใน array ไม่ใช่ใส่เงื่อนไขแบบกรณี filter
    ...person, //...คืออะไร?
    age : person.age * 2
  }
});
console.log(olderPersons);

// const olderPersons = persons.map(person => ({
//     ...person,
//     age : person.age * 2
//   }));
// console.log(olderPersons);




//reduce
//no higher order functionss : reduce
//sum age everybody in array
// let totalAge = 0;
// for (let i=0; i < persons.length; i++) {
//   totalAge = totalAge + persons[i].age;
// }
// console.log(totalAge);

//reduce function
const totalAge = persons.reduce((age,person) => { //argument ตัวแรกของฟังชันคือ accumerator โดย accumerator = 0 ที่เราใส่ไป , ตัวที่2 คือ index
  return age + person.age; //0+17 โดย ค่าที่ได้จะถูก assign เข้าไปที่ age age = 17 , 17+10 = 27 , 27+15 = 42 , age = 42 พอวนครบหมด มันจะรีเทิน accumerator คือ age ออกมา
},0); //reduce มี 2 argument คือ function , ค่าเริ่มต้น

// const totalAge = persons.reduce((age,person) => age + person.age ,0); 





//EP.3 
//forEach
//find, findIndex
//every, some