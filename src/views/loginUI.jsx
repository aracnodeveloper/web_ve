import React, { useState } from 'react';
import {LoginSesion} from '../controllers/loginController'
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ id: '', pass: '' });
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const MostrarMensaje = (valor) => {
    setMensaje(valor);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    MostrarMensaje("logueando....");
        

    LoginSesion(formData.id, formData.pass)
      .then((data) => {
        
        if (data) {
          console.log("LOGUEADO CORRECTAMENTE...");  
          
          navigate('/', { replace: true })
        }
        else
          MostrarMensaje("Login Incorrecto");
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  };




  return (
    <>     
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
          <img
            className="mx-auto h-64 w-auto"
            src="../../public/img/icono_visita_ecuador.png"
            alt="visitaecuador.com"
          />
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Iniciar Sesión
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="id" className="block text-sm font-medium leading-6 text-gray-900">
                Usuario
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="id"
                  name="id"
                  required
                  className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.id}
                  onChange={handleInputChange}                  
                 />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Contraseña
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Olvidaste tu contraseña?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  id="pass"
                  name="pass"
                  value={formData.pass}
                  onChange={handleInputChange}
                  required
                  className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-lime-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-lime-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Iniciar Sesión
              </button>
            </div>
          </form>

          <div>{mensaje}</div>


          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  )
 
}

export default Login;
