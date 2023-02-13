import { countries } from "./map";

export const setupCountryChooser = (element: HTMLDivElement) => {
  const resultsEl = element.querySelector("ul")!;

  let active: Element | null = null;

  const render = (list: string[]) => {
    let results = list
      .flatMap((country) =>
        !active?.classList.contains(country)
          ? [
              `<li class="cursor-default select-none px-4 py-2 hover:bg-violet-500 hover:text-white id="option-5" role="option" tabindex="-1">${country}</li>`,
            ]
          : []
      )
      .join("");

    resultsEl.innerHTML = results;
  };

  render(countries);

  const select = (province: Element) => {
    element.style.display = "";

    active = province;
    render(countries);
  };

  const hide = () => {
    element.style.display = "none";
  };

  const backdrop = element.querySelector("#countryChooser-backdrop")!;
  backdrop.addEventListener("click", hide);

  const input = element.querySelector("input")!;

  const onChange = () => {
    const query = input.value;
    render(
      countries.filter((country) =>
        country.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  input.addEventListener("input", onChange);

  const onClick = (ev: MouseEvent) => {
    // ev.stopPropagation();
    if (
      !ev.target ||
      !active ||
      !(resultsEl.contains(ev.target as Node) && resultsEl !== ev.target)
    )
      return;

    const currentCountry = Array.from(active.classList).filter(
      (c) => c !== "hovering"
    )[0];

    const selected = (ev.target as HTMLLIElement).innerHTML.replaceAll(" ", "_");

    active.classList.remove(currentCountry);
    active.classList.add(selected);

    hide();
  };

  resultsEl.addEventListener("click", onClick);

  return {
    select,
  };
};
