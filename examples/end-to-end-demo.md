# End-to-End Demo

This is a fictionalized example. It is not a real user's memory state, operating profile, company, or personal context.

## 1. Messy starting point

A user opens ChatGPT and notices the advice feels oddly specific and stale:

- The model remembers an old role and treats it as current.
- The model thinks a short-term launch project is still active.
- The model has a stale preference for aggressive recommendations, even though the user now wants calibrated tradeoffs.
- The model has a sensitive private detail that should not be used unless explicitly provided.
- The model lacks current goals, decision preferences, and output expectations.

## 2. Prompt 01 output excerpt

| Assumption | Confidence | Evidence | Risk if wrong | Action |
|---|---:|---|---|---|
| The user is still in an old role | Medium | Older remembered context | Advice may target the wrong responsibilities | Update |
| The launch project is active | Low | Stale project reference | Model may overfit recommendations to old work | Delete |
| The user wants aggressive strategy | Medium | Prior preference | Tone may be too forceful for current decisions | Clarify |
| A private third-party detail is relevant | Low | Sensitive remembered context | Privacy risk | Delete or ignore |
| Current goals are known | Low | No recent evidence | Plans may optimize for the wrong outcome | Clarify |

## 3. Prompt 04 cleanup excerpt

### Durable memory to save

- "The user prefers recommendations that separate confirmed facts, assumptions, and unknowns."
- "The user prefers direct advice with risks, tradeoffs, and next actions."

### Project-only context

- Current goals
- Active project list
- Near-term deadlines
- Current operating cadence

### Do-not-save context

- Private third-party details
- Short-term scheduling constraints
- Draft messaging
- Sensitive financial or personal details

### Memory to correct/delete

- Old role treated as current
- Stale launch project
- Aggressive-strategy preference
- Sensitive remembered detail

## 4. Prompt 07 result

If memory actions are available:

```text
Execution confirmation:
- Durable memory changes were applied where supported.
- Temporary, tactical, speculative, sensitive, and stale items were not saved.
- Any unsupported changes are listed above for manual action.
```

If memory actions are unavailable:

```text
Memory Execution Sheet

A. Exact memories to save
- The user prefers recommendations that separate confirmed facts, assumptions, and unknowns.
- The user prefers direct advice with risks, tradeoffs, and next actions.

B. Exact memories to forget or delete
- Old role treated as current.
- Stale launch project.
- Aggressive-strategy preference.
- Sensitive remembered detail.

C. Project-only context
- Current goals.
- Active project list.
- Near-term deadlines.
- Current operating cadence.

D. Do-not-save context
- Private third-party details.
- Short-term scheduling constraints.
- Draft messaging.
- Sensitive financial or personal details.

E. Final command for a memory-enabled chat
Paste this Memory Execution Sheet into a chat that can directly manage durable saved memories. Apply only the listed save, update, and delete actions that are supported. Do not recreate the audit. Do not add inferred context.

Handoff confirmation:
- I could not directly manage durable saved memory from this chat.
- I did not pretend to save, update, or delete memory.
- I created a Memory Execution Sheet for manual use or use in a memory-enabled chat.
```

## 5. Result

Before: ChatGPT was using stale, sensitive, and tactical context as if it were durable memory.

After: durable context is separated from current operating state, live work stays in a working document, and unsupported memory actions are listed for manual follow-up.
