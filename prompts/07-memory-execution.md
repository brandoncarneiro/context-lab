# 07 Memory Execution

## Purpose

Use this after completing the memory cleanup plan when you are ready to apply approved memory changes.

This is the execution step. It should save only durable, stable, useful context to ChatGPT memory and avoid saving tactical, speculative, sensitive, or temporary information.

## When to use

- After completing Prompt 04: Memory Cleanup
- After deciding which items are safe to remember
- When you want to clean up stale or inaccurate remembered context
- Before relying on ChatGPT for future personalized help

## Prompt

Now execute the memory cleanup plan created in Prompt 04.

Use your completed memory cleanup plan as the source of truth.

For every item marked **“Should be saved as durable memory,”** save it to memory.

For every item marked **“Should be deleted or corrected if currently remembered,”** update or forget the inaccurate, stale, or unsupported version.

For every item marked **“Should not be saved because it is temporary,”** do not save it.

For every item marked **“Should be kept only in this project/context document,”** do not save it to memory.

For every item marked **“Sensitive context that should only be used when explicitly provided,”** do not save it to memory unless I explicitly said it should be remembered.

Be conservative. Only save stable facts, durable preferences, and reusable context that will improve future conversations.

Do not save:

- Current projects that may change soon
- Tactical priorities
- Pipeline details
- Temporary goals
- Private operational details
- Anything speculative
- Anything inferred but not confirmed by me
- Anything likely to become stale

Before making each memory update, silently check whether it is durable, useful, and safe to remember.

After executing, give me a concise confirmation with these sections:

1. Memories saved
2. Memories updated or corrected
3. Memories forgotten or deleted
4. Items intentionally not saved
5. Items you were unable to change, if any

Do not recreate the memory plan. Execute it.

## Expected output

A concise execution confirmation with:

- Memories saved
- Memories updated or corrected
- Memories forgotten or deleted
- Items intentionally not saved
- Items the model was unable to change

## Required final confirmation

End the response with this exact section:

```text
Execution confirmation:
- Memory changes applied where supported.
- Temporary, tactical, speculative, sensitive, and stale items were not saved.
- Any unsupported changes are listed above for manual action.
```

## Failure modes

- Recreating the memory plan instead of executing it
- Saving temporary goals or current projects
- Saving sensitive context without explicit permission
- Saving inferred context as if confirmed
- Forgetting to delete or correct stale memories
- Providing a long explanation instead of a concise execution report
- Omitting the final execution confirmation

## Important note

Some ChatGPT environments may not allow direct memory editing from a prompt.

If memory cannot be changed directly, the model should clearly say what it was unable to change and provide exact memory entries for the user to add, update, or delete manually.
