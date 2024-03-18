# Employee-Payroll-Tracker
User Story:
AS A payroll manager
I WANT AN employee payroll tracker
SO THAT I can see my employees' payroll data and properly budget for the company

Acceptance Criteria:
GIVEN an employee payroll tracker
WHEN I click the "Add employee" button
THEN I am presented with a series of prompts asking for first name, last name, and salary
WHEN I finish adding an employee
THEN I am prompted to continue or cancel
WHEN I choose to continue
THEN I am prompted to add a new employee
WHEN I choose to cancel
THEN my employee data is displayed on the page sorted alphabetically by last name, and the console shows computed and aggregated data

Solutions:
The Employee payroll tracker displays and empty employee roster
"Add Employee" button prompts the user to enter the Employee first name, Last name and salary.
Added loop to prompt user to have the next step approached if the first name entered contains only letters and have the first letter capitalized, did the same for the last name and for salary, it should just be numbers.
After the succesful addition of employees, the employees data is displayed in an alphabetical order from last name in a table with their respective salaries. 
