const myNewObject = {
    js: "Javascript",
    cpp: 'C++',
    swift: 'swift by apple'
}
// FOR in loop

for (const key in myNewObject) {
    // console.log(`${key} shortcut is for ${myNewObject[key]}`);
}

//  for in loop in array
const programming = ["js", "rb", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}

//  for in loop in map

const newMap = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")

for (const key in newMap) {
    // console.log(key);
}