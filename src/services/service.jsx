// clase generica para el consumo de APIS

import axios from 'axios'; // Importa la biblioteca axios si no la tienes instalada

class GenericService {

    async get(url) {
        try {
            const response = await axios.get(url);
            return response;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async post(url, params) {
      console.log("res" +JSON.stringify(params));
        try {       

          const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(params)
          });
    
          
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }          
          const data = await response.json();
          
          return data;
        } catch (error) {
          console.error('Cannot post to ' + url + '. error:' + error.message);
          return {"code": -1, "msg": `Cannot post to ${url}. error: ${error.message}`};
        }
      }
}
export default GenericService;