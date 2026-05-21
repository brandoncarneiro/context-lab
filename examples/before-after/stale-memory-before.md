# Stale Memory Before Cleanup

This is a fictionalized before/after example showing the kind of memory state Context Lab is designed to clean up. It is not a real user's memory state.

## Example remembered context before cleanup

ChatGPT may remember or infer:

- The user is focused on a short-term funding, sales, or application push.
- The user is focused on a specific partnership or client conversation.
- The user prefers aggressive growth strategy.
- The user is working on a specific launch this month.
- The user wants advice optimized for a previous role.
- The user uses a tool stack that may no longer be current.

## Problem

These items may have been useful once, but they are risky as durable memory.

They are tactical, stale-prone, or too tied to a specific moment in time.

## Risk

If these stay in memory, ChatGPT may:

- give advice based on old priorities
- overfit to an outdated project
- assume current work or personal context that is no longer true
- recommend strategies based on a stale operating mode
- expose sensitive or private context unnecessarily
