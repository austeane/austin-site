---
title: Using Repomix Effectively
date: '2025-01-15'
description: Repomix's role in optimizing workflows to solve SWE problems with AI
image: /images/diamond-miner.jpg
imageAlt: A miner giving up just before reaching diamonds, while another persists and finds them
---
## Background

This is a first in a series of (hopefully) context-efficient blog posts sharing best practices that I have found useful, and not widely published, for solving software engineering problems using AI.

I find that CLI agents (Claude Code, Codex) and One Shot (Gpt Pro, Gemini Deep Think) models have different use cases, and that Repomix is the best tool to bring context from the former to the latter. 
CLI agents are much better at implementation. The best deep-think one-off model is rarely API accessible, currently GPT 5.2-pro with extended thinking. Additionally, even for the same model, having a fixed set of context has it engage differently with the problem; similarily, humans will be able to solve a problem better when given the proper context rather than having to piece together that same context with research. 

[Repomix](https://repomix.com/guide/usage) lets your CLI model pack arbitrary files into an XML file, which you can copy paste into the One Shot.

[Agent Skills](https://agentskills.io/home) includes in Claude Code's context the availability of skills to work with specific tools or formats, without taking up the context window with the details (my skill is 400+ lines).

[Download my Repomix skill for Claude Code](/downloads/repomix-skill.md)

In the following I will use CLI to mean either Opus 4.5 in Claude Code, or Codex-5.2 XHigh in Codex. I will use One Shot to refer to 5.2 Pro or Gemini Deep Think. 

## My workflow

When I encounter a bug or feature (problem from here on) that is complex enough that I'm not confident that CLI can one-shot it, I will begin this workflow.

If a model has the right direction to go in, it's very good about going in that direction. It's like the "digging for diamonds and turning back when you are so close" meme, except the Agent's tunnel is on a slight angle, just misses the diamond deposit, and it keeps going for a long time without lifting its head up and thinking about another approach. 

So, I spend a lot of effort to make sure that the model is pointing in the right direction. Often I will think hard and point it in that direction myself, but when I want some help I do the following:

### 1. Define the Problem

I use CLI to isolate and define the problem, writing it to a markdown file. I often have another CLI review it and make sure the markdown is correct in the context of the codebase. A key phrase I've found helpful is "Enough context that someone can reason about the problem just by reading the file".

### 2. Generate Context

I then ask a CLI (usually Claude Code) to create a 55k token repomix; it knows to use the skill.

### 3. One-shot the core insight

I paste the repomix to the One Shot model and ask it for help solving the issue.
One frustrating aspect is that the max context window for GPT 5.2 Pro changes between ~53k and ~60k tokens, in a way that I can't predict.
I don't put any effort into prompting this model, I just ask it to fix docs/my_problem.md.

This is where I think hardest: Does this approach fit my vision, or is it a workaround that incurs technical debt?

### 4. Implement

**Small tasks:** CLI implements directly. I give it Playwright MCP to verify its work.

**Medium tasks:** Additional step of: CLI takes the 5.2-pro output and creates a concrete implementation plan. After I review, it implements and tests.

**Large tasks:** Modification to the whole flow: I have Claude Code create overlapping repomixes—the minimum number such that each issue is covered by at least one bundle. The most I've needed is 6 bundles. Then I have CLI generate implementation plans off of each Repomix, and then another CLI instance takes each separately made implementation plan, and layers them into one backlog, resolving any contradictions. Finally, I have it implement the backlog.

## Why This Works

- **Cross-validation:** Different models catch different issues
- **Full context:** 55k tokens is enough for most focused problems
- **Human decision points:** I give input at the highest leverage points, while keeping lower levels of attention as it works, looking for early indications that the model has missed the diamonds.
