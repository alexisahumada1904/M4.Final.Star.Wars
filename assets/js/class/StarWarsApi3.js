import  StarWarsAPI  from './StarWarsApi.js';

export default  class StarWarsAPI3 extends StarWarsAPI {
  constructor() {
    super();
    this.contador = 12;
    this.card = document.getElementById("tercerasCard");
    this.color = "text-primary"
    this.btn = document.getElementById("btnObtenerPersonaje3")
    this.maxContador=16
  }
}
