// import { Gesture } from "@use-gesture/vanilla";
// import anime from "animejs";
import "./map.css";
import { setupCountryChooser } from "./countryChooser";

export const initialState = {
  Alentejo: "Portugal",
  Beiras: "Portugal",
  Andalusia: "Spain",
  Granada: "Spain",
  Murcia: "Spain",
  Valencia: "Spain",
  "La Mancha": "Spain",
  Madrid: "Spain",
  Castile: "Spain",
  León: "Spain",
  "Galicia (Iberian)": "Spain",
  Asturias: "Spain",
  Navarra: "Spain",
  Aragon: "Spain",
  Catalonia: "Spain",
  Baleares: "Spain",
  "Midi-Pyrénées": "France",
  Aquitaine: "France",
  "Languedoc-Roussillon": "France",
  Provence: "France",
  Dauphiné: "France",
  Auvergne: "France",
  Limousin: "France",
  "Poitou-Charentes": "France",
  "Val de Loire": "France",
  "Pays de la Loire": "France",
  Brittany: "France",
  Burgundy: "France",
  "Franche-Comté": "France",
  Normandy: "France",
  "Île-de-France": "France",
  Picardy: "France",
  Champagne: "France",
  Lorraine: "France",
  Alsace: "France",
  Calais: "France",
  Corsica: "France",
  "Jersey and Guernsey": "France",
  Savoy: "Piedmont-Sardinia",
  Nice: "Piedmont-Sardinia",
  Piedmonte: "Piedmont-Sardinia",
  Sardinia: "Piedmont-Sardinia",
  "Canton of Bern": "Switzerland",
  "Canton of Zürich": "Switzerland",
  Romagna: "Papal States",
  Umbria: "Papal States",
  Marche: "Papal States",
  Lazio: "Papal States",
  Abruzzo: "Kingdom of the Two Sicilies",
  Campania: "Kingdom of the Two Sicilies",
  Apulia: "Kingdom of the Two Sicilies",
  Calabria: "Kingdom of the Two Sicilies",
  Sicilia: "Kingdom of the Two Sicilies",
  "Lombardo-Venetia": "Venice",
  Dalmatia: "Venice",
  "Ionian Isles": "Venice",
  "Aegean Isles": "Venice",
  Brabant: "United Netherlands",
  Holland: "United Netherlands",
  Guelders: "United Netherlands",
  Frisia: "United Netherlands",
  Augsburg: "Small German States",
  Nassau: "Small German States",
  Saxe: "Small German States",
  Brunswick: "Small German States",
  Palatinate: "Palatinate",
  Jülch: "Palatinate",
  Berg: "Palatinate",
  Cleves: "Prussia",
  Mark: "Prussia",
  Lingen: "Prussia",
  Minden: "Prussia",
  "East Frisia": "Prussia",
  Magdeburg: "Prussia",
  Brandenburg: "Prussia",
  Silesia: "Prussia",
  Pomerania: "Prussia",
  Lusatia: "Prussia",
  Mansfeld: "Prussia",
  "West Prussia": "Prussia",
  "East Prussia": "Prussia",
  "North Saxony": "Saxony",
  "South Saxony": "Saxony",
  "Austrian Netherlands": "Austria",
  Tyrol: "Austria",
  Carinthia: "Austria",
  Carniola: "Austria",
  Styria: "Austria",
  Austria: "Austria",
  Croatia: "Austria",
  Banat: "Austria",
  Bohemia: "Austria",
  Moravia: "Austria",
  Hungary: "Austria",
  "Galicia (Austria)": "Austria",
  Transylvania: "Austria",
  Bukovina: "Austria",
  Hanover: "Hanover",
  Göttingen: "Hanover",
  Holstein: "Denmark",
  Schleswig: "Denmark",
  Jutland: "Denmark",
  Sjælland: "Denmark",
  Sørlandet: "Denmark",
  Østlandet: "Denmark",
  Vestlandet: "Denmark",
  Tøndelag: "Denmark",
  Nordnorge: "Denmark",
  Posen: "Poland",
  Kalisz: "Poland",
  Krakow: "Poland",
  Radom: "Poland",
  Lublin: "Poland",
  Warszawa: "Poland",
  Polck: "Poland",
  Siedlce: "Poland",
  Grodno: "Poland",
  Suwalki: "Poland",
  Vilna: "Poland",
  Kovno: "Poland",
  Courland: "Poland",
  Witebsk: "Poland",
  Minsk: "Poland",
  Mohylew: "Poland",
  Volhynia: "Poland",
  Kiev: "Poland",
  Podolia: "Poland",
  Posnia: "Ottoman Empire",
  Serbia: "Ottoman Empire",
  Herzegovina: "Ottoman Empire",
  Rumelia: "Ottoman Empire",
  Yanina: "Ottoman Empire",
  Morea: "Ottoman Empire",
  Salonica: "Ottoman Empire",
  Niš: "Ottoman Empire",
  Vidin: "Ottoman Empire",
  Wallachia: "Ottoman Empire",
  Moldavia: "Ottoman Empire",
  Silistria: "Ottoman Empire",
  Edirne: "Ottoman Empire",
  Constantinople: "Ottoman Empire",
  Anatolia: "Ottoman Empire",
  Cyprus: "Ottoman Empire",
  Bessarabia: "Ottoman Empire",
  Gibraltar: "Britain",
  Anglia: "Britain",
  Wessex: "Britain",
  Mercia: "Britain",
  Wales: "Britain",
  Yorkshire: "Britain",
  Northumbria: "Britain",
  Lowlands: "Britain",
  Highlands: "Britain",
  Ulster: "Britain",
  Leinster: "Britain",
  Munster: "Britain",
  Connacht: "Britain",
  "Swedish Pomerania": "Sweden",
  Kalmar: "Sweden",
  Gotland: "Sweden",
  Götaland: "Sweden",
  Värmland: "Sweden",
  Södermanland: "Sweden",
  Dalarna: "Sweden",
  Jämtland: "Sweden",
  Västerland: "Sweden",
  Oulu: "Sweden",
  Vaasa: "Sweden",
  Savonia: "Sweden",
  Satakunta: "Sweden",
  Uusimaa: "Sweden",
  Estonia: "Russia",
  Livonia: "Russia",
  "Saint Petersburg": "Russia",
  Vyborg: "Russia",
  Petrozavodsk: "Russia",
  Arkhangelsk: "Russia",
  Novgorod: "Russia",
  Pskov: "Russia",
  Vitebsk: "Russia",
  Mogilev: "Russia",
  Smolensk: "Russia",
  Tver: "Russia",
  Yaroslavl: "Russia",
  Vologda: "Russia",
  Kostroma: "Russia",
  Vladimir: "Russia",
  Moscow: "Russia",
  Kaluga: "Russia",
  Orel: "Russia",
  Chernigov: "Russia",
  Kursk: "Russia",
  Tula: "Russia",
  Ryazan: "Russia",
  Nizhniy: "Russia",
  Vyatka: "Russia",
  Perm: "Russia",
  Kazan: "Russia",
  Ufa: "Russia",
  Samara: "Russia",
  Orenburg: "Russia",
  Simbirsk: "Russia",
  Penza: "Russia",
  Tambov: "Russia",
  Voronezh: "Russia",
  Saratov: "Russia",
  Novocherkassk: "Russia",
  Kharkov: "Russia",
  Poltava: "Russia",
  Kherson: "Russia",
  Taurida: "Russia",
  Ekaterinodar: "Russia",
  Stavropol: "Russia",
  Astrakhan: "Russia",
  Genoa: "Genoa",
  Milan: "Milan",
  Parma: "Parma",
  Modena: "Modena",
  Lucca: "Lucca",
  Tuscany: "Tuscany",
  Malta: "Malta",
  Liége: "Liége",
  Cologne: "Cologne",
  Trier: "Trier",
  Mainz: "Mainz",
  Würzburg: "Würzburg",
  Ansbach: "Ansbach",
  Bamberg: "Bamberg",
  Bayreuth: "Bayreuth",
  Württemberg: "Württemberg",
  Westphalia: "Westphalia",
  Oldenburg: "Oldenburg",
  Anhalt: "Anhalt",
  Bavaria: "Bavaria",
  Salzburg: "Salzburg",
  Mecklenburg: "Mecklenburg",
  Münster: "Münster",
  Extremadura: "Spain",
  Osnabrück: "Osnabrück",
  Baden: "Baden",
  "Hesse-Kassel": "Hesse-Kassel",
  Bosnia: "Ottoman Empire",
  Ekaterinoslav: "Russia",
};

