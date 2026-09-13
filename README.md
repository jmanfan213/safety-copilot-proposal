# SafetyCopilot Project Proposal

A React and Vite website for presenting a system design project proposal for **SafetyCopilot: AI-Assisted Software Safety Analysis**.

The proposed system would help safety engineers analyze software requirements while keeping humans in control of final decisions. This website currently presents the project introduction and a proposal template; the safety analysis system itself is not implemented.

## Pages

- **Home (`/`):** A hero section with the project title, short description, and a **View Proposal** link.
- **Proposal (`/proposal`):** A structured writing template with prompts for the system design assignment and a **Back to home** link.

## Proposal requirements

The assignment calls for a **600–1,200-word project plan** with **5–10 references**. The template covers:

1. **Title:** SafetyCopilot, with a subtitle, author, and date in the page header.
2. **Introduction:** The problem, motivation, and supporting literature.
3. **Target users and user goals:** Who the system serves and what they need to accomplish.
4. **How we will study target users:** Research activities and how findings will inform the design.
5. **What we might build:** Proposed features, workflow, technologies, scope, and deliverables.
6. **How we will evaluate success:** Evaluation tasks, measures, and success criteria.
7. **How we will recruit participants:** Eligibility, recruitment channels, participation details, and consent.
8. **References:** Five citation placeholders, with room to add up to five more sources.

## Writing the proposal

Open [src/Proposal.jsx](src/Proposal.jsx) and replace the bracketed prompts with your proposal text. Update the author and date in the header, fill in the reference entries, and add matching in-text citations using a consistent citation style.

The template is edited in the source code, not through an in-browser editor. Save the file while the development server is running to see the page update.

## Run locally

From the project directory, install dependencies and start the development server:

```sh
npm install
npm run dev
```

Open the local URL printed in the terminal, then select **View Proposal** to open the template.

## Source files

| File | Purpose |
| --- | --- |
| [src/App.jsx](src/App.jsx) | Home page and selection of the proposal page based on the URL |
| [src/App.css](src/App.css) | Hero section and proposal link styling |
| [src/Proposal.jsx](src/Proposal.jsx) | Proposal content and reference placeholders |
| [src/Proposal.css](src/Proposal.css) | Proposal document layout and typography |
| [src/index.css](src/index.css) | Global styles |
| [src/main.jsx](src/main.jsx) | React entry point |

## Project commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally after building |
| `npm run lint` | Check the JavaScript and JSX with ESLint |

When deploying, configure the host to serve `index.html` for `/proposal` so opening or refreshing that URL loads the React app.
