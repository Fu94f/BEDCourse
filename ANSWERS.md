## EX1

## Question: Why must instrument.js be imported before everything else?

Sentry needs to be imported first because it has to start before Express loads (it hooks into libraries as they load). If Express loads first, Sentry could miss some parts, like route details or some errors.

## Question: Why do we keep the DSN in .env instead of in the code?

DSN goes in the `.env file` so that it doesnt get pushed to GitHub.Even if it is not necessarly a sensitive information, it is still standard practice to keep configuration separate from the code.

## EX 2

## Open the issue and find:  

## - the file and line number where the error was thrown
## - your Node.js version
## - your operating system
## - the environment

- file and line number: index.ts, line 16:9, in mainHandler
- Node.js version: v24.19.0
- Operating system: Windows 10.0.26300
- environment: production


## Question: You didn't add any extra information to this error yourself. List everything Sentry recorded anyway.

- The error message ("My first Sentry error!");
- if the error was handled (unhandled) and its level (error);
- The stack trace;
- The request (method GET and route /debug-sentry);
- The URL;
- The OS;
- The environment;
- The user's IP address ;
- A trace ID;
- The time it happened and the number of events;
- The runtime: Node.js version
