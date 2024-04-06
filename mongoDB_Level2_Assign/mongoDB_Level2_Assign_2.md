Q1. Find all documents where the gender is 'Male' and salary is less than or equal to 70000.
	1. we can get all the document according to the question is that => db.Employees.find({$and: [{gender: "Male"}, {salary: {$lt:80000}}]})

Q2. Retrieve documents where the age is greater than or equal to 30 and the last name is not 'Bestall'
	1. so, here we can get data that is age >=30 and ;ast_name is not "Bestall" by using this command => db.Employees.find({$and: [{age: {$gte:30}}, {last_name: {$ne:"Bestall"}}]})

Q3. Find all documents where the gender is 'Female' and (age is greater than 40 or salary is less than 80000).
	1. here, we can achive this by using this command => db.Employees.find({gender: "Female", $or: [{age: {$gt:40}},{salary: {$lt:40000}}]})

Q4. Retrieve all documents where the salary is greater than 100000.
	1. so we can get all salary which is greater than 100000 by using this command => db.Employees.find({salary: {$gt: 100000}})

Q5. Find all documents where the age is equal to 30.
	1. so that do this by using this command => db.Employees.find({age: {$eq:30}})

Q6. Retrieve documents where the salary is less than 75000.
	1. here do this through this command => db.Employees.find({salary: {$lt:75000}})

Q7. Find all documents where the age is less than 35 and the salary is greater than or equal to 80000.
	1. ok sure, we can do that by using this command=> db.Employees.find({$and: [{age: {$lt:30}},{salary: {$eq:80000}}]})
