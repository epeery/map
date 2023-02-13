import "./index.css";
import { setupMap } from "./map";
import { setupCountryChooser } from "./countryChooser";

const mapElement = document.querySelector<SVGElement>("#map")!;

const countryChooserElement =
  document.querySelector<HTMLDivElement>("#countryChooser")!;

const countryChooser = setupCountryChooser(countryChooserElement);

setupMap(mapElement, {
  onClick: (province) => {
    countryChooser.select(province);
  },
});
