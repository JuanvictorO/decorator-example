import { sleep } from "./utils/sleep";

export class Comunicacao {
  /* 
 Comunicação do Computador com a Impressora por meio de um servidor de impressão 3D;
 Transmite e gerencia as instruções geradas pelo slicer(software fatiador) e permite que você monitore todo o processo, 
 alterando as configurações em tempo real caso necessário
*/
  public gerarComunicacaoComServidor() {
    console.log("3 - Conexão com o servidor de impressão estabelecida.\n");
    sleep(1000);
  }
}
