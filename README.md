# ⚛️ Interactive Periodic Table

Web application to explore all **118 chemical elements**: accurate layout of groups, periods, lanthanides and actinides, detailed information per element (atomic mass, phase, density, melting/boiling points, electronegativity, electron configuration), search by name/symbol/number, and category filtering through an interactive legend.


## Demo

[View live project](https://kasa04.github.io/interactive-periodic-table/)

<img width="1821" height="945" alt="image" src="https://github.com/user-attachments/assets/a051d2a6-121c-4a6d-bf18-f8aecce02076" />


## Features

* Full 118-element table with a correct 18-column layout, plus lanthanides and actinides
* Detail modal per element: image, summary, physical properties and electron configuration
* Real-time search by name, symbol or atomic number
* Interactive legend that works as a category filter, combinable with the search
* Two-column layout with a sticky sidebar


## Getting Started

**Requirements:** [Node.js](https://nodejs.org/) 18 or higher.

```bash
# 1. Clone the repository
git clone https://github.com/kasa04/interactive-periodic-table.git
cd interactive-periodic-table

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open the local address shown in the terminal (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
```


## Project Evolution

Development was done incrementally, going from a static table to a fully interactive application with filters and a detail modal. The full process is documented in the [commit history](../../commits/main):

1. **Base version** — 118-element dataset, 18-column grid positioned with `xpos`/`ypos`, cards colored by chemical category.
2. **Detail modal** — custom component (no external libraries) showing image, summary, physical properties and electron configuration when an element is selected; closes on outside click or `Esc` key.
3. **Filters, legend and visual polish** — real-time search by name/symbol/number, an interactive legend that turns categories into selectable filters (combinable with each other and with the search), two-column layout with a sticky sidebar, custom scrollbar, and overall visual refinement.


## Technologies Used

* **React** (components, state with hooks)
* **Vite** (development environment and build)
* **JavaScript**
* **CSS3** (Grid + Flexbox, no styling frameworks)


## Deployment and Version Control

The repository uses a workflow based on two main branches:
* **`main`**: Contains the application's source code, React components, Vite configuration, and development logic.
* **`gh-pages`**: Contains only the compiled (`build`) files optimized for production, which GitHub Pages uses to automatically serve the application live.


## AI Usage

Part of the development process (UI decisions) was done with the assistance of Claude. The project's design, product decisions and final review are my own.


## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.

---

## 👩‍💻 Author

**Sara** — [GitHub](https://github.com/kasa04) · [LinkedIn](https://www.linkedin.com/in/karla-cantu-67075542a)
