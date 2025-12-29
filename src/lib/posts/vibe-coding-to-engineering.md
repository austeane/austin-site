---
title: 'Vibe Coding to Engineering: A Spectrum'
date: '2025-12-28'
description: What is the optimal vibe?
image: /images/grokking-modular-addition.jpg
imageAlt: Chart showing grokking in modular addition - train loss drops immediately while test loss stays high for thousands of epochs before suddenly collapsing
---

As they say, everything is a spectrum. AI and coding is no different. I've worked everywhere along that spectrum since AI has been popular, from hand coding to pure vibe coding, and I think there is a sweet spot for every project.

I'm going to give you (for me) the most valuable insight up front, and then hope you still read the rest, including the explanation:

**For most tasks and projects you care about, optimality is reached by minimizing human-in-the-loop while fully grokking what you are doing.**

This sweet spot can change task to task on a given project, and these apply both at the project and the task level.

### Things that push you toward hand-code vs vibe-code

- **How verifiable is it** — more vibey
- **How costly are mistakes** — more handy
- **How critical is eventual success** — more handy
- **How common is it** — more vibey
- **How much better is "perfect" than "great" than "extremely solid"** — more handy

### Things that don't correlate (as much)

- **How complex?** Optimal hand-time and AI-time both increase with complexity
- **How expert are you in this specific domain?** This one is more complex than a simple correlation. Domain expertise helps with better prompting, and also means you will be able to hand fix more mistakes. If you know nothing, you are more likely to take the slop the AI gives you, but if you really do need it to be good, you'll have more things to fix.

### Secret third thing

**How much does matching existing coding style matter?** This takes a lot of initial handy work to set up, but after that it's pure vibes. Every time you generate slop relative to the code, you need to do the *human work* of critically thinking about the ways in which it is slop, and the generalizable principle that it violated which made it slop. It's important to do this before sending to other human reviewers, whose time you presumably respect. Once you do this, you can generally write in AGENTS.md a rule that will help going forward. With enough iterations, models are good enough to write code that fits existing code styles; even the mighty em-dash has fallen ([Sam Altman on X](https://x.com/sama/status/1989193813043069219)).

---

## Labels on a Spectrum

| Label | Description | Useful When | % of Time (for me) |
|-------|-------------|-------------|-----------|
| Vibe coding | When you truly never once look at the code, have no idea what the agent is doing, may know the coding language but not the libraries used | Building a toy one-off, something that would be shocking for a modern agent to screw up, something you care zero+ℏ about | 1% |
| Vibe engineering | When you aren't reading the code, but you are putting a lot of effort into prompting, giving the agent tools to verify, architecting | Things you care about but not enough to actually read the code for, or where you don't know the language it's being written in | 45% |
| AI-assisted engineering | When you are writing at least some of the code, and hand reviewing at least the most important parts of the actual code, and certainly all architecture | When you really care about getting it right and want to maximize the success using all of your effort and the AI's effort | 45% |
| Human-driven development | When the extent of the AI's involvement is AI tab-complete, never writing code off a prompt | When you want to code | 1% |
| Hand coding | Everything before 2022 | When you are a domain expert and anything less than perfect is unacceptable and time does not matter, when you need to prove to yourself that you still got it, interviews | 8% |

---

## Grokking the Sweet Spot

About that lede: I think in the vast majority of cases, the biggest predictor of how successful you will be at your project/task is whether you grok it or not.

For me, to grok (lower case g) something is to be able to hold it in your mind and reason about all aspects of it, and there are levels to this.

- **Goal:** Do you understand the system this is a part of, and exactly what your piece is trying to do, and what makes that difficult?
- **Architecture:** Do you understand how your project is set up to accomplish its goals? Do you understand how the pieces fit together, do you know what all the pieces are?
- **Tools:** Do you know the languages and libraries being used, why they are being used, what they are and are not suited to?
- **Code:** Do you understand the design patterns being used? Could you walk someone through the codebase, file by file, and explain the decisions in each?

What's great about all of these is that a dialogue with the AI about each, "help me grok x", is often helpful for getting a deeper understanding.

The above is in descending order of importance, and also the path you should follow to (re-)grok a system. If you don't grok your own project at a goal level, you aren't even lost, as the concept of being lost requires a concept of what being found means. I've been there, and it sucks to work so hard on a problem and solve it to realize that what you did is in fact a non-sequitur. If you know the goal, you can vibe code without grokking architecture, but to build something actually good it's essential to be able to reason about the tradeoffs inherent in the decisions already made. With just those two, you can build genuinely great works, but grokking your tools and code will make the hardest parts so much easier that it's worth doing for the things you really care about.

If you take anything away from this, I hope it's a little voice in the back of your head that notices when you have slowly stopped grokking your increasingly complex and AI-driven project.
