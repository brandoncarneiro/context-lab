# Quickstart

Use this when you want to run Context Lab without reading the whole repository first.

## Full workflow

Run the prompts in this order in a new ChatGPT conversation:

1. [Context Audit](../prompts/01-context-audit.md)
2. [Gap Interview](../prompts/02-gap-interview.md)
3. [Operating Profile](../prompts/03-operating-profile.md)
4. [Memory Cleanup](../prompts/04-memory-cleanup.md)
5. [AI Workflow Plan](../prompts/05-ai-workflow-plan.md)
6. [Master Prompt](../prompts/06-master-prompt.md)
7. [Memory Execution](../prompts/07-memory-execution.md)

## Memory cleanup fast path

Use this path when your main goal is to clean up ChatGPT memory:

1. Run [Context Audit](../prompts/01-context-audit.md)
2. Run [Memory Cleanup](../prompts/04-memory-cleanup.md)
3. Run [Memory Execution](../prompts/07-memory-execution.md)

## How to get better output

Correct the model aggressively when it:

- flatters you
- guesses beyond evidence
- treats stale context as current
- saves tactical details as durable memory
- fails to separate facts, inferences, and unknowns

## What to copy into a working context document

Save the output of Prompt 03 in a dated document. This becomes your working operating profile.

Save the output of Prompt 04 as your memory cleanup plan.

Save the output of Prompt 05 as your reusable workflow library.

## What not to save to memory

Do not save:

- current projects
- active deals
- pipeline details
- weekly priorities
- temporary goals
- private operational details
- inferred or speculative context
- anything likely to become stale in 30 to 90 days

## Final check

After Prompt 07, you should have a confirmation showing:

- memories saved
- memories updated or corrected
- memories forgotten or deleted
- items intentionally not saved
- items the model could not change
