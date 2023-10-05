
import Config from '../global/config'
import SessionService from '../services/SesionServices';

 
   export const LoginSesion =async function (usr,pass) {
        
        var isLogged=false;

        var params={
            "id":usr,
            "pass":pass,
            "id_metodo":Config.IDMETODO,
            "id_servicio":Config.IDSERVICIO,
            "metodo":Config.METODO,
            "servicio":Config.SERVICIO
        }        
        try{            
            const sessionService = new SessionService();
            const datos = await sessionService.loginApp(params);
            console.log("datos Login"+JSON.stringify(datos))
            if (!datos.estado && datos.codigo == 11272 || !datos.estado && datos.codigo == 102) {   // falso               
                return isLogged;
                
            } else if (datos.estado && datos.codigo == 0) {   //verdadero          
                if (Object.values(datos).length > 0) {       
                    sessionStorage.setItem('datos', JSON.stringify(datos));                   
                    return true;
                }
            }        
        }catch(e){
            console.log(e);
        }        
        return(isLogged);
    }

   export const LogoutSession= async function () {        
        try{              
            var isLogged=false;
            var datos=JSON.parse(sessionStorage.getItem('datos'))
            if(datos !=null){
                //console.log("token "+datos.token);
                var params={           
                    "token":datos.token
                }       
                const sessionService = new SessionService();
                const data = await sessionService.logoutApp(params);      
                console.log("est.Log.."+ JSON.stringify(data));          
                                
                sessionStorage.removeItem('datos')
                console.log("Datos sesion: "+JSON.parse(sessionStorage.getItem('datos')));
                return true;               
            } 
        }catch(e){
            console.log(e);
        }             
        return(isLogged);
    }




