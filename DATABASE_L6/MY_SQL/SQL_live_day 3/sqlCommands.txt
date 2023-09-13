1) mysql console  ==>    mysql -u root -p

2)list of databases ==>  show databases;

3)create database ==> create database Movies;      Note:Movies is name of database.

4)delete database ==> drop database Movies;

5)to select database ==> use Movies;

6)create tables in database ==> create table MoviesList(name varchar(100),rating integer);
Note: in the above syntax tables name is MoviesList (column_name varchar is datatype (100) limit,rating is column name integer is datatype).

7)add data into tables ==> insert into MoviesList(name,rating) value ("spider man", 4.5);

8) print and retrive data from tables.
i)select * from MoviesList;
ii)select column name form MoviesList;

9)add mutiple data in single line ==> insert into MoviesList (name,rating) value (),(),(),();

10) To clear comaand scrren \! cls

11) print selected data from table which satisfy given condition ==> select * from movies where rating > 5.we can use "and"  & "or" like javascript.we can also use "equal to operator " by "=".no need of == or === .

only selected data will print which satisfy given condition.



12) prefix matching is a concept that frist some character match in given data.
    For example = you search person name from your phone contacts.
    QUERY ==> select * from movielist moviename like "spi%"
Note : % means any shuod be there .



13) suffix matching is a concept that last character match in given data.
For Example = search a name that last character ends with er.
QUERY ==> select * fron movielist moviename like "%er"
NOTE: % MEANS ANY SHOULD BE THERE .



14)find data with ecact character or number in table.

 ==> select * from movielist where moviename like "%e%";

 in the query output will all movies name haveing name "e";


 15)  SORTING DATA 

 i) we can sort data in asending and descending order.
 ii) we can sort by number and word .

 ==> select * from movielist order by rating asc; 
 above query data sort in asending order based rating column.

 ==> select * from movielist order by rating desc;
 above query sort data in desending order based on rating column.

 ==> select * from movielist order by moviename;
 above query sort like dictnary from .

 ==> select * from movielist where moviename like "%p%" order by rating asc;
above query sort data haveing moviename p in asending order.

==>select * from movielist order by moviename ,rating asc
above query sort data by moviename and rating in asending order.



16) suppose we have 100 row of data ,so need to print only 10 row 
==> select * from movielist limit 3;
above query print only three row of data .

oofset is used for startfrom ,means data is start printing from given offset value.

==> select * from movielist limit 5 offset 5;

data start printing from 6th row and print 5 rows starting from 6 position.



17)change/UPDATE data from table.

update movielist set moviename = "endgame" where moviename = "spiderman1";

change moviename spiderman1 from endgame.Update spiderman name to endgame. 

18) find data in range  => for example  salary from 15000 to 100000;

 ==> select * from empolye where salary betweem 15000 and 100000;

 where empolye is tables name and salary is column.



19) find  multiple data respective any single column;
==> select * from empolye where id in (1,3,5,7,9)
above query is find multiple based on given id.
id is column name.


20) delete single row from table.
 ==> delete from empolye where name = "sagar";
 above query use to delete row having name sagar.


21) JOINS 2 tables. inner join fetch common data on the basis of primary key of one tables is foregin key of another table. 

Empolye Table

+-----------+------+----------------------+------------+------------+
| name      | age  | role                 | address_id | contact_no |
+-----------+------+----------------------+------------+------------+
| sagar     |   25 | devops engineer      |          8 |         91 |
| vishva    |   27 | frontend engineer    |         10 |         99 |
| shubham   |   30 | backend engineer     |          7 |         95 |
| mohan     |   27 | UI UX designer       |          4 |         92 |
| kartik    |   28 | full stack developer |          1 |         93 |
| aryan     |   23 | associate developer  |          2 |         94 |
| abhisheik |   22 | Jr,frontend engineer |          5 |         98 |
| yasmin    |   24 | Jr.backend engineer  |          3 |         96 |
| neha      |   21 | CTO                  |          6 |         97 |
| subina    |   26 | graphics designer    |          9 |        100 |
+-----------+------+----------------------+------------+------------+

==============================================================================================================

Address Table

