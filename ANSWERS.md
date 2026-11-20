## Exercise 1

## Question: What do on, runs-on, strategy.matrix and steps do? 

`on` lists the the events that strt the workflow. for example, it runs when I push the branch or open a pull request.

`runs-on`: it indicates the machine where GitHub runs, in this case ubuntu

`strategy.matrix`: It lists values that GitHub runs, once per value. In the steps, ${{ matrix.node-version }} is replaced by each value.

`steps`: it lists the step to run in order;if one fails, the next ones don’t run.
- `actions/checkout@v4` downloads the code onto the machine
- `actions/setup-node@v4` installs the Node version
- `npm ci` installs the dependencies from package-lock.json
- `npm test` runs vitest run

## Why did nothing happen when you only pushed the branch?

GitHub had no workflow to run. A push triggers a workflow only if a workflow file exists in the pushed commit and  `on` matches the event.

## Exercise 2

## Read the report. Click Details on the checks. How many jobs ran, and why?

it runs 2 jobs, 1 per value.

## Question: Why can a test pass on your laptop but fail in CI? Think of why the video's first run failed.

CI starts on a fresh, empty machine, so it can differ from what is locally on the laptop: Node version, installed packages, operating system, environment variables or files that exist only locally.

## Exercise 3

## Question: Why is a red cross on the pull request better than one after merging?

The test fail gets caught on the pull request, before it reaches week12/ci. A red cross after merging would mean the broken code is already reached the main branch and that could be amuch bigger problem to solve.


## Exercise 4

## Question: Would this step have caught the possibly null bug from Week 11, Exercise 9?

## Exercise 5
## Question: Would this step have caught the possibly null bug from Week 11, Exercise 9?

## Exercise 6

## Question: What does branch protection do that CI alone can't?