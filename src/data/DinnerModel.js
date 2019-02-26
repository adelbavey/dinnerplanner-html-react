import ObservableModel from "./ObservableModel";
import KEY from "./SpoonAPI"

const BASE_URL = "http://sunset.nada.kth.se:8080/iprog/group/62/";
const httpOptions = {
  headers: { "X-Mashape-Key": KEY }
};

class DinnerModel extends ObservableModel {
  constructor() {
    super();
    //this._numberOfGuests = 4;
    //this.getNumberOfGuests();
    this.currentDish=undefined;
    //this.menu = [];
    this.myStorage = window.localStorage;
    this.myStorage.getItem("numberOfGuests") == null ? this.myStorage.setItem("numberOfGuests", 4):null;
    this.myStorage.getItem("menu") == null ? this.myStorage.setItem("menu", JSON.stringify([])):null;
  }

  addToMenu(dish){
    let menu = JSON.parse(this.myStorage.getItem("menu"));
    menu.push(dish);
    this.myStorage.setItem("menu", JSON.stringify(menu));
    this.notifyObservers();
  }

  getDishPrice(dish){
    if(dish.extendedIngredients === undefined) return 1;
    return dish.extendedIngredients.length;
  }
  getMenuPrice(){
    let menu = JSON.parse(this.myStorage.getItem("menu"));
    return menu.reduce((acc,dish)=>acc+this.getDishPrice(dish),0)
  } 

  getMenu(){
    return JSON.parse(this.myStorage.getItem("menu"));
  }

  getCurrentDish(){
    return this.currentDish;
  }

  setCurrentDish(dish){
    this.currentDish = dish;
  }

  /**
   * Get the number of guests
   * @returns {number}
   */
  getNumberOfGuests() {
    //return this._numberOfGuests;
    console.log("local nrofgsts: ", this.myStorage.getItem("numberOfGuests") )
    return this.myStorage.getItem("numberOfGuests");
  }

  /**
   * Set number of guests
   * @param {number} num
   */
  setNumberOfGuests(num) {
    //this._numberOfGuests = num;
    this.myStorage.setItem("numberOfGuests", num);
    this.notifyObservers();
  }

  // API methods

  /**
   * Do an API call to the search API endpoint.
   * @returns {Promise<any>}
   */
  getAllDishes(type,filter) {
    let params = "";
    if(type !== "all"){
			params = params + "type=" + type + "&";
		}
		if(filter !== null && filter !== "" && filter !== undefined){
			params = params + "query=" + filter + "&";
		}
    const url = `${BASE_URL}/recipes/search?`+params;
    return fetch(url, httpOptions).then(this.processResponse);
  }

  getDish(id) {
    const url = `${BASE_URL}/recipes/`+ id + "/information";
    return fetch(url, httpOptions).then(this.processResponse);
  }

  processResponse(response) {
    if (response.ok) {
      return response.json();
    }
    throw response;
  }
}

// Export an instance of DinnerModel
const modelInstance = new DinnerModel();
export default modelInstance;
