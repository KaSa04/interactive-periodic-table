# ⚛️ Interactive Periodic Table

Web application to explore all **118 chemical elements**: accurate layout of groups, periods, lanthanides and actinides, detailed information per element (atomic mass, phase, density, melting/boiling points, electronegativity, electron configuration), search by name/symbol/number, and category filtering through an interactive legend.

---

## 🔗 Demo

[View live project](https://kasa04.github.io/interactive-periodic-table/)

---

## 📂 Project Evolution

Development was done incrementally, going from a static table to a fully interactive application with filters and a detail modal. The full process is documented in the [commit history](../../commits/main):

1. **Base version** — 118-element dataset, 18-column grid positioned with `xpos`/`ypos`, cards colored by chemical category.
2. **Detail modal** — custom component (no external libraries) showing image, summary, physical properties and electron configuration when an element is selected; closes on outside click or `Esc` key.
3. **Filters, legend and visual polish** — real-time search by name/symbol/number, an interactive legend that turns categories into selectable filters (combinable with each other and with the search), two-column layout with a sticky sidebar, custom scrollbar, and overall visual refinement.

---

## 🛠️ Technologies Used

* **React** (components, state with hooks)
* **Vite** (development environment and build)
* **JavaScript**
* **CSS3** (Grid + Flexbox, no styling frameworks)

---

## 🚀 Deployment and Version Control

The repository uses a workflow based on two main branches:
* **`main`**: Contains the application's source code, React components, Vite configuration, and development logic.
* **`gh-pages`**: Contains only the compiled (`build`) files optimized for production, which GitHub Pages uses to automatically serve the application live.

---

## 🤖 AI Usage

Part of the development process (UI decisions) was done with the assistance of Claude. The project's design, product decisions and final review are my own.

---

## 📄 License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.
