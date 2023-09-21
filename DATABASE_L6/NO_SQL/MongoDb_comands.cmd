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
