# Context Lab

Context hygiene for serious ChatGPT users.

Context Lab is an inspectable prompt workflow for auditing, cleaning, and operationalizing ChatGPT context.

It helps users build a cleaner operating profile, decide what should and should not be saved to memory, and turn that context into reusable workflows for strategy, writing, research, planning, and execution.

It is not a prompt pack. It is not a memory dumping system. It is not a claim that ChatGPT knows you accurately. It is a context hygiene workflow.

## Why it exists

Most ChatGPT personalization fails because the model's context is incomplete, stale, tactical, over-saved, or unsupported.

Bad context creates bad advice:

- fake personalization
- stale assumptions
- overconfident recommendations
- generic strategy
- bloated memory
- tactical details treated as durable facts

Context Lab forces the model to separate confirmed facts, reasonable inferences, unknowns, stale assumptions, and high-risk guesses before relying on them.

## Core principle

Memory is for stable context.

Working documents are for live operating state.

Do not save tactical details, active deals, current priorities, project status, or temporary plans as durable memory.

## What works today

- Context audit prompt
- Gap interview prompt
- Operating profile builder
- Memory cleanup workflow
- AI workflow planner
- Reusable master prompt generator
- Memory execution prompt for applying approved memory changes
- Templates for saved context documents
- Example founder/operator outputs

## Current limits

- Markdown-only workflow
- No automated memory API
- No model-specific validation across ChatGPT, Claude, Gemini, or other models
- No CLI yet
- Output quality depends on how honestly the user corrects the model
- Sensitive context still requires user judgment

## Best sequence

1. [Context Audit](prompts/01-context-audit.md)
2. [Gap Interview](prompts/02-gap-interview.md)
3. [Operating Profile](prompts/03-operating-profile.md)
4. [Memory Cleanup](prompts/04-memory-cleanup.md)
5. [AI Workflow Plan](prompts/05-ai-workflow-plan.md)
6. [Master Prompt](prompts/06-master-prompt.md)
7. [Memory Execution](prompts/07-memory-execution.md)

## Quickstart

Open a new ChatGPT conversation and paste the prompt in `prompts/01-context-audit.md`.

After each response, continue through the seven prompts in order. Correct the model aggressively when it guesses, flatters, or treats stale context as current. Prompt 07 is the execution step: it asks ChatGPT to apply the approved memory cleanup plan and confirm what changed.

## Repository contents

- `prompts/`: the core seven-step prompt sequence
- `templates/`: reusable blank context documents
- `docs/`: principles, memory rules, and failure modes
- `examples/`: example outputs for adaptation

## Related labs

- [Harness Lab](https://github.com/sommbc/harness-lab): inspectable YAML and Markdown runbooks for AI workflows.
- [LLM Council](https://github.com/sommbc/llm-council): multi-model decision support with anonymous peer review.
- [Clip Lab](https://github.com/sommbc/clip-lab): local-first long-form to short-form video pipeline.

## License

MIT
