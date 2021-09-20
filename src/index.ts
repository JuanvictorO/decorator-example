import { estampaCostas } from "./camisa/EstampaCosta";
import { estampaFrente } from "./camisa/EstampaFrente";
import { mangaLonga } from "./camisa/MangaLonga";
import { Camisa } from "./camisa/Camisa";

const camisa = new Camisa();
const camisetaEstampadaNaFrente = new estampaFrente(camisa);
const camisetaEstampadaNasCostas = new estampaCostas(camisetaEstampadaNaFrente);
const camisetaMangaLonga = new mangaLonga(camisetaEstampadaNasCostas);

console.log("Marca: " + camisa.getMarca());
console.log("Tamanho: " + camisa.getSize());
console.log("Preço da camisa: " + camisa.getPrice());
console.log(
  "Preço camisa com estampa na frente: " + camisetaEstampadaNaFrente.getPrice()
);
console.log(
  "Preço camisa com estampa na frente e atrás: " +
    camisetaEstampadaNasCostas.getPrice()
);
console.log(
  "Preço camisa com estampa na frente e atrás e manga longa: " +
    camisetaMangaLonga.getPrice()
);
