import "@gouvfr/dsfr/dist/dsfr.min.css";
import "@gouvfr/dsfr/dist/utility/utility.min.css";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import falcon from "./assets/falcon.png";
import "./style.css";
import { hello } from "./test";

const container = document.querySelector<HTMLDivElement>("#content");
if (container) {
  createRoot(container).render(<App hello={hello} falcon={falcon} />);
}
