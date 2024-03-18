// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


//function to capilize the first letter of a string
const capitalizeFirstLetter = function(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


  // Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const employees = [];
 let continueAdding = true;

//loop to prompt for employee data
  while (continueAdding) {
    let firstName, lastName, salary;
    //prompt the user for the employee's first name
    firstName = prompt("Enter First Name:");
    //check if the first name input contains only letters
    
    

  //prompt the user for the employee's last name
  lastName = prompt("Enter the employee's Last Name:");
 // check if last name input contains only letters//
    
    
  
    const salaryInput = prompt("Enter Salary:");
    salary = parseFloat(salaryInput);
   //check if the salary is a number
    if (isNaN(salary)) {
      alert("Salary must be a number");
      break;
    } 
    
  
   
  //create an employee object with the user's input
  const employee = {
    firstName: firstName,
    lastName: lastName,
    salary: salary,
  };

  //add the employees object to the employees array
    employees.push(employee);

  //ask the user if they want to add another employee or cancel
  continueAdding = confirm("Do you want to add another employee?");
}
  



  return employees;
}
// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary=0;
  for (let i=0;i<employeesArray.length;i++) {
    totalSalary += employeesArray[i].salary;
  }
  let averageSalary = totalSalary / employeesArray.length;
  console.log('Average Salary:', averageSalary);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randomIndex = Math.floor(Math.random() * employeesArray.length);

// Display the random employee
const randomEmployee = employeesArray[randomIndex];

//log the random employee to the console
console.log('Random Employee:', randomEmployee.firstName, randomEmployee.lastName, randomEmployee.salary);
}
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData)
