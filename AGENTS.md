# Agent Context - Flowstate Labs Website

## What We're Building

[Placeholder for repo]

## Key Principles

1. **DRY** — (CODE) Reuse existing code first; if duplicated, extract and reuse in all places. (DOCS) Link to existing docs instead of duplicating.
2. **SOLID** — Keep a single responsibility per module/function. Encapsulate behavior and avoid cross-layer leakage.
3. **QUALITY** — Always prioritize maintainable, production-grade solutions (readability, correctness, resilience, and consistency).
4. **Test** — Add tests for new behavior and regressions before refactoring; keep coverage aligned with real workflows.
5. **Incremental** — Make focused, small changes and validate after each step.
6. **Test Execution** — Run relevant tests and report outcomes (or explain clearly why they could not run).
7. **Checks** — Run required lint/type/quality checks before finalizing.
8. **Documentation** — Prefer updating existing docs over creating new files unless a new document is truly necessary.

### Rules

1. When extending files, first check whether the content already exists. Remember the purpose of each document before choosing the appropriate section.
2. Prioritize DRY and non-redundant quality.
3. Feel free to suggest changes on existing bad code.
4. Search authoritative sources for best practices when necessary, and assess details.
5. At the end, evaluate new additions against the full picture for coherence, structure, DRY compliance, and citation quality, and provide concise feedback to the user.
6. Make sure the tests match real workflow as much as possible so we can be sure that the new implementations actually work in the real world and not just in theory.

## Solving Bugs

1. When a bug is reported you should first create a test to recreate it TDD style and let it fail.
2. Afterwards you fix the problem but keep the test for protection against regressions.

## Tips

- You can make use of any useful tools/MCP servers if it helps you with context.
- You always have Subagent capabilities, so you can delegate tasks to them if you think they are better suited for it.
- Keep outputs concise and actionable: what changed, how it was validated, and what is next.