+------------+-----------------+---------+-----------+
| address_id | state           | city_id | area      |
+------------+-----------------+---------+-----------+
|          8 | Karnataka       |       6 | kormangla |
|          6 | maharashtra     |       2 | khat road |
|          1 | Andhra pradesh  |       4 | Kodur     |
|          5 | Odisha          |       7 | Bramapur  |
|          4 | Uttar pradesh   |       3 | Sitapur   |
|          7 | Punjab          |       1 | Bhatinda  |
|          2 | Gujrat          |       5 | Morbi     |
|          3 | Madhya pradesh  |      10 | Indore    |
|          9 | Kerla           |       8 | Pullad    |
|         10 | Jammu & Kashmir |       9 | shrinagar |
+------------+-----------------+---------+-----------+


INNER JOIN


i) PROBLEM STATEMENT :- There is a two tables actors and address,Actor table have details of actors and address_id and address table have a detail of address of that acotrs with primary key address_id.select .print the actors first name ,last name and address from address table.


 EXPLAINATION :- join concept. inner join ,address table primary key is used in empolye table to track address of actors .

 with the help of address_id column in empolye table[which is foregin key in empolye table] we can access data of address table.


 QUERY ==> SELECT name,role,state FROM empolye JOIN address ON empolye.address_id = address.address_id;
 
 OUTPUT ==>  name,role and state
 +-----------+----------------------+-----------------+
| name      | role                 | state           |
+-----------+----------------------+-----------------+
| sagar     | devops engineer      | Karnataka       |
| neha      | CTO                  | maharashtra     |
| kartik    | full stack developer | Andhra pradesh  |
| abhisheik | Jr,frontend engineer | Odisha          |
| mohan     | UI UX designer       | Uttar pradesh   |
| shubham   | backend engineer     | Punjab          |
| aryan     | associate developer  | Gujrat          |
| yasmin    | Jr.backend engineer  | Madhya pradesh  |
| subina    | graphics designer    | Kerla           |
| vishva    | frontend engineer    | Jammu & Kashmir |
+-----------+----------------------+-----------------+


==============================================================================================================

City Table

+---------+------------+
| city_id | city       |
+---------+------------+
|       2 | Bhandara   |
|       3 | Lucknow    |
|       6 | Musuru     |
|       9 | Ladakh     |
|      10 | Sivni      |
|       5 | gujju      |
|       1 | Pind       |
|       4 | Andravasti |
|       8 | Kerl       |
|       7 | Nagpur     |
+---------+------------+

ii) PROBLEM STATEMENT :-join 3 tables and print  name,role,city,state.

table name is empolye,table,address.

in address table there is city_id  column is present which is forign key and city_id  in city tables is primary  key.


QUERY ==> SELECT name,role,city,state FROM empolye JOIN address on empolye.address_id = address.address_id JOIN city ON address.city_id = city.city_id;

OUTPUT ==> 
+-----------+----------------------+------------+-----------------+
| name      | role                 | city       | state           |
+-----------+----------------------+------------+-----------------+
| neha      | CTO                  | Bhandara   | maharashtra     |
| mohan     | UI UX designer       | Lucknow    | Uttar pradesh   | 
| sagar     | devops engineer      | Musuru     | Karnataka       |
| vishva    | frontend engineer    | Ladakh     | Jammu & Kashmir |
| yasmin    | Jr.backend engineer  | Sivni      | Madhya pradesh  |
| aryan     | associate developer  | gujju      | Gujrat          |
| shubham   | backend engineer     | Pind       | Punjab          |
| kartik    | full stack developer | Andravasti | Andhra pradesh  |
| subina    | graphics designer    | Kerl       | Kerla           |
| abhisheik | Jr,frontend engineer | Nagpur     | Odisha          |
+-----------+----------------------+------------+-----------------+


LEFT OUTER JOIN 

In left outer join all data return from left table[table 1] and common data from both tables.
ALL DATA FROM ADDRESS TABLE [LEFT TABLE] AND COMMON DATA FROM BOTH TABLES

query ==> SELECT name,role,state,area FROM address left outer JOIN empolye ON empolye.address_id = address.address_id;


OUTPUT ==>

