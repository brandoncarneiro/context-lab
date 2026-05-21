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

First, check which durable memory actions are actually available in this current chat.

Supported actions may include saving, updating, forgetting/deleting, or verifying saved memory.

Do not infer capability. If you are not certain an action is supported, treat that action as unavailable.

Practical note: If memory updates appear unavailable, check whether your current ChatGPT mode, workspace, model, or settings allow saved memory. Some environments may not expose durable memory writes.

If no durable memory actions are supported, use Path B.

## Path A: Some or all durable memory actions are available

If at least one durable memory action is supported in this chat, perform only the approved memory actions that are actually supported.

Apply only the approved changes from the cleanup plan:

- Save supported durable memories.
- Update or correct supported durable memories where a corrected durable version exists.
- Forget or delete supported stale, inaccurate, sensitive, or unsafe saved memories marked for deletion.
- Verify saved-memory changes only if verification is supported.
- List unsupported approved actions under manual follow-up.
- Do not claim unsupported actions were executed.
- Do not save temporary, tactical, speculative, sensitive, project-only, or stale-prone items.
- Do not save anything inferred but not confirmed by me.

Before each supported memory action, silently check whether the item is durable, useful, confirmed, and safe to remember.

After executing supported actions, give me a concise report with these sections:

1. Memories saved
2. Memories updated or corrected
3. Memories forgotten or deleted
4. Items intentionally not saved
5. Unsupported or manual actions

End with this exact section:

```text
Execution confirmation:
- Durable memory changes were applied where supported.
- Temporary, tactical, speculative, sensitive, and stale items were not saved.
- Any unsupported changes are listed above for manual action.
```

## Path B: Durable memory management is unavailable

If no durable memory actions are supported in this chat, say so clearly.

Do not pretend anything was saved, updated, corrected, forgotten, deleted, or verified.

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
Paste this Memory Execution Sheet into a chat that can directly manage durable saved memories. Apply only the listed save, update, and delete actions that are supported. Do not recreate the audit. Do not add inferred context.
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

- Direct execution report for supported actions, ending with `Execution confirmation`
- `Memory Execution Sheet` ending with `Handoff confirmation`

## Failure modes

- Inferring durable memory-management capability without certainty
- Treating partial memory support as full memory support
- Recreating the memory plan instead of executing or handing it off
- Pretending memory was saved, updated, verified, or deleted when the current chat cannot do that
- Saving temporary goals or current projects
- Saving sensitive context without explicit permission
- Saving inferred context as if confirmed
- Forgetting to list unsupported approved actions for manual follow-up
- Omitting the final execution or handoff confirmation
