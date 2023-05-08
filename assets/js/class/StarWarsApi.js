export default class StarWarsAPI {
  constructor() {
    this.url = "https://swapi.dev/api/people/"
    this.contador = 1
    this.card = document.getElementById("primerasCard")
    this.color = "text-danger"
    this.btn = document.getElementById("btnObtenerPersonaje")
    this.maxContador = 5
  }
  cargarCard(){
    this.btn.addEventListener("click", () => {
      if (this.contador <= this.maxContador) {
        this.obtenerPersonaje(this.contador);
      }
    });
  }
  async obtenerPersonaje(id) {
    const newUrl = `${this.url}${id}/`
    try {
      const response = await fetch(newUrl)
      const data = await response.json()
      const div = document.createElement("div")
      div.setAttribute("class","col-4")
      div.innerHTML = `
      <div class="card mb-3 shadow rounded-0 border-0">
        <div class="row g-0">
          <div class="col-2 pt-3">
      <div class="ps-2 text-center"> <i class="bi bi-circle-fill fs-2 ${this.color}"></i></div>
          </div>
          <div class="col-10">
            <div class="card-body">
              <h5 class="card-title fw-bold">${data.name}</h5>
              <p class="card-text">Estatura: ${data.height} cm. Peso: ${data.mass} kg.</p>
            </div>
          </div>
        </div>
      </div>
    `
    this.card.appendChild(div)
      this.contador++;
    } catch (error) {
      return console.log(error);
    }
  }
}
