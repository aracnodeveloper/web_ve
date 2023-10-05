import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from 'react';
import { es } from 'date-fns/locale';


function Calendario() {
    const [dateStart, setDateStart] = useState();
    const [dateEnd, setDateEnd] = useState();

    function onChangeHandler(value) {
        setDateStart(value[0]);
        setDateEnd(value[1]);
    }
    
    return(
    <>
    
    <DatePicker
        locale={es}
        showIcon
        isClearable
        placeholderText="Seleccionar fechas"
        monthsShown={2}
        minDate={new Date()}

        id="dateStartEnd"
        selectsRange={true}
        startDate={dateStart}
        endDate={dateEnd}
        onChange={onChangeHandler}
        dateFormat="dd MMM yyyy"
        className={'form-control form-control-solid w-250px'}    
        
    />
    
    </>);
}
export default Calendario
/*
{console.log(dateStart)}
*/