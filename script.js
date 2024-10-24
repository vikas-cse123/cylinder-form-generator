const formElement = document.querySelector("form");
const inputElement = document.querySelector("input");
const table = document.querySelector("table");
const generateButton = document.querySelector("button");
const allTareWeightValues = [15.2, 15.4, 15.6, 15.8];
// test due date
const abcd = ["A", "B", "C", "D"];
const abcdNumbers = [26, 27, 28, 29];
inputElement.value = 70;

// Cylinder serial number should lie between 600000 to 999999, both inclusive
let cylinderSerialNumberArr = [];

const getCylinderSerialNumber = () => {
    let serialNumber = Math.floor(Math.random() * (999999 - 600000 + 1) + 600000);
    if (!cylinderSerialNumberArr.includes(serialNumber)) {
        cylinderSerialNumberArr.push(serialNumber);
        return serialNumber;
    }
};

const getTareWeight = () => {
    return allTareWeightValues[Math.floor(Math.random() * allTareWeightValues.length)];
};

const getTestDueDate = () => {
    return `${abcd[Math.floor(Math.random() * abcd.length)]}-${abcdNumbers[Math.floor(Math.random() * abcdNumbers.length)]}`;
};

generateButton.addEventListener("click", () => {});

const generateFormData = (totalFormEntries) => {
    for (let i = 0; i < totalFormEntries; i++) {
        const srNo = i + 1;
        let cylinderSerialNumber = getCylinderSerialNumber();
        while (cylinderSerialNumber === undefined) {
            cylinderSerialNumber = getCylinderSerialNumber();
        }
        const tareWeight = getTareWeight();
        const grossWeight = tareWeight + 14.2;
        const testDueDate = getTestDueDate();
        console.log(testDueDate);

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${srNo}</td>
            <td>${cylinderSerialNumber}</td>
            <td>${tareWeight}</td>
            <td>${grossWeight.toFixed(1)}</td>
            <td>14.2</td>
            <td>ok</td>
            <td>${testDueDate}</td>
            <td>ok</td>
            <td>ok</td>
            <td>ok</td>
            <td>ok</td>
            <td>ok</td>
            <td></td>
        `;

        table.append(row);
    }
};

formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    formElement.classList.add("hide");
    generateFormData(inputElement.value);
});

generateButton.click();
