import config from '../config';

const PetfulApiService = {
  getDog(){
    return fetch(`${config.API_ENDPOINT}/api/dogs`, {
      method: 'GET',
      headers: {
        'content-type' : 'application/json'   
      }
    });
  },

  deleteDog() {
    return fetch(`${config.API_ENDPOINT}/api/dogs/delete`, {
      method: 'DELETE',
      headers: {
        'content-type' : 'application/json'
      }
    });
  },
 
  getCat() {
    return fetch(`${config.API_ENDPOINT}/api/cats`, {
      method: 'GET',
      headers: {
        'content-type' : 'application/json'   
      }
    });
  },

  deleteCat() {
    return fetch(`${config.API_ENDPOINT}/api/cats/delete`, {
      method: 'DELETE',
      headers: {
        'content-type' : 'application/json'
      }
    })
  },

  getQueue() {
    return fetch(`${config.API_ENDPOINT}/api/adopters`, {
      method: 'GET',
      headers: {
        'content-type' : 'application/json'   
      }
    });
  },

  deleteAdopter() {
    return fetch(`${config.API_ENDPOINT}/api/adopters/delete`, {
      method: 'DELETE',
      headers: {
        'content-type' : 'application/json'   
      }
    });
  }
  
};

export default PetfulApiService;