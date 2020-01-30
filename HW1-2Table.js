let result = [];
// Таблица умножения
let table = (size) => {
    for (let i = 0; i <= size; i++) {
        let a = [];
        for (let j = 0; j <= 10; j++) {

            a[j] = i * j
        }
        result[i] = a

    }
    return result
}