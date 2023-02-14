import "./index.css";
import { setupMap } from "./map";
import { setupCountryChooser } from "./countryChooser";
import { DragGesture } from "@use-gesture/vanilla";
import anime from "animejs";

const mapElement = document.querySelector<SVGElement>("#map")!;

setupMap(mapElement, {
  onClick: (province, e) => {
  },
});
