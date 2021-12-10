// let admin;
// let name ="John";

// admin = name;
// alert(admin);


// let planetEarth; let ourPlanetName = "Earth";
// let currentUser; let currentUserName = "John";

// let name = "Ivan";
// alert (`hello, ${name}`);

// let age = prompt('How old are you?', 100);

// let conf = confirm("Are you shure?");

// alert(`You are ${age} age!`);

// let name = prompt ('Whats your name?')
// alert(`Your name is ${name}`);


// let apples = "2";
// let oranges = "3";
// оба операнда предварительно преобразованы в числа
// alert( +apples + +oranges ); // 5
// более длинный вариант
// alert( Number(apples) + Number(oranges) ); // 5



// let counter = 1;
// a=2* (++counter);
// alert(` ${a}`);


// let a = 1, b = 1;

// alert( ++a ); // 2, префиксная форма возвращает новое значение
// alert( b++ ); // 1, постфиксная форма возвращает старое значение

// alert( a ); // 2, значение увеличено один раз
// alert( b ); // 2, значение увеличено один раз


// "" + 1 + 0  = "1"  \ "10"
// "" - 1 + 0  = -1    \-1
// true + false = false \1
// 6 / "3" = 2 \ 2 
// "2" * "3" = 6 \ 6
// 4 + 5 + "px" = "9px" \9px
// "$" + 4 + 5 = "$9"  \ $45
// "4" - 2 = 2 \ 2 
// "4px" - 2 = "2px" \  Nan
// 7 / 0 = nan \ infinity
// "  -9  " + 5 = "-95" \ -9  5
// "  -9  " - 5 = -14 \ -14
// null + 1 = "null1" \ 1
// undefined + 1 = "undefind1"  \ Nan
// " \t \n" - 2 = \ -2



// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(+a + +b);

//06_11_2021

// 5 > 4   true
// "ананас" > "яблоко" false
// "2" > "12"  false \ true
// undefined == null   true
// undefined === null  false
// null == "\n0\n" true \ false
// null === +"\n0\n"   false

// let age = prompt('How old are you?', 18);

// let message = (age < 3) ? 'Hello, baby!' : 
//   (age < 18) ? 'Hi!' :
//   (age < 100) ? 'Hello!' :
//   'Good evening dinosaur!';

// alert( message );


// let jsName = prompt ('Whants the true name of company JS')
//     if (jsName == 'ECMAScript') {
//     alert('true')
//      } else { alert('false');
//     }

//     let jsName = prompt ('Whants the true name of company JS');
// (jsName == 'ECMAScript') ? alert('true') : alert('false');


// let inputDigit = prompt("Please input a digit");
//     if (inputDigit <0 ){
//         alert ('-1')
//     }else if (inputDigit >0 ){
//         alert ('1')
//     } else { alert('0')
//     }

// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }
// _________________
// result=(a + b < 4) ? 'Мало':'Много';


// let message;
// let login=prompt("")
// if (login == 'Employee') {
//   message = 'Hi';
// } else if (login == 'ол') {
//   message = 'Hello';
// } else if (login == '') {
//   message = 'Login is missing';
// } else {
//   message = 'Unknown login';
// }
// alert (message);

// let login=prompt("");
// message = (login == 'Сотрудник') ?  'Привет':
// login == 'Директор' ? 'Здравствуйте':
// login == '' ? 'Нет логина':
// 'Неизвестный логин'
// alert (message);

// let currentUser = null;
// let defaultUser = "John";
// let name = currentUser || defaultUser || "unnamed";
// alert( name ); // выбирается "John" – первое истинное значение

// alert( null && 5 ); // null
// alert( 0 && "no matter what" ); // 0
// alert( 1 && 2 && null && 3 ); // null

// alert( !true ); // false
// alert( !0 ); // true
// alert( !!"non-empty string" ); // true
// alert( !!null ); // false

// alert( alert(1) || 2 || alert(3) );
// output - first alert (1) then alert (2)

