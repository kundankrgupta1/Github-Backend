## Find the names of employees who work in the "Finance" department and have made sales on or after "2023-09-16.
	Ans=>	 db.employees.aggregate([{$lookup: {from: "department", localField: "department_id", foreignField: "_id", as: "data"}}, {$match: {"data.name": "Finance"}}, {$lookup: {from: "sales", localField: "_id", foreignField: "employee_id", as: "sales"}}, {$match: {"sales.sale_date": {$gt: "2023-09-16"}}},{$project: {name:1, _id:0}}])

## Find the total sales count and total sales amount for each employee who has made a sale, and sort the results  by total sales amount in descending order.
	Ans=>	
## Retrieve a list of departments with more than 10 employees
	Ans=>	
## Find the employees who have worked in the company for more than 5 years
	Ans=>	
## Find the employee with the highest salary
	Ans=>	
## List the names and ages of employees in the "HR" department
	Ans=>	
## Retrieve the names of employees who have worked on the "Employee Management System" project
	Ans=>	
## Find the employees who have not made any sales
	Ans=>	
## List the names of employees who have made a sale in September 2023
	Ans=>	
## Find the departments where the average employee age is greater than 35
	Ans=>	
## Find the employees who have worked on at least three different projects
	Ans=>	
## List the names of employees who have not been assigned to any project
	Ans=>	
## Find the employees who have worked on projects from multiple departments
	Ans=>	
## Find the employees who have the highest sales amount in a single sale
	Ans=>	
## Retrieve the names of employees who have not made a sale in the last 90 days
	Ans=>	
## Find the departments where the total employee salaries exceed $500,000
	Ans=>	
## List the employees who have worked on the "Payroll Software" project and are older than 35
	Ans=>	
## Find the total number of sales and the total sales amount for each employee in the "HR" department
	Ans=>	
## List the employees who have not been assigned to any project in the "Finance" department
	Ans=>	
## List the employees who have worked on all projects in the "Engineering" department
	Ans=>	