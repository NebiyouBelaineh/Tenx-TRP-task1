# TRP task 1 
## What you did
- Rewrote the rules file to be **principle-based** instead of procedural
- Removed rigid enforcement language (e.g. MUST, FAILURE = VIOLATION)
- Eliminated imaginary tools, triggers, and blocking workflows
- Structured rules into clear sections: goals, style, reasoning, coding standards, tools, and uncertainty
- Added explicit **non-goals** to prevent hallucinated behavior
- Aligned tone and structure with Boris Cherny–style guidance (human-readable, model-agnostic)

---

## What worked
- Principle-driven rules reliably shaped agent behavior across prompts
- Concise-by-default guidance reduced over-explaining
- Explicit “when unsure” guidance reduced guessing and hallucination
- Non-goals section prevented fake tool usage and invented workflows
- Asking for tradeoffs (instead of forcing steps) improved design discussions

---

## What didn’t work
- Rigid workflow enforcement (step ordering, mandatory triggers)
- Tool-call requirements for tools that don’t exist in the runtime
- Blocking or “wait until X” semantics
- Mixing logging, UX formatting, and reasoning constraints in one rule
- Overly verbose or punitive language reduced agent usefulness

**How it was fixed**
- Replaced enforcement with intent-based guidance
- Converted hard rules into preferences and defaults
- Simplified structure to reduce cognitive load for the model

---

## Insights gained
- Rules shape **defaults**, not absolute behavior
- Models follow *intent and priorities* better than strict procedures
- Clear principles lead to predictable behavior across models
- Explicit uncertainty rules improve trust and correctness
- Non-goals are as important as goals for preventing bad behavior
- Small wording changes can significantly alter verbosity, confidence, and abstraction levels

