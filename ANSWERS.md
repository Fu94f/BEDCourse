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

## Question: What happened when the context window was 1, and when there was no memory? Explain what the context window length means.

The context window lenght is the amount of messages the agent sends to the model. When I removed the memory the agent would forget after each message and with the memory at 1 it would only remeber the last message.

## Question: Why not just set the context window to 1000? Think about what the model has to read on every message, and what that costs.

Because the agent would send the last 1000 messages to the model every time a new one is sent. It would defently affect the speed but also models have actual costs by the amount of text read so it each answer would be pretty expensive. 