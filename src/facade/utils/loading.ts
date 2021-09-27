import { sleep } from "./sleep";

export function loading() {
  var x = 0;
  while (x < 3) {
    console.log("...");
    sleep(1000);
    x++;
  }
}
