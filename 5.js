let data = new Date;
let weekend = data.getDay();

let check = (days) => {
    (weekend === 0 || weekend === 6) ? console.log('Отдыхай Братишка'): console.log('Пора поработать')
}
check(weekend)