// let x = 13;
// let y = 11;
// let z = 12;

// max = 0;

// if (x > y) {
//   max = x;
// } else max = y;
// if (z > max) {
//   max = z;
// }
// console.log(max);

// function summing(num) {
//   if (num < 0) {
//     return 0;
//   } else {
//     let i = 1;
//     let sum = 0;
//     while (i <= num) {
//       sum = sum + i;
//       i++;
//     }
//     return sum;
//   }
// }

// console.log(summing(7));

// // كتابة تابع يأخذ كمعامل رقم صحيح موجب ويعيد
//   // اذا كان غير ذلك "fuls" اذا كان الرقم  اولي و  "true"

// function isPrime(x){
//     i=1
//     if(i >= x){
//         return false;
//     }
//     else{

//          y = 2;
//         while( y < x ){

//             if(x % y === 0 ){
//                 return false;
//             }
//             y++;
//         }
//         return true;
//     }
// }
// console.log(isPrime(4));

// //تابع يقوم بطباعة الاعداد الاولية من 1 الى 1000
// function print (){
//     x=1;
//     while(x <= 1000){
//         if(isPrime(x)){
//             console.log(x);
//         }
//         x++;
//     }
// }
// print();

// التمرين األول:
// ليدنا أربع عالمات لمواد جامعية )رياضيات – فيزياء – برمجة – عربي(
// نقول ان الطالب ناجح بمادة ما إذا حصل على عالمة أكبر أو تساوي 60
// نقول عن الطالب أنه ناجح في السنة الدراسية إذا كان ناجح في كافة المواد األربعة
// يحق للجامعة أن تساعد الطالب بعالمتين فقط، وال يمكن نقل عالمة من مادة إلى أخرى
// أو راسب بنا ًء األربعة السابقة. أكتب برنامج يقوم بطباعة ناجح على العالمات
// مثال 60-60-60-60 الطالب ناجح )بدون مساعدة(
// 60-60-60-59 الطالب ناجح )مساعدة بعالمة(
// 60-60-60-58 الطالب ناجح )مساعدة بعالمتين(
// 60-60-59-59 الطالب ناجح )مساعدة بعالمتين(
// 60-59-59-59 الطالب راسب

// function student(ar, pr, ph, math) {
//   let dec = 0;
//   stu = [ar, pr, ph, math];
//   let s = 0;
//   let count = 3;

//   while (count >= 0) {
//     s = stu[count];
//     if (s >= 60) {
//       dec++;
//     } else if (s == 59) {
//       dec = dec - 1;
//     } else if (s == 58) {
//       dec = dec - 2;
//     } else {
//       dec = dec - 3;
//     }
//     var decD = 5;
//     decD = dec + 3;
//     count--;
//   }

//   if (decD >= 7) {
//     return `${ar} - ${pr} - ${ph} - ${math}'الطالب ناجح  '`;
//   } else if (decD == 5) {
//     return `${ar} - ${pr} - ${ph} - ${math}'الطالب ناجح مساعدة بعلامة '`;
//   } else if (decD == 3 || decD == 4) {
//     return `${ar} - ${pr} - ${ph} - ${math}'الطالب ناجح مساعدة بعلامتين'`;
//   } else {
//     return `${ar} - ${pr} - ${ph} - ${math}'الطالب راسب  '`;
//   }
// }

// console.log(student(60, 58, 60, 60));

// // التمرين الثاني:
// // لنفترض أن عدد أيام أي شهر في السنة 30 يوم )ال يوجد 31 أو 28(
// // ولنفترض أن عدد أيام السنة 30*12 = 360 يوم )وليس 365(
// // لدينا شخصين لكل منهما تاريخ ميالد )يوم – شهر – سنة( وفق الشروط السابقة
// // يعني لدينا ست متحوالت:
// // Day1 – month1 – year1
// // Day2 – month2 – year2
// // أكبر عمرا وذلك بشرط القيام بعملية مقارنة واحدة فقط ً نريد كتابة برنامج يعرف أي من الشخصين األول ام

// function oldder(Day1, month1, year1, Day2, month2, year2) {
//   function formatTwoDigits(num) {
//     return num < 10 ? "0" + num : num;
//   }
//   let x = "" + year1 + formatTwoDigits(month1) + formatTwoDigits(Day1);
//   let y = "" + year2 + formatTwoDigits(month2) + formatTwoDigits(Day2);

//   if (x > y) {
//     return "الشخص الثاني أكبر";
//   } else return "الشخص الأول أكبر";
// }

// console.log(oldder(28, 6, 2022, 2, 8, 2022));

////////////////////////////////////////////////////

// function Perfect(num){

// let sum = 0;

// for(let i =1; i <= num ; i++){
//   let res = num % i;
//   if ( res == 0){
//     sum = sum + i;
//   }
// }
// if (sum == num){
//   return "the number is perfect"
// }else {
//   return "the number is not prefect"
// }

// }
// console.log(Perfect(6));

// function Pladrom(num){
//   let x =0;

//   while(num > 0){
//     x = num % 10 ;
//     x = x * 10 ;
//     num / 10;

//   }
//   if (x == num){
//     return "the number is poldrod"
//   }else {
//     return "is not poldrom"
//   }

// }

// console.log(Pladrom(1221));

// convToCamelcase=(str)=>{
//   let str1 = "";
//   for (let i=0; i<str.lenght;i++){
//     if(str[i]!=" "){
//       str1+= srt[i]

//     }else{

//     }

//   }
// }

// const convertPinary=(num)=>{
//   let resu = 0;
//   for(let i=0; i<num.length; i++){
//     if(num[i]== 0){
//       resu= resu+ 0;
//     }else if (num[i]==1){
//       resu = resu + 2**i;
//     }

//   }
//   return resu
// }
// console.log(convertPinary("1111"));

const voiceCharet=(str , chr)=>{
  let arV =["a","e","i","o","u"];
  let res = "";
  ///
  for(let i=0; i<str.length; i++){
    let find = false;
    for(let j = 0; j < arV.length ; j++){
      if(str[i]===arV[j] ){
        find = true;
      }
    }

    if(find){
      res += chr
    }
    else{
      res+= str[i];
    }
  }
  return res;
}
console.log(voiceCharet("hello", "*"));
///////////////////////////////////////////


// const FindInterval = (arr) => {
//   let min = arr[0];
//   let max = arr[0];
//   // let resul = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     } else if (arr[i] < min) {
//       min = arr[i];
//     }
//   }

//   return max - min;
// };
// let aarr = [4, 6, 2];
// console.log(FindInterval(aarr));




////////////////////////////////
const vowelindex=(str)=>{
  let arV =["a","e","i","o","u"];
  
  
    for(let i = 0; i < arV.length ; i++){
      if(str[0]===arV[i]){
        return "VStart";
      }else{
        "Start"
      }
    }
  
  
}
console.log(vowelindex("hello"));



///////////////////////////////////////// *****
const vowelsStrart=(str)=>{
    let arV =["a","e","i","o","u"];
   for(let j = 0; j < arV.length ; j++){
      if(str[i]===arV[j] ){
        res += str[i];
        coun++;
      }}

}
//////////////////////////////////////////

const vowelN=(str ,n)=>{
let arV =["a","e","i","o","u"];
let res = "";
let coun = 0;
  ///
  for(let i=0; i<str.length; i++){
    for(let j = 0; j < arV.length ; j++){
      if(str[i]===arV[j] ){
        res += str[i];
        coun++;
      }
      if (n == coun){
        return res
      }
    }


    
  
}

}

console.log(vowelN("hello" ,2));





///////////////////
  