# Stage 5: AI log

## Tools
- Gemini

## Conversations
- Conversation on integrating React local state (`useState`), lifting state up, and handling DOM events without mutating source data.

## Key requests

### 1. Interactive Checkboxes and Deletions
- Asked: How to connect the existing dataset to React's `useState` and pass event handlers down to child components.
- Got: Step-by-step modification of `App.jsx` introducing `handleToggle` and `handleDelete` functions using the functional form of state (`prev => ...`), and applying `checked` and `onChange` attributes on inputs inside `PiesaCard`.
- Changed or rejected: Ensured the counter derivation calculates implicitly from state without introducing a redundant secondary counter state variable.

### 2. Theme Toggle implementation
- Asked: How to implement a data-theme toggle via the application header interacting with root CSS variables.
- Got: Added a state for tracking `light`/`dark` themes initiated via `window.matchMedia`, applying conditional DOM classes globally on `document.documentElement.dataset.theme`.
- Changed or rejected: Kept custom variable naming conventions (`--badge-rock`) matching Stage 1 specifications to prevent blank elements during theme transition.

## What I learned / what did not work
I learned the difference between controlled inputs (where the `checked` value is dictated by the React state) and uncontrolled inputs. I also practiced lifting state up into the parent container (`App`) while delegating the UI rendering to purely presentation components.