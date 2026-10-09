# Stage 1: AI log

## Tools
- Gemini
-ChatGPT
## Conversations
- Conversation on project theme definition, data model planning, and Stage 1 mockup generation.

## Key requests
1. Data model and README structure
Asked: How to adapt the TaskFlow example for an audio platform ("Arhiva de Muzică") while respecting the 5 mandatory fields and genre addition.
Got: A markdown structure for the data model including audio formats, boolean favorite flags, fixed genres, categories, and AI declaration.
Changed or rejected: Kept the primary entity as a Track and modeled genre requests as an admin-approved feature rather than making the whole UI a suggestion box.
2. Semantic HTML and accessible CSS styling
Asked: How to build the 2-column layout with Flexbox cards, keyboard focus visibility, and a responsive dark theme.
Got: Complete HTML and CSS structure adhering to the Stage 1 constraints, including the 1fr 2fr layout, @media (max-width: 700px), visible keyboard focus, and CSS custom properties.
Changed or rejected: Added custom color tokens for music genre badges (--badge-electronic, --badge-ambient, --badge-rock).
3. Dark theme visual refinement

- **Asked:** How to adapt the interface to a very dark visual style using black and dark gray backgrounds, light yellow text, and light yellow action buttons.

- **Got:** A revised CSS palette using CSS custom properties, with a nearly black background, dark gray panels and borders, light yellow text, yellow accent buttons, and darker genre badges.

- **Changed or rejected:** Kept the existing HTML structure and Stage 1 requirements, while replacing the previous purple/light palette with the darker black-gray and light-yellow visual style. Also corrected the CSS selector for the track title to match the `.item-main` structure used in the HTML.