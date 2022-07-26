// homework 
// 1. ამოიღეთ user ცვლადის სტუდენტის სტატუსი;


// let  user = {
//     firstname:'giorgi',
//     lastname: 'smith',
//     age: 25,
//     studentstatus: 'active'
//     };

//     console.log(user.studentstatus);
    
    
// 2. შექმენით მასივი, და დაბეჭდეთ სათითაოდ თითოეული ელემენტი (for, while);


// let array = ['leila', 'londa', 'natia', 'givi'];

// for (let x = 0; x < array.length; x++) {
//     console.log(array[x]);
// }

// let y = 0;
// while (y < array.length) {
//     console.log(array[y]);
//     y++;
// }

// 3. შექმენით მასივი, და ამოიღეთ ყველა რიცხვი რომელიც მეტია 5ზე, for ციკლის გამოყენებით.

// let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

// for (let x = 0; x < numbers.length; x++) {
//     if (numbers[x] > 5) {
//         console.log(numbers[x]);
//     }
// }

// // 4.მოცემულია ობიექტი: თუ უსერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი:  
// hello;თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello giorgi;
// თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello world;
// ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;


// var user = {
// 	name: 'giorgi',
// 	age:  20,
// 	studentstatus: 'active'
// }

// if (user.age < 18 && user.studentstatus == 'active') {
//     console.log('hello');
// } else if (user.name == 'levani') {
//     console.log('hello giorgi');
// } else if (user.studentstatus == 'active' || user.age < 25) {
//     console.log('hello world');
// } else {
//     console.log('error');
// }

// 5.მოცემულია მასივი. გამოიტანეთ მარტო სრტინგები;

// let array = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas'] ;

// for (let fruit of array) {
//     if (typeof fruit == 'string') {
//         console.log(fruit);
//     }
// }

// 6. მოცემული მასივიდან ამოარჩიეთ მხოლოდ ციფრები, რომელიბიხ 5-ის ჯერადია

// let array = [32, 10, 'hello', null, 'hello2', 50 ];

// for (let x of array) {
//     if (x % 5 == 0 && x != null) {
//         console.log(x);
//     }
// }

// 7.მოცემული მასივიდან for ციკლი ს საშუალებით კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:

// let array = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ];

// for (let x = 0; x < array.length; x++) {
//     for (let y = 0; y < array[x].length; y++) {
//         if (array[x][y] > 0) {
//             console.log(array[x][y]);
//         }
//     }
// }

// 8.
// 1.ამოიღეთ მარტო ლუწი რიცხვები
// 2.ამოიღეთ კენტი რიცხვები

// let array = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]

// for (let x of array) {
//     if (x % 2 == 0) {
//         console.log(x);
//     }
// }

// for (let x of array) {
//     if (x % 2 == 1) {
//         console.log(x);
//     }
// }

// 9. ცვლადს აქვს ორი მნიშვნელობა “ka” და “en
//  დაწერეთ პირობა, თუ ცვლადი უდრის “ka” -ს გამოიტანეთ ნებსიმიერი ტექსტი ქართულად; თუ ცვლადი უდრის “en”- ს გამოიტანეთ ნებისმიერ ტექსტი ინგლისურად;
// დაწერეთ კოდი if-ით და switch case-ით;

// let item1 = 'ka'; // ka || en

// if (item1 == 'ka') {
//     console.log('ქართული');
// } else if (item1 == 'en') {
//     console.log('english');
// }

// switch (item1) {
//     case 'ka':
//         console.log('ქართული');
//         break;
//         case 'en':
//             console.log('english');
//             break;
// }
