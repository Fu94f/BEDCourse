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

## Question: What happened when the handler was above the routes, and why? (Think about the order in which Express runs middleware.)

I think here I was supposed to prove that order matters in Express. The expected result was that by moving the handler above the routes I wouldn't have new event in Sentry. Since Express runs middleware in the order top to bottm, and when /debug-sentry throws, Express should only pass the error to error handlers written after that route. A handler positioned above shouldn't see the error.

My result didn't match though, an event arrived in every position, even with the handler removed.
The most likely reason is my Sentry version,  where the handler function is marked deprecated and it seems to catch route errors on its own, without the handler.That's only an hypotesis because I couldnt find any answer in the documentation.

## Ex 4

## Question: Why didn't the errors inside your try/catch reach setupExpressErrorHandler by themselves?

Because the route catches the error and answers by itself, so the error never reaches `setupExpressErrorHandler`. `Express` only passes an error forward to the error handlers if the route throws it or passes it on. Here the error goes to the catch block and the catch deals with it so the Sentry’s handler is never called. Inside the catch, `Sentry.captureException(error)` hands the error to Sentry first and then the routes gives a response.

## Question: Several requests failed for the same reason. Did Sentry show them as separate issues, or group them? Why is that useful?

Sentry shows them as a group because they all signal the same problem. I guess it's easier to get to root of the problem knowing that they are grouped for a reason.

## Ex 5

## Question: Explain the difference between a breadcrumb and a tag in your own words. Give one example of when each one would help your team

- A `breadcrumb` is a sort of small note that records what the app did before an error happened.

exemple: if there is an error let's say GET/books fails, the breadcrumbs show that the request has reached the route, so that we could undestand whsat happen to cause the error.

- A `tag` is a label attached to an error, that it can be searched and filtered.

exemple: if the team needs to improve a specific category of errors,for example feature: books, the tags help to look for one category without the rest.