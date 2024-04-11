## Questions (Use Aggregation to solve the bellow questions):-
Q1.	Write Mongo query to retrieve documents from the products where supplier_id is 3.
	Ans. db.products.aggregate([{$match: {supplier_id: 2}}])

Q2.	Write Mongo query to retrieve the documents from the orders collection with "status": "shipped".
	Ans. db.orders.aggregate([{$match: {status: "shipped"}}])

Q3.	Write Mongo query to find buyers who from state CA ?
	Ans. db.buyers.aggregate([{$match: {"address.state": "CA"}}])

Q4.	Write Mongo query to retrieve the amount,paymentstatus and paymentMethod from payments.
	Ans. db.payments.aggregate([{$project:{amount: 1, paymentstatus: 1, paymentMethod: 1}}])

Q5.	Write Mongo query to retrieve documents from the orders with out _id.
	Ans. db.orders.aggregate([{$project: {_id:0}}])

Q6.	Write Mongo query to retrieve name,price from the products.
	Ans. db.products.aggregate([{$project: {_id:0, name: 1, price: 1}}])

Q7.	Write Mongo query to find buyers city and zip code ?
	Ans. 
		db.buyers.aggregate([{$project: {_id:0, "address.city":1, "address.zip":1}}])
			[
				{ address: { city: 'New York', zip: '10001' } },
				{ address: { city: 'Los Angeles', zip: '90001' } }
			]

		db.buyers.aggregate([{$project: {_id:0, city: "$address.city", zip: "$address.zip"}}])
			[
				{ city: 'New York', zip: '10001' },
				{ city: 'Los Angeles', zip: '90001' }
			]

Q8.	Write Mongo query to find buyers name,email, city and zip code ?
	Ans. 
	1.	db.buyers.aggregate([{$project: {_id:0, name:1, email:1, city: "$address.city", zip: "$address.zip"}}])
		[
			{
				name: 'John Smith',
				email: 'john@hotmail.com',
				city: 'New York',
				zip: '10001'
			},
			{
				name: 'Jane Doe',
				email: 'jane@gmail.com',
				city: 'Los Angeles',
				zip: '90001'
			}
		]

	2.	db.buyers.find({},{"_id":0, "name":1, "email":1, city: "$address.city", zip: "$address.zip"})
		[
			{
				name: 'John Smith',
				email: 'john@hotmail.com',
				city: 'New York',
				zip: '10001'
			},
			{
				name: 'Jane Doe',
				email: 'jane@gmail.com',
				city: 'Los Angeles',
				zip: '90001'
			}
		]

	3.	db.buyers.find({},{"_id":0, "name":1, "email":1, "address.city":1, "address.zip":1})
		[
			{
				name: 'John Smith',
				email: 'john@hotmail.com',
				address: { city: 'New York', zip: '10001' }
			},
			{
				name: 'Jane Doe',
				email: 'jane@gmail.com',
				address: { city: 'Los Angeles', zip: '90001' }
			}
		]

Q9.	Write Mongo query to find suppliers name and phone ?
	Ans. db.suppliers.aggregate([{$project: {_id: 0, name:1, phone:1}}])

Q10.Write Mongo query to find buyers name,email, city and zip code ?
	Ans. db.buyers.find({},{"_id":0, "name":1, "email":1, "address.city":1, "address.zip":1})

Q11.Write Mongo query to find buyers city and zip code ?
	Ans. db.buyers.find({}, {"_id":0, city: "$address.city", zip: "$address.zip"})
		[
			{ city: 'New York', zip: '10001' },
			{ city: 'Los Angeles', zip: '90001' }
		]
Q12.Write Mongo query to retrieve name,price from the products.
	Ans. db.products.find({}, {"_id":0, "name":1, "price":1})
		[
			{ name: 'iPhone 13', price: 999.99 },
			{ name: 'Samsung Galaxy S21', price: 799.99 }
		]
		