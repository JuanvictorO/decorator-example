import { sleep } from "./utils/sleep";
import { loading } from "./utils/loading";

import { Revisao } from "./Revisao";
import { Fatiamento } from "./Fatiamento";
import { Comunicacao } from "./Comunicacao";

export class Impressao3dFacade {
  constructor() {}

  public imprimir(arquivoSLT: string) {
    const revisao = new Revisao();
    const fatiamento = new Fatiamento();
    const comunicacao = new Comunicacao();

    revisao.revisarArquivo(arquivoSLT);
    fatiamento.fatiamentoDoModelo();
    comunicacao.gerarComunicacaoComServidor();

    console.log("Imprimindo...");
    loading();
    sleep(2000);
    console.log("Impressão concluída!!!");
  }
}
