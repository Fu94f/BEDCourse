## EX1

## Question: Why must instrument.js be imported before everything else?

Sentry needs to be imported first because it has to start before Express loads (it hooks into libraries as they load). If Express loads first, Sentry could miss some parts, like route details or some errors.

## Question: Why do we keep the DSN in .env instead of in the code?

DSN goes in the `.env file` so that it doesnt get pushed to GitHub.Even if it is not necessarly a sensitive information, it is still standard practice to keep configuration separate from the code.