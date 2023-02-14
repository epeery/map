import "./index.css";
import { setupMap } from "./map";

const mapElement = document.querySelector<SVGElement>("#map")!;

setupMap(mapElement);
