
import GenericService from './service'; // Importa la clase GenericService si es necesario
import Config from '../global/config'

class SessionService extends GenericService {
  async ObtenerOfertas(params) {
    const url = `${Config.URL_SERVICIOS}${Config.VERSUS}loginpost/`;
    const service = new GenericService();
    return await service.post(url, params);
  }

  async logoutApp(params) {
    const url = `${Config.URL_SERVICIOS}${Config.VERSUS}cerrarsesionpost/`;
    const service = new GenericService();
    return await service.post(url, params);
  }
}
export default SessionService;