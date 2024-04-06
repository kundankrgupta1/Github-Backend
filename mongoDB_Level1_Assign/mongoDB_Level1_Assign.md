Q1.How do you insert a new document into a collection named products with the following details: name: "Laptop", price: 1200, category: "Electronics"?

	1. create collection using => db.createCollection("Products")
	2. insert data using insertOne => db.Products.insertOne({name: "Laptop", price: 1200, category: "Electronics"})
	   it will be generated automatically id for each data in the database.
	3. to show all added data we can use => db.Products.find();


Q2.How do you find all documents in the products collection where the category is "Electronics"?

	1. to get only Electronics Category Data, we can use => db.Products.find({category: "Electronics"})


Q3.How do you update the price of the "Laptop" in the products collection to 1000?
	
	1. we can update price of particular data we can use => db.Products.updateOne({price: 1200}, {$set:{price: 2000}})
	2. price will br change after running this command and we check by using => db.Products.find()


Q4.How do you find products in the products collection that are in the "Electronics" category and have a price less than 1500?
	
	1. we can find the products that their price are less than 1500 by using this command => db.Products.find({price: {$lt: 1500}})
	   => it will return more products depends on how many data have there in the created database by you.


Q5.How do you find products in the products collection that are either in the "Electronics" category or have a price less than 500?

	1. now we can filter data according to category and price by using this command => db.Products.find({$or:[{category: "Electronics"},{price: 1500}]})


Q6.How do you increment the price of all products in the products collection by 200?

	1. If we want to increase price by 200 on all products then we can achive this by using => db.Products.updateMany({}, {$inc: {price: 200}})


Q7.How do you find all products in the products collection with a price between 500 and 1500?
	1. if we want to get data btw 500 to 1500, it means that we want data less than 1500 and greater than 500, so we can achive by using this command => db.Products.find({$and: [{price: {$lt:1500}}, {price: {$gt: 500}}]})


Q8.How do you delete all products from the products collection that are in the "Furniture" category?

	1. we can delete all category persent in the products database without deleting "Furniture" Category, we can do this by using this method =>  db.Products.deleteMany({category: {$ne: "Furniture"}})


Q9.How do you count the number of products in the "Electronics" category in the products collection?

	1. we can count by field name using this category => db.Products.find({category: "Electronics"}).count()


Q10.How do you find all products in the products collection that are not in the "Electronics" category?

	1. we can achive this by using this command => db.Products.find({category: {$ne: "Electronics"}})


Q11.How do you insert multiple documents into the users collection with the following details: { name: "Alice", age: 30 }, { name: "Bob", age: 25 }?

	1. we can do => db.Products.insertMany([{},{},{}...{}])


Q12.How do you find documents in the products collection where the category is either "Electronics" or "Books"?

	1.  we can find two categories products by using this commmand => db.Products.find({category: {$in: ["Electronics", "Books"]}})