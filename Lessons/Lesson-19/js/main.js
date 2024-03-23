
// DOM
// змінні
// var val1 = 12;
// console.log(val1); //12

// val1 = 13;
// console.log(val1); //13


// // --------------
// let val2 = 20;

// val2 = val2 * 2;
// console.log(val2);

// // --------------
// const val3 = 'test';

// // val3 = 23;

// val2 = '20';

// console.log(val2);

// // Типи даних
// // Boolean
// const isLoaded = true; // false
// console.log('isLoaded = ', isLoaded);

// // String
// const str = 'Hello JavaScript';
// console.log(str);

// // Number
// const num = 100.433;
// console.log(`num = ${num}`);


// // Object
// const obj = {
//     color: 'red',
//     isVisible: false,
//     'font-size': '16px',
// };
// console.groupCollapsed('Test Object');

// console.table(obj);

// console.log('color =', obj.color)
// console.log('font-size =', obj['font-size'])

// console.groupEnd();

// // Array
// const arr = [29, 27, 64, 86];
// const arr2 = [{}, [], '64', false];

// console.group('Test Array');

// console.table(obj);

// console.table(arr);
// console.table(arr2);

// console.log(arr[0]);
// console.log(arr2[3]);

// console.groupEnd();

// // Undefined
// let data1;
// console.log(data1);

// // Null
// const data = null;

// // ------------------

// function calc(x = 9, y = 10) {
//     // this
//     console.log(x + y);
// }

// calc();
// calc(2, 5);
// calc(3, 8);
// calc(6, 7);

// const func = (x = 9, y = 10) => {
//     // no this
//     return x * y;
// }
// console.log(func);

// let sum1 = func(2, 3);
// let sum2 = func(10, 3);
// let sum3 = func();

// console.log(sum1, sum2, sum3);

document.addEventListener('DOMContentLoaded', function () {
    const toggleMode = document.querySelector('#toggleMode');
    const html = document.querySelector('html');

    const input = document.querySelector('#set-title');
    const input2 = document.querySelector('#set-title2');

    const text = document.querySelector('.text');

    if (toggleMode) {

        toggleMode.addEventListener('click', function (e) {
            html.classList.toggle('dark');
        });

    } else {
        console.log('Елемент відсутній');
    }
    // ---------------------

    input.addEventListener('input', function name(e) {
        text.innerHTML = calcSum(input.value, input2.value);
    });

    input2.addEventListener('input', function name(e) {
        text.innerHTML = calcSum(input.value, input2.value);
    });

    function calcSum(price = 0, count = 0) {
        if (price > 0 && count > 0) {
            return price * count;
        } else {
            return 'No data'
        }
    }

    const toggleScroll = document.querySelector('.toggleScroll');

    toggleScroll.addEventListener('click', () => {
        html.classList.toggle('no-scroll');
    });
});

