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
 

