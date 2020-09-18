// let
let favoriteCityId = "rome";
console.log(favoriteCityId);
favoriteCityId = "paris";
console.log(favoriteCityId);

// const
const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);
//citiesId = [];
citiesId.push("tokyo");
console.log(citiesId);

// Création d’objet
function getWeather(cityId){
    let city = cityId.toUpperCase(); 
    let temperature = 20;
    return {city, temperature}
}

const weather = getWeather(favoriteCityId);
console.log(weather);

// Affectation destructurée
const {
    city : city, 
    temperature : temperature
} = weather;
console.log(city + " " + temperature);

// Rest operator
const [parisId, nycId, ...othersCitiesId] = citiesId;
console.log(parisId + " " + nycId);
console.log("Le tableau restant a une taille de " + othersCitiesId.length);

// C comme Classe
class Trip {
    constructor(id, name, imageUrl){
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }
    toString(){
        return "Trip [" + this.id + ", " + this.name + ", " + this.imageUrl + ", " + this._price + "]"
    }

    get price(){
        return this._price;
    }

    set price(newPrice){
        this._price = newPrice;
    }

    static getDefaultTrip(){
        return new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg");
    }
}
const parisTrip = new Trip("paris", "Paris", "img/paris.jpg");
console.log(parisTrip);
console.log(parisTrip.name);
parisTrip.price = 100;
console.log(parisTrip.toString());

const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());

// Hérisson ... tage
class FreeTrip extends Trip {
    constructor(id, name, imageUrl){
        super(id, name, imageUrl);
        this._price = 0;
    }

    //redéfinition de méthode
    toString(){
        return "Free" + super.toString();
    }
}

const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg");
console.log(freeTrip.toString());

// Promise, Set (et Match), Map, Arrow Function
class TripService {
    constructor() {
        this.trips = new Set();
        this.trips.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        this.trips.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
        this.trips.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
    }
    findByName(tripName) {
    return new Promise((resolve, reject) => {
    setTimeout( () => {
        this.trips.forEach(element => {   
            if (element.name === tripName){
                resolve(element)
            }  else {
                reject("No trip with name " + tripName);
            }
        }
        );

    }, 2000)});
    }
    }
    const tripService = new TripService();
    tripService.findByName('Paris').then(tripReturn => {console.log("Trip trouvé :", tripReturn.toString())}).catch(err => console.log(err));
    tripService.findByName('Toulouse').then(tripReturn => {console.log("Trip trouvé :", tripReturn.toString())}).catch(err => console.log(err));

    class PriceService {
    constructor() {
        this.prices = new Map();
        this.prices.set('paris', 100);
        this.prices.set('rio-de-janeiro', 800);
    }
    findPriceByTripId(tripId) {
    return new Promise((resolve, reject) => {
    setTimeout( () => {  
            if (this.prices.has(tripId)){
                resolve(this.prices.get(tripId));
            }  else {
                reject("No price found for id " + tripId);
            }
    }, 2000)
    });
    }
    }

    const priceService = new PriceService();
    priceService.findPriceByTripId('paris').then(tripReturn => {console.log("Price found :", tripReturn)}).catch(err => console.log(err));
    priceService.findPriceByTripId('nantes').then(tripReturn => {console.log("Price found :", tripReturn)}).catch(err => console.log(err));
