1) open MongoDB in terminal.
==> mongosh        [it will open the mongodb console]


2) list all databases in MongoDB.
==> show databases;  OR  show dbs;      
[it will list all database]



3)Select particular database.
==> use name_of_database;       
 [it will select database to work on it]



4)How to print all collection stored in a database.
==> show collections;

5)Print all the documents of a collection.
==> db.collection_name.find();   
 [it will print all documents of collection]



6)Create a new database.        
==>use new_database_name;      
 [use keyword creats a new database if there is no already present db with same name] 



7) If new database is empty then it will not list new database .Beacause in MongoDb if database is empty it will not show in list of databases;


8) add new collection to the database
==> db.createCollection("students")
                      collectionName



9)add record to the collection 
db.students.insertOne({key1:value1,key2:value2, . . })


10) add multiple records ti the collection 
==> db.collection_name.insertMany([
    {
        key:value,
        key:value
    },
    {
        key:value,
        key:value
    },
    {
        key:value,
        key:value
    }

])

11) import data without mongodb compass
mongoimport --db sales --collection sales_data --file sale.json
sales is database name and sales_data is collection name and sale.json is file where data is present.


12)count no. of documents[records] in collection.
==> db.collection_name.find().count()

13) get certain ammount of documents [record]
 ==> db.collection_name.find().limit(10);
 it will show only 10 no. of records.

 14) offset,skip some no. of record and and print some no of records
 ==> db.collection_name.find().skip(10).limit(2)
 it will print 2 records before that it skip 10 records.

 15)filter the record with two or more condotion .
 ==>db.collection_name.find({$or:[{condition1},{condition2}]})
 it will print the which fullfilled both conditions.

 16)PROJECTIONS
 if we want to get some specific key - values pairs this process called projections.
 first arguments of find function is an object which takes filteration criteria.
 it can accept another argumentas an object.we can also pass first arguments empty.

 ==>db.collectionName.find({filter1: value1...}, {property1: true,property2: true....});

 if we write some key with false then records will print without that key value pairs.

 ==>db.collectionName.find({},{property1:false,property2:false});
 Now this will bring everything apart from property1 and property2

 17) Delete records from collection 
 ==>db.collection_name.deleteOne({Filter1:"Value1",...})
 to delete multiple records from collection use "deleteMany" function
 ==>db.collection_name.deleteMany({filter1:"Value1",...})

 18)Update records from collections.
 i)to update single record from collection
 ==>db.collection_name.uodateOne({filter1:value1},{$set:{key:value}})
 ii) to update more than one records ,just replace updateOne to UpdateMany.

 ii) inc  value 
 ==>db.collection_name({},{$inc:{key:1}})
 it will increase by 1
 if key:-1 it will decrease by 1

 19)Distnict Values of key.
 ==>db.collection_name.distinct("key")
it will give you a distinct value of key.
==============================================================================================================
20)OPERATORS

1)$ne: Not equal to
2)$eq: Equals to
3)$lt:less than
4)$lte:less than equals to
5)$ge:greater than
6)$gte:greather than equals to
7)$and: logical and
8)$or: logical or
9)$in: means multiple values of keys in different records [one key have different values]
10)$not:
11)$nor:

i)Not Equals to [:ne]
==>db.collection_name.find({key:{$ne:"Value"}})
==>db.students_info.find({stud_country:{$ne:"India"}})
it will print the data information which stud_country is not equals to India.

ii)Two Operator "AND" , $gt: , $lt: , access nested object value.
==>db.collection_name.find({$and:[{"dewPoint.value":{$gt:500}},{"dewPoints.value":{$lt:900}}]})
in the above query will print dewPoints.value greater than 500 and less than 900. with 'and' Operator beacause of two condition apply.

iii)IN Operator
==>db.collection_name.({salary:{$in:[30000,50000,80000,90000]}})
if you want a find a  records based on property and comapare that with bunch of values in array

21)Analysing query
it will Analysize queries using explain function.it shows explaination of query
==>db.collection_name.find().explain("executionStats")

22)INDEXING
indexing is a technique used to improve the performance of database queries by allowing the database to quickly locate and retrive specific documment from collection

i) list all indexing
==>db.collection_name.getIndexes();

ii) to Remove indexing.
==>db.collection_name.dropIndex("index_name")

iii)Create index for Numbers
==>db.collection_name.createIndex(key:1)

iv) create index for string
==>db.products.createIndex({ product_name: "text" });