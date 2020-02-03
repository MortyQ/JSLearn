let persons = [{
        surname: 'Olala',
        name: 'OlALA',
        phone: 'iphoneXR',
        number: "+380666267757",
        favoritFilms: "GreenBoock",
    },
    {
        surname: 'ON',
        name: 'Dryg',
        phone: 'apple',
        number: "+380666267757",
        sex: "male",
        gamma: "retard",
    },

    {
        surname: 'OnaNe',
        name: 'Irina',
        phone: 'blackberry',
        number: "+380666267757",
        age: '23'
    }
]


var header = {}
for (let person of persons) {
    header = {...header, ...person };
}
header = Object.keys(header)

table = "<table border = '3 solid'><tr  bgcolor = '#f1c40f'>";
for (let key of header) {
    table += `<th border ='3 dashed' >${key}</th>`
}
table += `</tr>`
var i = 0
for (person of persons) {
    if (i % 2) {
        table += `<tr bgcolor = '#f1c40f'>`;
    } else {
        table += `<tr bgcolor = '#7f8c8d'>`;
    }
    i++;
    for (let k of header) {
        if (person[k]) {
            table += `<td>${person[k]}</td>`;
        } else {
            table += `<td>${'-'}</td>`
        }
    }
    table += `</tr>`
}
table += "</tr></table>"

document.write(table)