
import { useState } from 'react';

import './crud-field.css'

function CrudField(prop: any)
{
    let value = prop.value;

    if(prop.name === "sudo")
    {
        value = prop.value === "1" ? true : false;
    }

    return (
        <>
            <div id={`crud-` + prop.name} className="crud-field">
                <label 
                    htmlFor={prop.id} 
                    className="crud-field-name">{prop.name}
                </label>
                <input 
                    id={prop.id}
                    type="text" 
                    defaultValue={prop.value} 
                    className="crud-field-input" />
            </div>
        </>
    )
}

export default CrudField