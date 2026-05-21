# 01 Context Audit

## Purpose

Use this to force ChatGPT to audit what it thinks it knows before relying on stale, unsupported, or overconfident context.

## When to use

- Before important strategy, coaching, writing, research, planning, or execution work
- When ChatGPT's advice feels generic or oddly personal
- Before updating Custom Instructions or memory
- After a major role, organization, project, or personal context change

## Prompt

Audit your current context of me and my work.

Create a table with these columns:

1. Assumption
2. Category
3. Confidence level
4. Evidence or source
5. Usefulness
6. Risk if wrong
7. Action: keep, update, delete, clarify, or ignore

Cover these categories:

- Who I am professionally, academically, creatively, or personally
- My current role, responsibilities, or focus
- My organization, business, school, clients, or other relevant context
- My goals and priorities
- My current projects or initiatives
- My decision-making style
- My communication preferences
- My recurring workflows
- My tools, systems, and tech stack
- My personal interests that may affect recommendations
- My constraints, risks, or blind spots
- Any assumptions that may be stale, overconfident, or unsupported

Be strict. Do not flatter me. Do not guess beyond the evidence. Clearly separate what you know, what you infer, and what you do not know.

After the table, give me:

1. The 10 most important things you think you know about me.
2. The 10 highest-risk assumptions that may be wrong.
3. The 10 most useful missing pieces of context.
4. A short list of things I should correct, delete, or clarify.

## Expected output

- A strict assumption table
- A separation of confirmed facts, inferences, and unknowns
- A risk-ranked list of likely wrong assumptions
- A correction list for the user

## Failure modes

- The model flatters the user
- The model guesses beyond evidence
- The model treats old project context as current
- The model hides uncertainty
- The model gives vague action items
