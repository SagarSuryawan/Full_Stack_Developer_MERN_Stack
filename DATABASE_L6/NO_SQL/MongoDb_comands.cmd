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
