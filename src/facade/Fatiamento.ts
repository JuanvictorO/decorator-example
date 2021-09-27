import { loading } from "./utils/loading";
import { sleep } from "./utils/sleep";

export class Fatiamento {
  // Fatia o modelo 3D em várias camadas e gera instruções
  // para a impressora 3D sobre como imprimi-las
  public fatiamentoDoModelo() {
    console.log(
      "Aguarde enquanto o modelo é fatiado, isso pode demorar um pouco:"
    );
    loading();
    console.log("2 - Modelo 3D fatiado.\n");
    sleep(1000);
  }
}
