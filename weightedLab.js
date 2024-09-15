
// Part 2
const csvData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`

let rows = csvData.split('\n')
//  console.log (rows) //split parts of the strings using .splt

let heads = rows[0].split(',')
// console.log(heads)

colunmCount = heads.length
// console.log(colunmCount) // counting the number of headers

let dataArray = [heads]
// console.log(dataArray)

for (i = 1; i < rows.length; i++) {
    let columns = rows[i].split(',');
    dataArray.push(columns);
}
let cachedArray = dataArray

// console.log(cachedArray)





//part 3

const data = [
    ["ID", "Name", "Occupation", "Age"],
    ["42", "Bruce", "Knight", "41"],
    ["57", "Bob", "Fry Cook", "19"],
    ["63", "Blaine", "Quiz Master", "58"],
    ["98", "Bill", "Doctor’s Assistant", "26"]
]

const head = data[0];
for (let i = 0; i < head.length; i++) {
    head[i] = head[i].toLowerCase();
}


const newData = [];


data.slice(1).forEach(row => {
    let obj = {};
    head.forEach((key, index) => {
        obj[key] = row[index];
    });

    newData.push(obj);
});


console.log(newData);
// part 4

let lastElement = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }
]

let sortedArray = lastElement.slice(0, -1);

// console.log (sortedArray) // 1. uncomment to get the answer

let indexOne = { id: "48", name: "Barry", occupation: "Runner", age: "25" }

sortedArray.splice(1,0,indexOne)

// console.log(sortedArray)2. uncomment to get the answer

let lastIndex = { id: "7", name: "Bilbo", occupation: "None", age: "111" }

sortedArray.splice(4,0,lastIndex)

console.log(sortedArray) // 3. uncomment for answer

let totalAge = 0; // Variable to store the cumulative sum of ages

// Iterate over the array of objects
for (let i = 0; i < sortedArray.length; i++) {
    // Convert the age from string to number and add to totalAge
    totalAge += Number(sortedArray[i].age);
}

// Calculate the average age
let averageAge = totalAge / sortedArray.length;

console.log(`Average Age: ${averageAge}`);




