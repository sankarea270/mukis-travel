import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
// If served from a subpath (GitHub Pages project site), move the subpath into the hash
const base = import.meta.env.BASE_URL || "/";
if (base !== "/" && location.pathname.startsWith(base)) {
	const normalized = location.pathname.slice(base.replace(/\/$/, "").length) || "/";
	// Set hash so the hash-based router picks it up
	location.replace(location.origin + base + "#" + normalized + location.search + location.hash);
}

createRoot(document.getElementById("root")!).render(<App />);
