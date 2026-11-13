## EX1

## Question: What does docker ps show you? Which columns tell you that SonarQube is running, and on which port?

- `docker ps` lists every container that is running, one per row.
- `STATUS` is Up 20 seconds, which tells the container is running.
- `PORTS` is 0.0.0.0:9000->9000/tcp, which tells that port 9000 on the computer is connected to port 9000 in the container.


## Question: Why run SonarQube in Docker instead of installing it directly on your computer?

SonarQube is a big program that needs Java and its own setup. The docker image already contains everything it needs and can run independently from other programs, so I dont need to install anything on my computer.

## EX 2

## Question: Did your project pass or fail the quality gate? How many issues did SonarQube find?

My project passed the quality gate. SonarQube found 1 issue, a reliability issue with medium impact, rating C. It found no security or maintainability issues. The project still passes, even with the coverage is 0.0% and the duplications are 17.4%.

## EX 3

## Choose three different issues, and for each one, write in ANSWERS.md:

## - the rule name and the file and line where it was found
## - what is wrong, in your own words (use the Why is this an issue? tab)
## - what the compliant code would look like
## - whether you agree that it's a problem, and why

- rule name: Promises should not be left unhandled, rule key: typescript:S9383
- file: index.ts
- line:322

- `start()` is an async function and returns a promise. If it fails (f.e when the database is down), nobody handles that error.

- compliant code : 

```typescript

start().catch((error) => {
    reportError(error, "startup");
    console.error("Server failed to start:", error);
});

```
- I agree that it is a problem because if the database is down I dont have anything to tell me why it stopped

## Question: Depending on the version, SonarQube groups issues either by the quality they affect (Security, Reliability, Maintainability) or by type (Vulnerability, Bug, Code Smell). Explain each of the three groups your SonarQube uses, with an example.

My `Overview page` shows the version with Security, Reliability and Maintainability. 

SonarQube groups issues by the quality . 

- Security issues are problems that someone could impact on the security of the software for example,  the token written in package.json. 

- Reliability issues are problems that can make the code fail when it runs, for example the `start()` that had no `.catch`.

- Maintainability issues concern the code readibility, for example long function or code that is copied in several places.

## Question: SonarQube, your tests and Sentry all help you find problems. What does each one find that the others can't?

Sentry watches the app while is running and can find unpredicted mistakes and it tells you where and when to look. But it only reports something after it has happened.

SonarQube reads the code without running it, so it can find risky patterns before anything breaksbut it cannot tell if my code does the right thing

The tests run the code with cases that I wrote, so they find logic mistakes, but only the one I thought about it.

## Ex 4

## 
## 

## 

## Ex 6

## 