export const setupMap = (
  element: SVGElement,
  callbacks?: {
    onClick?: (target: Element, event: Event) => void;
    onEnter?: (target: Element, event: Event) => void;
    onLeave?: (target: Element, event: Event) => void;
  }
) => {
  const children = Array.from(element.children);
  const provinces = children.slice(1, children.length);

  const countryChooserElement =
    document.querySelector<HTMLDivElement>("#countryChooser")!;

  const countryChooser = setupCountryChooser(countryChooserElement);

  //   element.style.position = "absolute";
  //   element.style.top = "0";
  //   element.style.left = "0";
  element.style.backgroundColor = "lightskyblue";

  //   countries.map((countryName, i) =>
  //     element.style.setProperty(
  //       `--${countryName.replaceAll(" ", "_")}`,
  //       `hsl(${(i / (countries.length - 1)) * 360}, 100%, 50%)`
  //     )
  //   );

  const onClick = (province: Element) => (event: Event) => {
    countryChooser.select(province);
    callbacks?.onClick?.(province, event);
  };

  const onEnter = (province: Element) => (event: Event) => {
    province.classList.add("hovering");
    callbacks?.onEnter?.(province, event);
  };

  const onLeave = (province: Element) => (event: Event) => {
    province.classList.remove("hovering");
    callbacks?.onLeave?.(province, event);
  };

  const getNation = (state: { [name: string]: string }, element: Element) =>
    state[element.id.replaceAll("_", " ")];

  provinces.forEach((province) => {
    const initialNation = getNation(initialState, province);

    if (initialNation) {
      province.classList.add(initialNation.replaceAll(" ", "_"));
    } else {
      console.log(province.id);
    }

    province.addEventListener("click", onClick(province));
    province.addEventListener("mouseenter", onEnter(province));
    province.addEventListener("mouseleave", onLeave(province));
  });

  const destroyMap = () => {
    provinces.forEach((province) => {
      province.removeEventListener("click", onClick(province));
      province.removeEventListener("mouseenter", onEnter(province));
      province.removeEventListener("mouseleave", onLeave(province));
    });
  };

  return { destroyMap };
};
