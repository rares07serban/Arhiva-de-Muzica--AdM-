# Stage 2: AI log

## Tools
- Gemini

## Conversations
- Conversation on data structures, array operations, immutability, and Stage 2 verification.

## Key requests

### 1. Pure array methods and immutability
- Asked: How to implement listing, counting, searching, adding, toggling, and deleting without mutating the source array.
- Got: Functions utilizing `map`, `filter`, and spread syntax (`...`) returning new collections and objects.
- Changed or rejected: Kept consistent property names (`title`, `done`, `genre`) aligning with the Stage 1 data model.

### 2. Validation and ID generation
- Asked: How to safely compute incremental unique IDs and handle input edge cases.
- Got: An ID generator using `reduce` to find `max(id) + 1` and input validation rejecting whitespace-only titles or invalid genres.
- Changed or rejected: Logged explicit console warnings on validation failures as specified in the rubric.

## What I learned / what did not work
I learned why immutability is essential for component-driven frameworks like React, avoiding side effects caused by in-place array mutation (`push` or `splice`). I also practiced computing derived IDs with `reduce` rather than relying on array length.