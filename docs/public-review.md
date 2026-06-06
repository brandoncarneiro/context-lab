# Public Review Notes

Context Lab is public by design. It is a documentation and prompt-workflow project, not an application runtime.

## What A Reviewer Can Verify

- The workflow is plain Markdown and can be inspected without installing dependencies.
- The examples are fictionalized and avoid real saved-memory state.
- Prompt 07 explicitly checks durable-memory capability instead of pretending memory edits are always possible.
- The repository has a security policy for sensitive context and memory exports.
- CI validates local Markdown links and whitespace on every push and pull request.

## Public Boundary

The repository should not contain real user memory, private operating profiles, active project context, account exports, screenshots from private chats, or credentials. Those belong in private working documents, not in this public repo.

## Quality Bar

The public surface should stay:

- strict about facts versus assumptions
- conservative about durable memory
- useful without hype
- readable as a workflow, not a prompt dump
- safe for public inspection by a technical reviewer
