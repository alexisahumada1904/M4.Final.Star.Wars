import  StarWarsAPI  from './StarWarsApi.js';

export default class StarWarsAPI2 extends StarWarsAPI {
  constructor() {
    super();
    this.contador = 6;
    this.card = document.getElementById("segundasCard");
    this.color = "text-success"
    this.btn = document.getElementById("btnObtenerPersonaje2")
    this.maxContador=10
  }
}