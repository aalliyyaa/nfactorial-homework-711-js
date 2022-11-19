// <!-- task 01 -->

const age = prompt("Age?")
function checkAge(age) {
    return (age>18)? true : confirm ('Родители разрешили?')};

function checkAge(age) {
    return (age>18) || confirm ('Родители разрешили?')
}

// task02
function pow(x,n) {
    let result =x;

    for (let i =1; i<n;i++){
        result *=x;
    }
    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');
(n<1)? alert (`Степень ${n} не поддерживается, используйте натуральное число`):alert( pow(x, n));

// task03

function ask(question, yes, no) {
    confirm(question)? yes():no();
  }
ask(
    "Вы согласны?",
    ()=> alert("Вы согласились"),
    () => alert ("Вы отменили выполнение.")
);

// task04

let arr = [5, 2, 1, -10, 8];

arr.sort((a,b) => a+b);
alert( arr ); // 8, 5, 2, 1, -10

