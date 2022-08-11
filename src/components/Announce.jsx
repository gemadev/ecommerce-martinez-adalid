import {Close} from '@material-ui/icons'
import React from "react";
import { useState } from "react";

function Announce() {

    const [announceStyle, setAnnounceStyle] = useState('bg-[#de0e82] font-bold text-white flex items-center justify-center')

    const handleClose = ()=> {
        setAnnounceStyle(announceStyle + " hidden")
    }
    return <div className={announceStyle}>
        <h2>20% de descuento en efectivo</h2>
        <Close className='cursor-pointer' onClick={handleClose}/>
    </div>
}

export default Announce;