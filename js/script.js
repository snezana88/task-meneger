// let str = "Hello, world!";
// console.log(str);
// alert("Привет " + str);


// let x, y, sum;
// x = parseFloat(prompt("Введите первое число", 0));
// y = parseFloat(prompt("Введите второе число", 0));

// sum = x + y;

// alert(sum);


// let num1, num2;
// num1 = -5;
// console.log(++num1);
// console.log(-num1);

// num2 = 1;
// num2 +=  5;
// console.log(num2);


/*--------задача о фотографиях----------- */
// let numberPhotoOnPage,
//     numberPhotoInFolder,
//     numberPage;
// numberPhotoInFolder = parseInt(prompt("Введите кол-во фото в папке", 0));
// numberPhotoOnPage = parseInt(prompt("Введите кол-во фото на одной странице",0));

// numberPage = Math.ceil(numberPhotoInFolder/numberPhotoOnPage);

// alert(numberPage);


/*---------задача 1.11--------- */

//ввести данные prompt

//рассчитать что-то

//вевысти результат/ы  alert  console.log


// let number = parseInt(prompt());
// let n1,n2,n3,n4,n5, numberNew;

// n1 = number % 10;
// n2 = Math.floor(number / 10) % 10;
// n3 = Math.floor(number/100) % 10;
// n4 = Math.floor(number/1000) % 10;
// n5 = Math.floor(number/10000);

// numberNew = n1 + n2*10 + n3*100 + n4*1000 +n5*10000;



/*-----------if-else----------------- */
// задача на минимум и максимум двух чисел
// let x1, x2, min, max;
// x1 = parseFloat(prompt('Введите первое число',0));
// x2 = parseFloat(prompt('Введите второе число',0));
// min = x1;
// max = x1;
// if (x2 < min){
//     min = x2;
// } 
// if (x2 > max) {
//     max = x2;
// }
// alert('Минимальное - ' + min + ', максимальное - ' + max);


// минимум среди трех чисел
// let x1, x2, x3, min;
// x1 = parseFloat(prompt('введите первое число', 0));
// x2 = parseFloat(prompt('введите второе число', 0));
// x3 = parseFloat(prompt('введите третье число', 0));
// min = x1;
// if (x2 < min) {
//     min = x2;
// }
// if (x3 < min) {
//     min = x3;
// }
// alert('Минимум - ' + min);

//найти минимум среди n чисел
// let n, x, min;
// n = parseInt(prompt('введите кол-во чисел', 1));
// min = parseFloat(prompt('введите число', 0));
// for (let i = 0; i < n - 1; i++){
//     x = parseFloat(prompt('введите число', 0));
//     if (x < min) {
//         min = x;
//     }
// }
// alert('Минимум - ' + min);

//найти минимум среди последовательности чисел, ввод которой заканчивается 0. При этом 0 не входит в последовательность
// let x, min;
// x = parseFloat(prompt('введите число', 0));
// min = x;
// while( x != 0 ){
//     if (x < min) min = x;
//     x = parseFloat(prompt('введите число', 0));    
// }
// alert('минимум - ' + min);

//разбор натурального числа на цифры
let number, digital;

number = parseInt(prompt('введите натуральное число', 0 ));

while (number != 0) {
    digital = number % 10;
    console.log (digital);
    number = Math.floor(number / 10);
}
