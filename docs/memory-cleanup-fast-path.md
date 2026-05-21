# Memory Cleanup Fast Path

Use this when your main goal is to clean up ChatGPT memory rather than build a full operating profile and workflow library.

## Path

The fast path is:

1 → 4 → 7

1. Run [Context Audit](../prompts/01-context-audit.md)
4. Run [Memory Cleanup](../prompts/04-memory-cleanup.md)
7. Run [Memory Execution or Handoff](../prompts/07-memory-execution.md)

## Why this works

Prompt 01 surfaces what ChatGPT thinks it knows.

Prompt 04 decides what should be saved, kept in a working context document, ignored, corrected, or deleted.

Prompt 07 is capability-aware. It either executes the approved memory cleanup plan when durable saved memory management is available or produces a Memory Execution Sheet for manual use or a memory-enabled chat.

## When to use the full workflow instead

Use the full seven-step workflow when you also want:

- a corrected operating profile
- reusable workflows
- master prompts
- a stronger long-term ChatGPT setup

## Operator rule

Memory is not a project tracker.

Memory should hold stable, reusable context. Working context documents should hold live operating state.
