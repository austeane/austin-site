---
title: Using Repomix Effectively
date: '2025-01-15'
description: Repomix's role in optimizing workflows to solve SWE problems with AI
image: /images/diamond-miner.jpg
imageAlt: A miner giving up just before reaching diamonds, while another persists and finds them
---
## Background

This is the first in a series of human-written blog posts sharing AI-coding approaches and best practices I've found useful, don't seem to be widely known, and help solve real software engineering problems. This is intended for people who are already fairly deep into AI tooling and are looking to maximize their effectiveness.

This first post is about an overall workflow that is made much better by a specific tool: Repomix.

## Terms

- **CLI agents**: e.g. GPT-5.2 Codex (xhigh) in Codex and Claude 4.5 Opus in Claude Code.
- **One-shot models**: e.g. GPT-5.2 Pro in ChatGPT and Gemini Deep Think in the Gemini app.
- **Repomix**: An open source [tool](https://github.com/yamadashy/repomix) for packing arbitrary files from your repository into a single pasteable bundle (XML/Markdown) for another LLM. Repoprompt also works for this, especially after their [recent CLI release](https://docs.repoprompt.com/cli/getting-started).

## When to use what

CLI Agents excel at implementation—they can explore your codebase, run tests, and iterate. One Shot models excel at deep reasoning over a fixed context window. Repomix bridges the two: it lets CLI pack the right context for One Shot to analyze.

Why not just use CLI for everything? The best reasoning models (currently GPT 5.2-pro) aren't API-accessible, so CLI can't call them. And even for the same model, a curated fixed context produces different (often better) analysis than letting the model gather context itself—similar to how humans solve problems better when given proper context upfront rather than having to research it themselves.

[Agent Skills](https://agentskills.io/home) lets CLI Agents use specialized skills without bloating the context window. [Download my Repomix skill](/downloads/repomix-skill.md) (400+ lines of instructions that CLI Agents loads on-demand).

## My workflow

When I encounter a bug or feature that is complex enough that I'm not confident that CLI can one-shot it, I will begin this workflow.

If a model has the right direction to go in, it's very good about going in that direction. It's like the "digging for diamonds and turning back when you are so close" meme, except the Agent's tunnel is on a slight angle, just misses the diamond deposit, and it keeps going for a long time without lifting its head up and thinking about another approach. 

So, I spend a lot of effort to make sure that the model is pointing in the right direction. Often I will think hard and point it in that direction myself, but when I want some help I do the following:

### 1. Define the Problem

I use CLI to isolate and define the problem, writing it to a markdown file. I often have another CLI review it and make sure the markdown is correct in the context of the codebase. A key phrase I've found helpful is "Enough context that someone can reason about the problem just by reading the file".

### 2. Generate Context

I then ask a CLI agent (usually Claude Code) to create a ~55k-token repomix (roughly GPT-5.2 Pro's context window). It knows to use the skill, it includes a security check, and I sanity check the output before pasting it into the one-shot model.

### 3. One-shot the core insight

I paste the repomix to the One Shot model and ask it for help solving the issue.
One frustrating aspect is that the max context window for GPT-5.2 Pro changes between ~53k and ~60k tokens, in a way that I can't predict.
I don't put any effort into prompting this model, I just ask it to fix docs/my_problem.md.

This is where I think hardest: Does this approach fit my vision, or is it a workaround that incurs technical debt?

### 4. Implement

**Small tasks:** CLI implements directly. I give it Playwright MCP to verify its work.

**Medium tasks:** Additional step of: CLI takes the 5.2-pro output and creates a concrete implementation plan. After I review, it implements and tests.

**Large tasks:** Modification to the whole flow: I have Claude Code create overlapping repomixes—the minimum number such that each issue is covered by at least one bundle. The most I've needed is 6 bundles. Then I have CLI generate implementation plans off of each Repomix, and then another CLI instance takes each separately made implementation plan, and layers them into one backlog, resolving any contradictions. Finally, I have it implement the backlog.


## Example: A Large Task in Practice

Recently I've been working on a major project (building an enterprise-level league and event management SaaS). I had to implement a major refactor and set of features across a large codebase. I'm going to give my specific workflow here as an extreme example of the Large Task workflow.
Below, CC always means Claude Code with Opus 4.5 and Codex always means 5.2-Codex-xhigh.

This is not a prescriptive workflow, just a specific end-to-end example of what was best for me in this situation, from problem discovery through to deployment. 

0. First attempt at implementation (which I won't cover here).
1. Extremely detailed [review of implementation](https://github.com/soleilheaney/solstice/blob/21eee9c1d888f3288c594dcd3602a85ac590848c/docs/sin-rfp/route-tree-implementation-review.md) by 5.2 XHigh.
2. I create seven overlapping bundles of 45-55k tokens which each cover an area of concern, and are the minimal number of bundles such that each specific issue is covered once. [Bundle instructions](https://github.com/soleilheaney/solstice/blob/21eee9c1d888f3288c594dcd3602a85ac590848c/docs/sin-rfp/5.2-pro-review-output/sin-rfp-review-input.md)
3. 5.2 Pro attempts to one-shot each; I spin up seven in parallel. The longest of the seven takes 96 minutes. [Example chat](https://chatgpt.com/share/69518865-d780-8005-bc7a-e2621942bc0b)
4. I paste their responses into a new local folder, labelled e.g. [1.md](https://github.com/soleilheaney/solstice/blob/21eee9c1d888f3288c594dcd3602a85ac590848c/docs/sin-rfp/5.2-pro-review-output/1.md)
5. I have 7 Codexes in parallel analyze each response in the context of the full codebase, and write up an implementation plan. [Example](https://github.com/soleilheaney/solstice/blob/21eee9c1d888f3288c594dcd3602a85ac590848c/docs/sin-rfp/5.2-pro-review-output/1-implementation.md)
6. I have Codex work on making a [consolidated backlog](https://github.com/soleilheaney/solstice/blob/21eee9c1d888f3288c594dcd3602a85ac590848c/docs/sin-rfp/5.2-pro-review-output/consolidated-backlog.md) and identifying conflicts between implementation plans, and decisions that need to be made; it splits up the backlog into workstreams.
7. I have both Codex and CC work on generating considerations and recommendations for those decisions. [Example ADR](https://github.com/soleilheaney/solstice/blob/21eee9c1d888f3288c594dcd3602a85ac590848c/docs/sin-rfp/decisions/ADR-2025-12-26-d0-17-import-batch-runtime.md); I took their recommendation on ~75% of decisions.
8. I have Codex identify the dependencies within the workstreams.
9. I have Codex work in parallel on each possible workstream, using [stream instructions](https://github.com/soleilheaney/solstice/blob/21eee9c1d888f3288c594dcd3602a85ac590848c/docs/sin-rfp/worklogs/steam_instruction.md), communicating in a shared doc when taking actions that may impact a parallel stream. I get it to record all of its own work, decisions, tech debt, etc. in a [worklog](https://github.com/soleilheaney/solstice/tree/21eee9c1d888f3288c594dcd3602a85ac590848c/docs/sin-rfp/worklogs). I also make it write a context doc so that after compaction it can get back up to speed more quickly; in a large codebase, finding all of the context can use up a good 40% of its available context before it even begins deeply thinking about the problem, and the fuller the context window the less effective an agent is.
10. Codex is much worse than CC at checking its work using the Playwright MCP, so I get CC to check each stream's work, and then a mix of CC and Codex iterate until everything in the stream works, and have it update the [master worklog](https://github.com/soleilheaney/solstice/blob/21eee9c1d888f3288c594dcd3602a85ac590848c/docs/sin-rfp/worklogs/master.md).
11. Once all streams are done, I get both Codex and CC to do final reviews that everything is complete, and I commit, deploy, and push. Also, I have a pre-commit hook that blocks commits unless type checking, linting, and tests all pass.

## Takeaway
The above can often be overkill, but they raise the complexity ceiling of what can be accomplished with AI assisted engineering, and I believe this workflow should continue to scale with model intelligence at least in the medium term.

## Sidenote: Meme bounty 

I haven't used AI generation much, and both ChatGPT Images and Nano Banana Pro failed hilariously at generating the exact "digging for diamonds" meme I wanted. Open bounty: I will pay the first person to create the proper version of this meme: $5 if AI generated, $50 if done manually by a digital artist. Please email austinwallacetech@gmail.com with your submission; if this passage is still in my blog post, the bounty is likely still open.

![My rough sketch](/images/meme-rough-sketch.png)

![AI's best attempt](/images/meme-ai-attempt.png)
