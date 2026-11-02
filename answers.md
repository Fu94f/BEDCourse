### SKILL 1 : understand ORM

## 1. The video calls Sequelize a "translator".What does it translate, and from into what?

1. Sequelize can be described as a "translator" because it converts between, in our case, the code in TypeScript and the SQL in Postgres. In practice, it writes the SQL to send to Postgres and converts the rows it gets back into JavaScript objects.


## 2. What does ORM stand for? What is the "object" and what is the "relational" part?

2.ORM stands for Object Relational Mapper and it converts the tables into JavaScript objects.The "object" is the object in the code (in our case TypeScript objects), and the "relational" part is the relational database, where data is stored in tables with rows and columns connected by keys (in our case Postgres). By creating a data model, which define how the data is structured,the ORM understands how and where to put/retrive and the relations between the tables. It hides an underlying structure of tables in the database by providing the mapping between the objects and tables. 

## 3. Write the SQL that Book.findAll() runs.Then write SQL for Book.findByPk(3).

3.
````sql
SELECT * FROM books;
SELECT * FROM books WHERE id = 3;
````

## 4.In new Sequilize(...), what does each of these do : host, port, dialect, logging?
 
4. 
- HOST : is the host of the database we are connecting to, the default value is localhost;

- PORT: is the port of the database we are connecting to, in our case is 5432, the standard Postgres port;

- DIALECT : is the dialect od the database engine we are using, in our case Postgres;

- LOGGING : prints the SQL it sends to the database in the terminal. By default it prints every query, but in our case is set to false ;


## 5. What does sequelize.sync() do? What would sequilize.sync({force:true}) do and why should you never use it on a database with real data?

5. sequelize.sync() creates a table if it doesnt exist or does nothing if the table already exists.

sequelize.sync({ force: true }) creates a table if it doesn't exist, and if it already exists, it drops the table and creates it again. It should never be used on a database with real data, because the existing data in every table is deleted to create new empty tables.


## 6.Name one situation where writing plain SQL is better than using ORM.

6. Writing plain SQL is the better options when dealing with complex queries.ORM generates the SQL so,  for fine tunning, you can't really control the exact SQL it writes.

## 7. why the loan date belongs in loans and not in books or members? 
 
7. LOAN DATE belongs in LOANS because it describes a reletionship that inolves both books and member and it doesnt belong to either alone. It wouldn't necesserly be practicalin terms of functionality, for exemple in BOOK, a book row has  one date, but a book can be borrowed many times, so each new loan would overwrite the previous one and the older loans would be lost. The same is true for a member who borrows many books. It would be hard to track the history or to check any related info.
