# 07 Memory Execution or Handoff

## Purpose

Use this after completing the memory cleanup plan when you are ready to apply approved memory changes or prepare them for a memory-enabled chat.

This is not another audit. It is the execution or handoff step for the completed memory cleanup plan.

## When to use

- After completing Prompt 04: Memory Cleanup
- After deciding which items are safe to remember
- When you want to clean up stale or inaccurate remembered context
- Before relying on ChatGPT for future personalized help

## Prompt

Now execute or hand off the memory cleanup plan created in Prompt 04.

Use the completed memory cleanup plan from this same chat as the source of truth. Do not recreate the audit.

If the completed memory cleanup plan is not available in this chat, stop and ask me to paste the completed memory cleanup plan before continuing.

First, check whether durable saved memory management is available in this current chat.

Do not infer this capability. If you are not certain you can directly manage durable saved memories, treat memory management as unavailable.

Practical note: If memory updates appear unavailable, check whether your current ChatGPT mode, workspace, model, or settings allow saved memory. Some environments may not expose durable memory writes.

## Path A: Durable memory management is available

If you can directly create, update, and delete durable saved memories from this chat, execute the approved memory cleanup plan.

Apply only the approved changes from the cleanup plan:

- Save items marked as durable, stable, useful memory.
- Update or correct stale or inaccurate items where a corrected durable version exists.
- Forget or delete stale, inaccurate, sensitive, or unsafe saved memories marked for deletion.
- Do not save temporary, tactical, speculative, sensitive, project-only, or stale-prone items.
- Do not save anything inferred but not confirmed by me.

Before each memory change, silently check whether the item is durable, useful, confirmed, and safe to remember.

After executing, give me a concise report with these sections:

1. Memories saved
2. Memories updated or corrected
3. Memories forgotten or deleted
4. Items intentionally not saved
5. Unsupported or manual actions, if any

End with this exact section:

```text
Execution confirmation:
- Durable memory changes were applied where supported.
- Temporary, tactical, speculative, sensitive, and stale items were not saved.
- Any unsupported changes are listed above for manual action.
```

## Path B: Durable memory management is unavailable

If you cannot directly manage durable saved memories from this chat, say so clearly.

Do not pretend anything was saved, updated, corrected, forgotten, or deleted.

Produce a `Memory Execution Sheet` using only the completed cleanup plan:

```text
Memory Execution Sheet

A. Exact memories to save
- [List exact durable memory entries to save.]

B. Exact memories to forget or delete
- [List exact stale, inaccurate, sensitive, or unsafe saved memories to remove.]

C. Project-only context
- [List context that belongs in a working document, not durable memory.]

D. Do-not-save context
- [List temporary, tactical, speculative, sensitive, or stale-prone items that should not be saved.]

E. Final command for a memory-enabled chat
Paste this Memory Execution Sheet into a chat that can directly manage durable saved memories. Apply only the listed save, update, and delete actions. Do not recreate the audit. Do not add inferred context.
```

End with this exact section:

```text
Handoff confirmation:
- I could not directly manage durable saved memory from this chat.
- I did not pretend to save, update, or delete memory.
- I created a Memory Execution Sheet for manual use or use in a memory-enabled chat.
```

## Expected output

One of two outputs:

- Direct execution report ending with `Execution confirmation`
- `Memory Execution Sheet` ending with `Handoff confirmation`

## Failure modes

- Inferring durable memory-management capability without certainty
- Recreating the memory plan instead of executing or handing it off
- Pretending memory was saved, updated, or deleted when the current chat cannot do that
- Saving temporary goals or current projects
- Saving sensitive context without explicit permission
- Saving inferred context as if confirmed
- Forgetting to delete or correct stale memories when deletion is supported
- Omitting the final execution or handoff confirmation
