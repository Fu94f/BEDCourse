## Exercise 1: Agent or automation?

#	Scenario

## 1	Every Monday at 08:00, export last week's new users from the database and email the list to the team.

This is an automation, can use a fixed trigger that follows the predefined behavior and steps.

## 2	A user asks a chatbot "Can I return my order?" The bot must find out which order they mean, check the order date, read the return policy, and answer.

This is a an agent, it needs to take action so and be adaptable to the situation.

## 3	Every night, ChatGPT summarises the 10 newest posts from a forum, and the summary is emailed to you.

This is an automiation even if it uses an AI it still is just following just simple predifined steps. 

## 4	When a new issue is created in GitHub, post a message in Slack.

THis is automation, the behavior is the same, fixed steps not any actual action to take.

## 5	An assistant that reads your calendar, sees you have a free hour, checks the weather, and suggests whether to study at home or go to the library.

This is an agent because there is decision making based on the situation and reasoning.

## 6	When someone submits a contact form, save it in the database and send a "thanks" email.

This is automation, follows a static process, the behavior is fixed and predifined.

## Question: Scenario 3 uses AI but is still not an agent. Explain why, using the video's example of the Reddit summary.

Even when the automation is more complex like in the scenarior or in the exaple in the video, it is still a static process and has a prefined behavior that follows fixed steps. There is no adaptations or reasoning behind it.

## Question: The video says: "Build the simplest thing that works." Why is an automation often a better choice than an agent? Think about cost, speed, and how easy it is to test.

An automation can be a better choice because it is much more predictable since the the behavior is always the same; it is also less time consuming since it executes the steps that have been planned and it can also make the testing part easier because it can be observed while it runs.

## Exercise 2: Brain and memory

## Question: What happened when the context window was 1, and when there was no memory? Explain what the context window length means.

The context window lenght is the amount of messages the agent sends to the model. When I removed the memory the agent would forget after each message and with the memory at 1 it would only remeber the last message.

## Question: Why not just set the context window to 1000? Think about what the model has to read on every message, and what that costs.

Because the agent would send the last 1000 messages to the model every time a new one is sent. It would defently affect the speed but also models have actual costs by the amount of text read so it each answer would be pretty expensive. 

## Exercise 3: Your first tool

## After each question, open the agent's logs in the execution and check: did the agent call Get weather or not?

No it doesnt, only after a follow up question regarding my location. In that case it does.

## Question: Which questions made the agent use the weather tool, and which didn't? Nobody told the agent when to use the tool. How did it decide?

As explaind in the prev question, the agent uses the tool after asking for your location with the first two questions, which are related to weather. The agent anylizes the context elememnts, the language with which the question is formulated and undestands when the tool is needed or not.

## Question: This is the difference between an agent and the automation from Exercise 1. Explain it using what you saw in the logs.

The agent adapts it self to the content given and reacts according to the informations it recives by making a decision, which in this case is to call or not the tool.

## Question: Read the recap about MCP again. In this exercise, the weather tool only works inside n8n. What would change if OpenWeatherMap offered an MCP server instead? Name one advantage.

With an MCP server, the weather tool wouldnt need to be in n8n because anyy agent that would supports MCP could connect to it. The advantage could be the  reusability because i wouldnt need to rebuild a specific tool for each agent

## Exercise 3: Your first tool

## Question: Explain API, HTTP request and function in your own words. Use the vending machine from the video, and one example from your own Express API.

Using the vending machine example, an API is the vending machine, you can choose what you want, press a button, and the machine gives you the product. You don't need to know how the machine works internally.The API is besically the bridge that allows different software systems to exchange information and use each other's functionality without needing to know how the other system works. 

An HTTP request is like pressing a button on the vending machine. When you select a product, you send a request to the machine asking for that product. 

A function is a block of code that performs a specific task. In the vending machine example, the function is like the internal mechanism that checks your selection and gives you the product.

In my Express API, GET /books is the request asks the server to retrieve the books, and the function behind that route fetches the books from the database and returns them.

## Question: What happened to your agent's answer when you changed the tool's description to something vague, like tool? Try it, then change it back.

If the description is empty or says something vague like “HTTP request”, the agent doesn’t know when to use it so it tries to addapt to the tools that it has, in this case it doen't call the right tool

## Question: Compare the answers from the bad prompt and the structured prompt. Give two concrete differences.

The answer from the bad prompt was more general and less detailed.The agent called both tools even with only `Help the user` but it only worked for the first question, on the second and third, it relaid on the memory that it had of the answer it had already given.
The answer had no fixed shape. It used a long breakdown, no clear rules, and no mention of the dogs size, age or breed.The informations given back were invented, and didnt come from the tools for example, a sunset time (3:20 PM).

The answer from the structured prompt was clearer and more specific, it was short and always in the same order: a time window, then the weather, the air quality and what to bring. The tools were called every single time and the informations were consistent and reliable


## Question: Which of the six parts made the biggest difference for your agent, and why?

They all made a difference because applying rules defined  the shapes of the answers but perhaps the tools had more impact beacuse I prompt the agent to call the tools every time amnd never reuse old data. I felt I could rely on the answers this time. Also adding the constriants help as well because it stopped inventing information.

## Question: Your prompt is always read by the agent, on every message. A skill is only read when a task needs it. Imagine your agent could do ten different jobs, each with a long set of rules. Why would skills be better than one huge prompt?

Skills are better than having one huge prompt because they keep the agent's instructions organized and only load the rules needed for a specific task instead of having the agent read all the rules every time.

## Exercise 6: Break it on purpose

| What I broke | Which node failed | Error message (short) | What the message told me |
|---|---|---|---|
| Wrong API key for OpenWeatherMap | Get weather | 401 - Invalid API key | where to look for the error|
| Wrong city format | Get weather | 404 - city not found | The key worked, but the city format was not recognised. |
| Typo in the Open-Meteo URL (air-qualty) | getAirQuality | ENOTFOUND | The server was reachable, but the path was wrong |

## Question: One of your errors may not have stopped the workflow. Instead, the agent just gave a strange or wrong answer. Why is that kind of error more dangerous than a red error message?

When the agent still answers, nothing looks wrong, so I might trust the answer without noticing that part of the data is missing. The answer can be wrong without any sign of an error, and it only shows up in the logs.


## Question: You learned to read error reports in the Sentry week. What is similar about finding errors in n8n, and what is different?

In both n8n and Sentry, an error report tells me what failed and where.Both also keep a history of past errors, so I can look at errors that happened earlier.

In n8n I have to check each run myself, and the error points to a node, for example Get weather. Sentry collects errors from my running Express API automatically, groups the same error together and locates the error to the line of code. Also, in n8n the agent can handle a tool error and still give an answer.