//alert( alert(1) && alert(2) );
// output - first alert (1) then undefind

//alert( null || 2 && 3 || 4 );
// output - 3


// let age = prompt("age");
// if (age >=14 && age<=90) {
// alert ("true");
// };

// let age = prompt("age");
// if (age <14 || age>90) {
// alert ("true");
// };
// the same with !=
// if (!(age >=14 && age <=90))


// if (-1 || 0) alert( 'first' ); \ -1 true
// if (-1 && 0) alert( 'second' ); \ 0 false
// if (null || -1 && 1) alert( 'third' ); \ 1 true


// ___
// let login = prompt ("Please inpit your login");
// if (login == "" || login== null) {
//     alert("Canceled");
// }

// else if (login == "Admin") {
//     let password=prompt("input your password");
//         if (password == "im main"){
//              alert("Hello");
//         }
//         else if (password == null || password == ""){
//         alert ("Canceled");
//         }
//         else  {
//          alert("Wrong password"); 
//         }
// }
// else {
//     alert("I don't know you");
// }
// ___

/* ?? */
// ?? eql ||
// ?? take first true if this not null/undefined
// let height = null;
// let width = null;

// // важно: используйте круглые скобки
// let area = (height ?? 100) * (width ?? 50);

// alert(area); // 5000

// let height = 0;

// alert(height || 100); // 100
// alert(height ?? 100); // 0


/* WHILE */

// let i = 3;
// while (i) { // когда i будет равно 0, условие станет ложным, и цикл остановится
//   alert( i );
//   i--;
// }

// let i = 3;
// while (i) alert(i--);


/* DO */

// let i = 0;
// do {
//   alert( i );
//   i++;
// } while (i < 3);

/* FOR */

// for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
//     alert(i);
//   }

// let i = 0;

// for (i = 0; i < 3; i++) { // используем существующую переменную
//   alert(i); // 0, 1, 2
// }

// alert(i); // 3, переменная доступна, т.к. была объявлена снаружи цикла

// let i = 0;

// for (; i < 3;) {
//   alert( i++ );
// }


// outer: for (let i = 0; i < 3; i++) {

//     for (let j = 0; j < 3; j++) {
  
//       let input = prompt(`Значение на координатах (${i},${j})`, '');
  
//       // если пустая строка или Отмена, то выйти из обоих циклов
//       if (!input) break outer; // (*)
  
//       // сделать что-нибудь со значениями...
//     }
//   }
  
//   alert('Готово!');


// let i = 0;
// while (++i < 5) alert( i ); \ 1, 2, 3, 4

// let i = 0;
// while (i++ < 5) alert( i ); \ 1, 2, 3, 4, 5

// for (let i = 0; i < 5; i++) alert( i ); \ 1,2,3,4
// for (let i = 0; i < 5; ++i) alert( i ); \ 1,2,3,4

// for (let i=2; i<10; i++) {
//     if(i%2==0){
//     alert(i);
//     }
// }

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

// let i=0;  
// while (i<3) {
//     alert(`number ${i}!`);
// i++;
// }



// v=prompt("Please input the digit more than 100")
// while (v<=100 ) {
//     if (v==null){
//         break;
//     }
//     v=prompt("Please input the digit more than 100");
//     }   

/*Example*/
    // let num;

    // do {
    //   num = prompt("Введите число больше 100?", 0);
    // } while (num <= 100 && num);







/* 5 days stupid coding*/
// First incrideble code
// let num=prompt("input value");
// let j=0;
// let num2=num;
// do{
// count1:
//     for (i=2; i<num2; i++){
//         if (num2%(i)){
//         j++;   
//         }
    
//     }
//         if (j==(num2-2)){
//         console.log(num2);
//         //console.log('i = ',i);
//         } 
// num2--;
// //console.log('i = ',i);
// //console.log('one',num2)
// }while (num2!=2);
// //console.log('two',num2)
// 
// normal code
// let num=prompt("input value")
// count:for (i=3; i<=num; i++ ){
//     for (j=2; j<i; j++){
//             if (i%j) console.log(i);
//             continue count;
           
