# Memory Cleanup Fast Path

Use this when your main goal is to clean up ChatGPT memory rather than build a full operating profile and workflow library.

## Path

1. Run [Context Audit](../prompts/01-context-audit.md)
2. Run [Memory Cleanup](../prompts/04-memory-cleanup.md)
3. Run [Memory Execution](../prompts/07-memory-execution.md)

## Why this works

Prompt 01 surfaces what ChatGPT thinks it knows.

Prompt 04 decides what should be saved, kept in a working context document, ignored, corrected, or deleted.

Prompt 07 applies the approved memory changes and confirms what changed.

## When to use the full workflow instead

Use the full seven-step workflow when you also want:

- a corrected operating profile
- reusable workflows
- master prompts
- a stronger long-term ChatGPT setup

## Operator rule

Memory is not a project tracker.

Memory should hold stable, reusable context. Working context documents should hold live operating state.
