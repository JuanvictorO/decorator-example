import { loading } from "./utils/loading";
import { sleep } from "./utils/sleep";

export class Revisao {
  public revisarArquivo(arquivoSLT: string) {
    console.log("Revisando arquivo, Aguarde...");
    loading();
    console.log("1 - Modelo 3D no formato STL finalizado!\n");
    sleep(1000);
  }
}
