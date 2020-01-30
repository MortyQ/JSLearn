let a = {
    name: "one",
    subname: "odin",
}

let b = {
    name: "two",
    subname: "dva",
}

let c = {
    name: "three",
    subname: "tri",
}

a.sex = "male";
a.work = "ODIIN";

b.sex = "female";
b.fathername = "DVAA";
b.age = 22;

b.sex = "male";
b.soneName = "TRIIII";
b.age = 44;

// for ( let key in a ){
//     alert(typeof key)
// }
// for ( let key in b ){
//     alert(typeof key)
// }
// for ( let key in c ){
//     alert(typeof key)
// }

let person = [{...a }, {...b }, {...c }]


for (let i = 0; i <= person.length - 1; i++) {
    console.log(person[i])
}

for (let i = 0; i <= person.length - 1; i++) {
    console.log(person[i].name, person[i].subname)
}

console.log(Object.values(person[0, 1, 2]));


for (let i = 0; i <= person.length - 1; i++) {
    for (let j = 0; j <= person.length - 1; j++) {
        person[j].fullname = "Alex"
    }
}

let json = JSON.stringify(person);
let jsonParce = Json.parce(json);



let str = "<style> table:hover {font-size: 100px; color: #ffe;margin-top: 100px ; transform: rotate(15deg); background-color: #5488af;} </style><table border='1'><tr><th>ИМЯ</th><th>ФАМИЛИЯ</th></tr>"
for (let i in a) {
    str += < tr > < td > $ { person[i].name } < /td><td>${person[i].surname}</td > < /tr>
}
str += "</table>"
document.write(str)