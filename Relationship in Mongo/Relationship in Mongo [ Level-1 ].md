## Query base on MongoDB Relationship - 1
# Q1. You have a MongoDB database with two collections: "employees" and "departments." Write a MongoDB query that performs a simple $lookup to join the "employees" collection with the "departments" collection based on the "department_id" field.
	Ans=>db.employees.aggregate({$lookup: {from: "department", localField: "department_id", foreignField: "_id", as: "Address"}})

	localField means data coming from aggregation collection like collection=Employees, so loaclField will be catch Employees collection,

	"foreignField" means data coming from lookup collection like "$lookup" from "Department", so "foreignFeild" will be catch from "Department" collection

	as: means create a new FieldName "Address" to show data inside the "Employees" collection data.

	output will be: 
			{
				_id: 1,
				name: 'John Doe',
				age: 30,
				department_id: 101,
				Address: [
					{
						_id: 101,
						name: 'HR',
						location: 'New York'
					}
				]
			}

# Q2. In the same MongoDB database with "employees" and "departments" collections, create a query that performs a $lookup to join the collections and then uses $project to display only the "name" and "location" fields from the "departments" collection for each employee.
	Ans=>	
	 db.employees.aggregate([{$lookup: {from: "department", localField: "department_id", foreignField: "_id", as:"address"}}, {$project: {"address": {_id:0}}}])

# Q3. Imagine you need to find employees working in the "HR" department. Write a MongoDB query that joins the "employees" and "departments" collections using $lookup and then filters the results to show only those in the "HR" department.
	Ans=>	db.employees.aggregate([{$lookup: {from: "department", localField: "department_id", foreignField: "_id", as:"address"}}, {$match: {"address.name": {$eq: "HR"}}}, {$project: {"address": {_id:0}}}])

# Q4. You want to calculate the average age of employees in each department. Design a MongoDB query that performs a $lookup to join the "employees" and "departments" collections and then groups the employees by department to compute the average age.
	Ans=>	db.employees.aggregate([{$lookup: {from: "department", localField: "department_id", foreignField: "_id", as:"address"}}, {$group: {_id: "$_id", newAge: {$avg: "$age"}}}, {$project: {"address": {_id:0}}}])

# Q5. In your MongoDB database, you need to find employees in the "Engineering" department and display only their names and department locations. Construct a query that first joins the collections, then filters for the "Engineering" department, and finally projects the necessary fields.
	Ans=>	db.employees.aggregate([{$lookup: {from: "department", localField: "department_id", foreignField: "_id", as:"address"}}, {$match: {"address.name": {$eq: "Engineering"}}}, {$project: {"address": {_id:0}}}])

# Q6. You want to find out how many employees are under 30 and how many are 30 or older in each department. Create a MongoDB query that first joins the "employees" and "departments" collections, then groups employees by department and age range, and calculates the count in each group.
	Ans=>	
# Q7. In your MongoDB database, you want to find the average age of employees in each department. Write a query that performs a $lookup to join the collections, uses $unwind to flatten the "department" array, and then groups employees by department to calculate the average age.
	Ans=>	
# Q8. You need to find employees in the "Finance" department who are older than 30. Formulate a MongoDB query that performs a $lookup to join the collections, projects specific fields, and then filters for employees meeting the specified criteria.
	Ans=>	
# Q9. In your MongoDB database, you want to find the two youngest employees in each department. Create a MongoDB query that performs a $lookup to join the "employees" and "departments" collections, sorts employees in each department by age in ascending order, and returns only the two youngest employees from each department.
	Ans=>	
# Q10. Suppose you have an array of department IDs and you want to find all employees who belong to any of these departments. Write a MongoDB query that performs a $lookup to join the "employees" and "departments" collections, and then matches employees based on a provided array of department IDs.
	Ans=>	