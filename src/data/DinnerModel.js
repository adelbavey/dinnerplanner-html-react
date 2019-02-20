import ObservableModel from "./ObservableModel";
import KEY from "./SpoonAPI"

const BASE_URL = "http://sunset.nada.kth.se:8080/iprog/group/62/";
const httpOptions = {
  headers: { "X-Mashape-Key": KEY }
};

class DinnerModel extends ObservableModel {
  constructor() {
    super();
    this._numberOfGuests = 4;
    this.getNumberOfGuests();
    this.currentDish=undefined;
    this.menu = [];
  }

  addToMenu(dish){
    this.menu.push(dish);
    this.notifyObservers();
  }

  getMenu(){
    console.log(this.menu);
    return this.menu;
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
    return this._numberOfGuests;
  }

  /**
   * Set number of guests
   * @param {number} num
   */
  setNumberOfGuests(num) {
    this._numberOfGuests = num;
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
