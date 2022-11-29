const display = require("../view/display");
const dataManager = require("../model/dataManager");

const getAllStudents = () => {
    const students = dataManager.readData("data.json");
    display.printData(students, "Students Table:");
}
const statistics = () => {
    const students = dataManager.readData("data.json");
    display.printMessage(students.length, "Total number of students: ");
}
let classOfStudents = [];
const studentsInEachClass = () => {
    const students = dataManager.readData("data.json");
    // let classOfStudents = [];
    // for (let i=0; i<students.length; i++){
    //     if(!(students[i].class in classOfStudents)) {
    //         classOfStudents[students[i].class]=[];
    //     }
    // }
    // for (let i=0; i<students.length; i++){
    //     classOfStudents[students[i].class].push(students[i].name);
    //     display.printData(classOfStudents[i].length);
    // }
    for (let i = 0; i < students.length; i++) {
      
        if(students[i].class==="Steelers 12th Grade"){
            classOfStudents.push(students[i].class);
        }
    }
    display.printData(classOfStudents.length);
}

const hasChosen = () => {
    const userOption = display.getInput("Please enter a number: ");
    if (userOption === "1") {
        getAllStudents();
    } else if (userOption === "2") {
        statistics();
    } else if (userOption === "3") {
        studentsInEachClass();
    } else if (userOption === "4") {
        display.printMessage("'Delete student' not implemented yet.", true);
    } else if (userOption === "0") {
        return false;
    } else {
        display.printMessage("There is no such option.", true);
    }
    return true;
}

const handleSubmenu = () => {
    const optionsArray = ["Exit submenu", "List students", "Add a new student", "Update student", "Delete student"];
    display.printMenu("Student Classes Submenu", optionsArray);
}

const submenu = () => {
    let isRunning = true;
    while (isRunning) {
        handleSubmenu();
        try {
            isRunning = hasChosen();
        } catch (error) {
            display.printMessage(error, true);
        }
    }
}

module.exports = {submenu};