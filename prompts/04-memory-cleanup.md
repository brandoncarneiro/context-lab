# 04 Memory Cleanup

## Purpose

Use this before creating AI workflows or master prompts. The goal is to prevent ChatGPT from over-saving tactical context.

## Prompt

Based on everything above, create a memory cleanup plan.

Separate items into:

1. Should be saved as durable memory
2. Should be kept only in this project/context document
3. Should not be saved because it is temporary
4. Should be deleted or corrected if currently remembered
5. Sensitive context that should only be used when explicitly provided

For every proposed saved memory, write it in the exact wording that would be useful for ChatGPT to remember.

Be conservative. Only recommend saving facts that are stable, useful across many future conversations, and unlikely to become stale quickly.

## Expected output

- A conservative memory plan
- Exact wording for proposed saved memories
- A clear distinction between memory and working context
- A deletion/correction list

## Failure modes

- Saving current priorities as durable memory
- Saving active deals, pipeline, or private project state
- Saving sensitive third-party details
- Writing vague memories that will not improve future output

## Next step

Use this plan as the source of truth for [Prompt 07: Memory Execution](07-memory-execution.md). Only execute memory changes after the user explicitly asks to apply the plan.
