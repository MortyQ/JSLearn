let numbers = [254, 115, 78, 25, 91, 45, 37]
let arr = []

for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] > 50) arr.push(numbers[i])
}
console.log(arr)

let numbers = [254, 115, 78, 25, 91, 45, 37]


arr = numbers.filter(numbers => numbers >= 50);

numbers.forEach(function(item) {
    if (item >= 50)
        console.log(item + " ")
})

let arr = numbers.map(function(numb) {
    // if (numb >= 50)  return numb
    return (numb >= 50)
})


let age = 20
age < 25 ? (alert("OTDIHAI")) : (alert("V ARMIY IDI"))

for (let i = 0; i <= 10; i++) {
    let k = "#."
    document.write(k)
}

let arr = "."
for (let i = 0; i <= 5; i++) {
    arr += "#" + "."
}
".#.#.#.#.#.#."
document.write(arr)
for (let i = 0; i <= 6; i++) {
    arr += "#" + "."
}
".#.#.#.#.#.#.#.#.#.#.#.#.#."

let pir = ""
let f = (numb) => {
    for (let i = 1; i <= numb; i += 2) {
        let dots = (numb - i) / 2
        pir += ".".repeat(dots) + "#".repeat(i) + ".".repeat(dots) + "\n"
    }
    return pir
}

let arr = [1, 2, 5, 7, 9, 10, 12, 15, 18, 20]

arr.forEach(function(item) {
    if (item % 2 == 0)
        Math.sqrt(item)
})


for (let i = 0; i <= arr.length; i += 2) {
    console.log(Math.sqrt(arr[i]))
}

let arr = [1, 2, 5, 7, 9, 10, 12, 15, 18, 20]
let arr1 = arr.map(function(numb) {
    if (numb % 2 == 0)
        return console.log(Math.sqrt(numb))
})

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 14, 23, 55, 21, 25, 18, 27, 22, 57, 37, 28, 15, 16, 17, 18]

for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % 3 == 0) {
        console.log("FIASKO")
    } else if (arr[i] % 5 == 0) {
        console.log("POBEDA")
    } else if (arr[i] % 5 == 0 && arr[i] % 3 == 0) {
        console.log("COMBO KILL")
    } else console.log("#")
}



let user = +prompt("A")
alert(Math.pow(user, user))

let f = (numb) => {
    let result = 0
    for (let i = 0; i <= numb.length - 1; i++) {
        result += numb[i] ** 2
    }
    return result
}


let f = (numb) => {
    let result = 0;
    for (let i = 0; i <= numb.length - 1; i++) {
        result += parseFloat(numb[i])
    }
    return result
}

function sumMix(x) {
    return x.map(a => +a).reduce((a, b) => a + b);
}