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
    console.log(config.API_ENDPOINT)
    return fetch(`${config.API_ENDPOINT}/cats`, {
      method: 'GET',
      headers: {
        'content-type' : 'application/json'   
      }
    });
  },

  deleteCat() {
    return fetch(`${config.API_ENDPOINT}/cats/delete`, {
      method: 'DELETE',
      headers: {
        'content-type' : 'application/json'
      }
    })
  },

  getQueue() {
    return fetch(`${config.API_ENDPOINT}/adopters`, {
      method: 'GET',
      headers: {
        'content-type' : 'application/json'   
      }
    });
  },

  deleteAdopter() {
    return fetch(`${config.API_ENDPOINT}/adopters/delete`, {
      method: 'DELETE',
      headers: {
        'content-type' : 'application/json'   
      }
    });
  }
  
};

export default PetfulApiService;