// }}

// true example
// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // Для всех i...

//   for (let j = 2; j < i; j++) { // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }

//   alert( i ); // простое число
// }


// let num=prompt("input value");
// let j=0;
// num2=num;
// for(; num2!=2; mum2--){
//     for (i=2; i<num2; i++){
//         if (num2%(i)){
//         j++;   
//         }
    
//     }
//         if (j==(num2-2)){
//         console.log(num2);
//         } 
        
// }


// let a = 3 + 2;

// switch (a) {
//   case 4:
//     alert('Правильно!');
//     break;

//  // (*) группируем оба case
//   case 5:
//     alert('Неправильно!');
//     alert("Может вам посетить урок математики?");
//     break;

//   default:
//     alert('Результат выглядит странновато. Честно.');
// }


// let browser = prompt ("Please input your browser");
// if (browser=="Edge"){
//     alert ("You've got the Edge!")
// }
// else if (browser=="Chrome" || browser=="Safari" || browser=="Opera" || browser=="Firefox" ) {
//     alert ("Ok, we support these browsers too")
// }
// else {alert ("We hope that this page looks ok!")}

// const number =+prompt ('Please input a number from 0 to 3', '');
// switch(number){
// case 0:
//     alert("your input digit 0");
//     break;  
// case 1:
//     alert("your input digit 1");
//         break;  
// case 2:
// case 3:
//     alert("your input digit 2 may be 3");
//     break;
    
// default: alert("your input a digit which doesn't like 0,1,2,3");

// }


// Functions

// let userName = 'Вася';

// function showMessage() {
//   userName = "Петя"; // (1) изменяем значение внешней переменной

//   let message = 'Привет, ' + userName;
//   alert(message);
// }
// showMessage();


// function sum(a, b) {
//     return a * b;
//   }
  
//   let result = sum(6, 2);
//   alert( result );


// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('А родители разрешили?');
//     }
//   }
  
//   let age = prompt('Сколько вам лет?', 18);
  
  
//   if ( checkAge(age) ) {
//     alert( 'Доступ получен' );
//   } else {
//     alert( 'Доступ закрыт' );
//   }



//   function showPrimes(n) {

//     for (let i = 2; i < n; i++) {
//       if (!isPrime(i)) continue;
  
//       alert(i);  // простое
//     }
//   }
  
//   function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//       if ( n % i == 0) return false;
//     }
//     return true;
//   }


// home work

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else { // not necessary
//       // ...
//       return confirm('Родители разрешили?');
//     }
//   }

//  
// let age = prompt('Сколько вам лет?', 18);
// /* 1 variant */
// // function checkAge(age) {
// //    return (age > 18) ? true : confirm('Do you have permission from parrents? ');
// // }

// /* 2 variant */
// function checkAge(age) {
// return (age > 18) || confirm('Do you have permission from parrents?');
// }

// checkAge(age)

// let a = +prompt ('')
// let b = +prompt ('')
// function min(a,b) {
//  return (a>b) ? alert(a) : alert(b);
// }
// min(a,b);


// let x = prompt ('');
// let n = +prompt ('');
// function pow(x,n) {
//     if (x>1 & n>1){
//         return alert (x**n);
// }
// }
// pow(x,n);


// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   function showOk() {
//     alert( "Вы согласны." );
//   }
  
//   function showCancel() {
//     alert( "Вы отменили выполнение." );
//   }
  
//   // использование: функции showOk, showCancel передаются в качестве аргументов ask
//   ask("Вы согласны?", showOk, showCancel);



/* Arrow */

//
// //let sum = (a, b) => a + b;

/* Более короткая форма для:

let sum = function(a, b) {
  return a + b;
};
*/

// //alert( sum(1, 2) ); // 3
//

