import MenuUi from './menuUI'
import Calendario from './ofertas/calendario';
import ItemCount from './ofertas/contadorItems';
import { useState } from 'react';
import '../styles/itemCount.css';
import Desplegable from '../views/ofertas/desplegable'

const onAdd = (cantidad) => {  
  //console.log("*** " + cantidad);
};

function Ofertas() {
  const [inputs, setInputs] = useState(['']);

  const agregarInput = () => {
    setInputs([...inputs, '']);
  };

  const eliminarInput = () => {
    if (inputs.length > 0) {
      const nuevosInputs = inputs.slice(0, -1);
      setInputs(nuevosInputs);
    }
  };

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleMenuItemClick = (item) => {
    // Manejar la acción cuando se hace clic en un elemento del menú
    console.log(`Hiciste clic en "${item}"`);
    // Puedes realizar alguna acción, como navegar a otra página, ejecutar una función, etc.
  };


  return (
    <>
      <MenuUi />
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Ofertas</h1>
        </div>
      </header>
      <main>
        <div className="  py-6 columns-3 ">




          <div className="relative mt-2 ">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building-add" viewBox="0 0 16 16">
                  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Z" />
                  <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6.5a.5.5 0 0 1-1 0V1H3v14h3v-2.5a.5.5 0 0 1 .5-.5H8v4H3a1 1 0 0 1-1-1V1Z" />
                  <path d="M4.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" />
                </svg>
              </span>
            </div>
            <input
              type="text"
              name="price"
              id="price"
              className=" block rounded-md border-0 py-1.5 pl-9 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              placeholder="¿A dónde vas?"
            />
          </div>



          <div >
            <Calendario />
          </div>

          <div className="boton-con-menu border-2 w-32">
            <button onClick={toggleMenu} className=''>Abrir Menú</button>
            {menuVisible && (
              <div className=''>
              <div className='ring-1 ring-red-300'>
                <div className=' ring-1 ring-green-300'>
                  <h3>Adultos</h3>
                  <ItemCount onAdd={onAdd} initial={0} stock={15} />

              
                 
                </div>
                <div className=' ring-1 ring-black-300'>
                <h3>Niños</h3>
                 
                <div className='ring-1 ring-black-300'>
                    <div className="count-container">
                      <div className="count-container__contador">
                        <button className="count-container__button" onClick={eliminarInput}>-</button>
                        <span className="count-container__qty">{inputs.length}</span>
                        <button className="count-container__button" onClick={agregarInput}>+</button>
                      </div>
                    </div>   
                  </div>
                 </div>
                 <div className=''>
                    {inputs.map((input, index) => (
                      <select key={index} name="age"> <option value="-1" data-key="-1">Edad (obligatorio)</option><option value="0" data-key="0">0 años</option><option value="1" data-key="1">1 año</option><option value="2" data-key="2">2 años</option><option value="3" data-key="3">3 años</option><option value="4" data-key="4">4 años</option><option value="5" data-key="5">5 años</option><option value="6" data-key="6">6 años</option><option value="7" data-key="7">7 años</option><option value="8" data-key="8">8 años</option><option value="9" data-key="9">9 años</option><option value="10" data-key="10">10 años</option><option value="11" data-key="11">11 años</option><option value="12" data-key="12">12 años</option><option value="13" data-key="13">13 años</option><option value="14" data-key="14">14 años</option><option value="15" data-key="15">15 años</option><option value="16" data-key="16">16 años</option><option value="17" data-key="17">17 años</option></select>
                    ))}
                </div>

                 <div className=''>
                 <h3>Habitaciones</h3>
                  <ItemCount onAdd={onAdd} initial={0} stock={15} />
                 </div>
                </div>

              </div>
            )}
          </div>






        </div>



        




      </main>
    </>
  );
};

export default Ofertas;


/*
<div className="boton-con-menu border-2 w-32">
            <button onClick={toggleMenu} className=''>Abrir Menú</button>
            {menuVisible && (
              <>
              <div className='ring-1 ring-red-300'>
                <div className=' ring-1 ring-green-300'>
                  <h3>Adultos</h3>
                  <ItemCount onAdd={onAdd} initial={0} stock={15} />

              
                 
                </div>
                <div className=' ring-1 ring-black-300'>
                <h3>Niños</h3>
                 
                <div className='ring-1 ring-black-300'>
                    <div className="count-container">
                      <div className="count-container__contador">
                        <button className="count-container__button" onClick={eliminarInput}>-</button>
                        <span className="count-container__qty">{inputs.length}</span>
                        <button className="count-container__button" onClick={agregarInput}>+</button>
                      </div>
                    </div>   
                  </div>
                 </div>
                 <div className=''>
                    {inputs.map((input, index) => (
                      <select key={index} name="age"> <option value="-1" data-key="-1">Edad (obligatorio)</option><option value="0" data-key="0">0 años</option><option value="1" data-key="1">1 año</option><option value="2" data-key="2">2 años</option><option value="3" data-key="3">3 años</option><option value="4" data-key="4">4 años</option><option value="5" data-key="5">5 años</option><option value="6" data-key="6">6 años</option><option value="7" data-key="7">7 años</option><option value="8" data-key="8">8 años</option><option value="9" data-key="9">9 años</option><option value="10" data-key="10">10 años</option><option value="11" data-key="11">11 años</option><option value="12" data-key="12">12 años</option><option value="13" data-key="13">13 años</option><option value="14" data-key="14">14 años</option><option value="15" data-key="15">15 años</option><option value="16" data-key="16">16 años</option><option value="17" data-key="17">17 años</option></select>
                    ))}
                </div>

                 <div className=''>
                 <h3>Habitaciones</h3>
                  <ItemCount onAdd={onAdd} initial={0} stock={15} />
                 </div>
                </div>

              </>
            )}
          </div>

          */
          