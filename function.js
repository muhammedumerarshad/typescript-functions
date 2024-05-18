import chalk from "chalk";
function makeKarahi() {
    let karahi = "gosht " + " tail " + " Masala ";
    return karahi;
}
let responce = makeKarahi();
console.log("To make karahi you need " + responce);
function admitCard(name, Rollno, cource = "typescript", phone) {
    console.log("#=================================================#");
    console.log("Name:" + name);
    console.log("Rollno:" + Rollno);
    console.log("Cource:" + cource);
    if (phone) {
        console.log("phone: " + phone);
    }
    console.log("#===================================================#");
}
admitCard("Sunny", 420, undefined, 103216);
admitCard("Ali", 2345, "Typescript", 91724567);
console.log(chalk.bold.whiteBright("#===================================================================#"));
console.log("Liaqat National Hospital Plan For Surgeriories");
function kharchaPlan(moneyArrangmentsource, register, admitArea, operationDuration, chuttiParcha, reviewStatus) {
    console.log("Money arrangement source: " + moneyArrangmentsource);
    console.log("Register: " + register);
    console.log("Admit Area: " + admitArea);
    console.log("Operation Duration: " + operationDuration + "Hours");
    console.log("Chutti ka parcha: " + chuttiParcha);
    if (reviewStatus) {
        console.log("Review: " + reviewStatus);
    }
    console.log(chalk.bold.green("#===================================================================#"));
}
kharchaPlan("Savings", 200000, "Ward", 2, "Mandatory", "Partially satisfying");
console.log(chalk.bold.magenta("#==========================================================================#"));
function StudentCard(name, grade, Age, phone) {
    console.log("Student Name:" + name);
    console.log("Student grade:" + grade);
    console.log("student Age:" + Age);
    if (phone) {
        console.log("Phone info:" + phone);
    }
}
StudentCard("Umer", 12, 18, 912567);
console.log(chalk.bold.cyan("#==========================================================================#"));
console.log(chalk.bold.cyan("#==========================================================================#"));
console.log(chalk.bold.greenBright("Exams kay Days"));
function paperTayarri(paperName, papertype, paperNumber, prepDays) {
    console.log("Subject:" + paperName);
    console.log("Language:" + papertype);
    console.log("Number of papers:" + paperNumber);
    console.log("Gaps:" + prepDays);
}
paperTayarri("English", "Written", 7, 2);
console.log(chalk.bold.redBright("#==========================================================================#"));