+-----------+----------------------+-----------------+-----------+
| name      | role                 | state           | area      |
+-----------+----------------------+-----------------+-----------+
| sagar     | devops engineer      | Karnataka       | kormangla |
| neha      | CTO                  | maharashtra     | khat road |
| kartik    | full stack developer | Andhra pradesh  | Kodur     |
| abhisheik | Jr,frontend engineer | Odisha          | Bramapur  |
| mohan     | UI UX designer       | Uttar pradesh   | Sitapur   |
| shubham   | backend engineer     | Punjab          | Bhatinda  |
| aryan     | associate developer  | Gujrat          | Morbi     |
| yasmin    | Jr.backend engineer  | Madhya pradesh  | Indore    |
| subina    | graphics designer    | Kerla           | Pullad    |
| vishva    | frontend engineer    | Jammu & Kashmir | shrinagar |
| NULL      | NULL                 | nandora         | AAA       |
| NULL      | NULL                 | khamTalav       | BBB       |
+-----------+----------------------+-----------------+-----------+





RIGHT OUTER JOIN 


OUTPUT ==>
 
 +-----------+----------------------+-----------------+-----------+
| name      | role                 | state           | area      |
+-----------+----------------------+-----------------+-----------+
| sagar     | devops engineer      | Karnataka       | kormangla |
| vishva    | frontend engineer    | Jammu & Kashmir | shrinagar |
| shubham   | backend engineer     | Punjab          | Bhatinda  |
| mohan     | UI UX designer       | Uttar pradesh   | Sitapur   |
| kartik    | full stack developer | Andhra pradesh  | Kodur     |
| aryan     | associate developer  | Gujrat          | Morbi     |
| abhisheik | Jr,frontend engineer | Odisha          | Bramapur  |
| yasmin    | Jr.backend engineer  | Madhya pradesh  | Indore    |
| neha      | CTO                  | maharashtra     | khat road |
| subina    | graphics designer    | Kerla           | Pullad    |
| rahul     | sales maneger        | NULL            | NULL      |
| chetan    | contactor            | NULL            | NULL      |
| kiran     | marketing            | NULL            | NULL      |
+-----------+----------------------+-----------------+-----------+


22) find the length of column    

query ==> select city,length(city) from city

OUTPUT ==> it will retunr a column new column having length.

+--------------------+--------------+
| city               | length(city) |
+--------------------+--------------+
| A Corua (La Corua) |           18 |
| Abha               |            4 |
| Abu Dhabi          |            9 |
| Acua               |            4 |
| Adana              |            5 |
| Addis Abeba        |           11 |
| Aden               |            4 |
| Adoni              |            5 |
| Ahmadnagar         |           10 |
| Akishima           |            8 |
+--------------------+--------------+


23) distinct mreans unique (not repeating)

query => select distinct city from city;

above query print all city from city table but not duplicate  city or repeating city.



24)IF ELSE IN MYSQL.
  
  i) SELECT column1,column2 IF(condition, "true value","false value")  FROM table_name;


  ii)  SELECT column1,column2
        CASE
        WHEN  condition  THEN "yes"
        ELSE "no"
        END FROM table_name;

    
    
    
   iii) NESTED IF ELSE

    SELECT column1,column2
    
    CASE
    WHEN condition THEN
    
    CASE[nested]
    WHEN condition THEN "OUTPUT"
    ELSE "OUTPUT"
    END
    ELSE "OUTPUT"
    END
    FROM table_name;



25)  group by 


QUERY ==> select count(*),district from address group by district limit 10;

it will give you no. of element for district ,group by return one row.

OUTPUT==>
+----------+----------------+
| count(*) | district       |
+----------+----------------+
|        2 | Alberta        |
|        2 | QLD            |
|        1 | Nagasaki       |
|        9 | California     |
|        1 | Attika         |
|        1 | Mandalay       |
|        2 | Nantou         |
|        5 | Texas          |
|        1 | Central Serbia |
|        1 | Hamilton       |
+----------+----------------+


26) condition only on group;

Query => select count(*) as count,district from address group by district limit 10 having count > = 5;



+-------+------------------+
| count | district         |
+-------+------------------+
|     9 | California       |
|     5 | Texas            |
|     7 | England          |
|     9 | West Bengali     |
|     8 | Uttar Pradesh    |
|     5 | Karnataka        |
|     8 | So Paulo         |
|    10 | Buenos Aires     |
|     5 | Gois             |
|     5 | Punjab           |
|     5 | Hubei            |
|     9 | Shandong         |
|     7 | Maharashtra      |
|     5 | Tamil Nadu       |
|     6 | Southern Tagalog |
+-------+------------------+