import  StarWarsAPI  from './class/StarWarsApi.js';
import  StarWarsAPI2  from './class/StarWarsApi2.js';
import  StarWarsAPI3  from './class/StarWarsApi3.js';

const api = new StarWarsAPI()
const api2 = new StarWarsAPI2();
const api3 = new StarWarsAPI3();

api.cargarCard()
api2.cargarCard()
api3.cargarCard()
