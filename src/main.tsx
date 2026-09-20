import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Pages are pre-rendered at build time (scripts/prerender.mjs) so crawlers and the first
// paint get full HTML. The client then renders the interactive app over it. We deliberately
// use createRoot rather than hydrateRoot: the snapshot is taken from a live browser session
// and cannot match React's expected server markup exactly, so hydration always failed and
// fell back to a client render with console errors.
createRoot(document.getElementById("root")!).render(<App />);
