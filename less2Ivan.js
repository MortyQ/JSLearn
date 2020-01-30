// Помогает рандомно выбивать Ключи \ Значения
arr[Object.keys(arr)[Math.floor(Math.random() * 3)]]


// Вложенный Цикл
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; i++) {
        console.log(j);
    }
}


// Разница между  [key] \ ["key"] \ .key
var person = {
    name: "Ivan",
    surname: "Ivanovv",
    "fatherName": "Petrovich",
}

typeof person
    "object"
person.fatherName
person["name"]

"Ivan"
var key = "surname";

undefined
person[key]
"Ivanovv"
person.key
undefined

// Перебор Ключей (ЦИКл)

var person = {
    name: "Ivan",
    surname: "Ivanovv",
    "fatherName": "Petrovich",
}

let keys = Object.keys(persona)
keys
for (let i = 0; i < keys.length; i++) {
    let key = key[i]
    console.log(key, person[key])
}

//

for (let key in person) {
    console.log(key, person[key])
}

// Таблица ХТМЛ , Вывожу Обьект в таблицу 
let table = "<table>\n"

var person = {
    name: "Ivan",
    surname: "Ivanovv",
    "fatherName": "Petrovich",
}

for (let key in person) {

    table += `<tr> <td>  ${key} </td> <td>  ${person[key]}  </td> </tr>\n `

}

table += "</table>"
document.write(table)

// table += "<tr><td>" +  key + "</td><td>" + person[key] + "</td></tr>\n" 

// FOR OF  ВЫВОДИТ ВСЕ БУКВЫ .||  В КОДЕ ВЫВОДИТ В РАЗНЫХ РЕГИСТРАХ

for (let litter of "asdfghsdgfsadgsaaa") {

    document.write(litter, litter.toUpperCase())
}
for (let litter of "asdfghsdgfsadgsaaa") {

    console.log(litter, litter.toUpperCase())
}

//JSON

var person = {
    name: "Ivan",
    surname: "Ivanovv",
    "fatherName": "Petrovich",

}
person.education = undefined

JSON.stringify(person) // (person, null, 2) Создает красивое дерево для легкого чтения


JSON.parse(`{"name": "Ivan"}`)

// Деструкторизация


var { name, fatherName, age: a, education = "hight", ...otherKeys } = person //Создать 2 переменных которые уже есть в переменной person, age  ляжет в переменную a 

// {age: 50, sex:"male", ...person}  // CLON

var arr = [1, "string", null]
var [one, ...rest] = arr
// [1, 2, 3, ...arr]



alert(`Privet ${prompt('Name?')}`) // ОЧЕНЬ УДОБНО !!!!



for (let pair of Object.entries(person)) {
    // var key , value   
    var [key, value] = pair
    console.log(key, value)
}



for (let [key, value] of Object.entries(person)) {
    // var key , value   
    // var [key , value ] = pair 
    console.log(key, value)
}


a = 5
b = 10

    [a, b] = [b, a]


[1, 2, 3, 4].map(x => x * 2) //  УМНОЖАЕТ КАЖДОЕ ЧИСЛО !!! ОЧЕНЬ УДОБНО !!! МНОГО ФУНКЦИОНАЛЕН !!!
    [1, 2, 3, 4].map(x => console.log(x), x * 2) // Проверить сколько раз оно используется

console.log([1, 2, 3, 4].filter(item => item % 2)) // ФИЛЬТР С БУЛЕНОМ