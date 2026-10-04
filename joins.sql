
--## Skill 2: Map the Country Club Relationships

-- 1 Which columns in `cd.bookings` are foreign keys, and which tables do they point to?

   --FOREIGN KEY (facid) REFERENCES facilities(facid);
   --FOREIGN KEY (memid) REFERENCES members(memid);

-- 2 What kind of relationship is there between `members` and `facilities`? 

   --The relationship between members and facilities is "many to many" :
   --it goes through bookings(the junction table), one member can book many facilities and one facility can be booked by many members.
   --The tables dont points directly to the other but each has a "one tom many" relationship with bookings.

-- 3 Which table plays the role of the junction table, like `student_courses` in the video? 

   --booking is the junction table

-- 4 The `recommendedby` column in `cd.members` points back to `cd.members` itself. What kind of relationship is that?

 -- It is a self referencing "one to many" relationship: 
 -- recommendedby is a foreign key to memid so each member is recommended by at least one member, but one member can recommend many others.



--## Skill 3: The Joins and Subqueries Exercises


--1. Retrieve the start times of members' bookings
SELECT bookings.starttime
FROM cd.bookings
JOIN cd.members ON members.memid= bookings.memid
WHERE members.firstname='David'AND members.surname ='Farrell';

  
--2. Work out the start times of bookings for tennis courts
SELECT bookings.starttime AS start, facilities.name
FROM cd.bookings
JOIN cd.facilities ON bookings.facid = facilities.facid
WHERE facilities.name LIKE 'Tennis%' 
AND bookings.starttime >= '2012-09-21'
AND bookings.starttime < '2012-09-22'
ORDER BY start;


-- can be also done with BETWEEN op--

SELECT bookings.starttime AS start, facilities.name
FROM cd.bookings
JOIN cd.facilities ON bookings.facid = facilities.facid
WHERE facilities.name LIKE 'Tennis%'
  AND bookings.starttime BETWEEN '2012-09-21' AND '2012-09-22'
ORDER BY start;

--3. Produce a list of all members who have recommended another member

--self join --prefix with an alias  
--m = memebers 
--r = members who have raccomanded someone(the one we need to show)

SELECT DISTINCT r.firstname, r.surname
FROM cd.members m  
JOIN cd.members r ON r.memid = m.recommendedby
ORDER BY r.surname, r.firstname;


--4. Produce a list of all members, along with their recommender

SELECT
m.firstname AS "member first name",
m.surname AS "member surname",
r.firstname AS "recommender first name",
r.surname AS "recommender surname"
FROM cd.members m
LEFT JOIN cd.members r ON r.memid = m.recommendedby
ORDER BY m.surname, m.firstname;


--5. Produce a list of all members who have used a tennis court

--|| ' ' || = to display in one column

SELECT DISTINCT 
m.firstname || ' ' || m.surname AS member,
f.name AS facility
FROM cd.members m
JOIN cd.bookings b ON b.memid = m.memid
JOIN cd.facilities f ON f.facid = b.facid
WHERE f.name LIKE 'Tennis Court%'
ORDER BY member, facility;

--6. Produce a list of costly bookings

SELECT 
    m.firstname || ' ' || m.surname AS member,
    f.name AS facility,
       CASE WHEN b.memid = 0 THEN b.slots * f.guestcost
            ELSE b.slots * f.membercost
       END AS cost
FROM cd.members m
JOIN cd.bookings b ON b.memid = m.memid
JOIN cd.facilities f ON f.facid = b.facid
WHERE b.starttime >= '2012-09-14'
  AND b.starttime < '2012-09-15'
  AND (CASE WHEN b.memid = 0 THEN b.slots * f.guestcost
            ELSE b.slots * f.membercost
       END) > 30
ORDER BY cost DESC;

--7. Produce a list of all members, along with their recommender, using no joins

SELECT DISTINCT
  m.firstname || ' ' || m.surname AS member,
  (SELECT r.firstname || ' ' || r.surname
   FROM cd.members r
   WHERE r.memid = m.recommendedby) AS "recommended by"
FROM cd.members m
ORDER BY member;

--8. Produce a list of costly bookings, using a subquery

SELECT member, facility, cost 
FROM (
	SELECT
		m.firstname || ' ' || m.surname as member,
		f.name as facility,
		CASE
			WHEN m.memid = 0 THEN
				b.slots*f.guestcost
			ELSE
				b.slots*f.membercost
		END AS cost
		FROM cd.members m
		JOIN cd.bookings b ON m.memid = b.memid
		JOIN cd.facilities f ON b.facid = f.facid
		WHERE b.starttime 
		 BETWEEN '2012-09-14'
		 AND '2012-09-15'
	) AS bookings
	WHERE cost > 30
ORDER BY cost DESC;
