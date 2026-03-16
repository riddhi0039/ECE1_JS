var employees = [];

function addEmployee(){

var name = document.getElementById("name").value;
var id = document.getElementById("id").value;
var salary = document.getElementById("salary").value;
var dept = document.getElementById("dept").value;

var emp = {
name: name,
id: id,
salary: salary,
dept: dept
};

employees.push(emp);

document.getElementById("output").innerHTML = "Employee Added";
}


function displayEmployees(){

var text = "<b>All Employees</b><br>";

for(var i=0;i<employees.length;i++){

text += "Name: " + employees[i].name +
        " | ID: " + employees[i].id +
        " | Salary: ₹" + employees[i].salary +
        " | Dept: " + employees[i].dept + "<br>";

}

document.getElementById("output").innerHTML = text;
}


function salaryFilter(){

var text = "<b>Employees with Salary > ₹50,000</b><br>";

for(var i=0;i<employees.length;i++){

if(employees[i].salary > 50000){

text += "Name: " + employees[i].name +
        " Salary: ₹" + employees[i].salary + "<br>";

}

}

document.getElementById("output").innerHTML = text;
}


function totalSalary(){

var total = 0;

for(var i=0;i<employees.length;i++){

total = total + Number(employees[i].salary);

}

document.getElementById("output").innerHTML =
"<b>Total Salary Payout:</b> ₹" + total;
}


function averageSalary(){

var total = 0;

for(var i=0;i<employees.length;i++){

total = total + Number(employees[i].salary);

}

var avg = total / employees.length;

document.getElementById("output").innerHTML =
"<b>Average Salary:</b> ₹" + avg;
}


function countDepartment(){

var deptName = prompt("Enter Department Name");

var count = 0;

for(var i=0;i<employees.length;i++){

if(employees[i].dept == deptName){

count++;

}

}

document.getElementById("output").innerHTML =
"Employees in " + deptName + ": " + count;
}