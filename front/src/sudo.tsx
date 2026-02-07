import { useState, useEffect } from 'react'

import './sudo.css'


function Sudo(prop: any) {
  return (
    <>
      <div className="sudo">
        <input id="password-input" type="text" placeholder="pswd" className="sudo-input" />
      </div>
      
    </>
  )
}

export default Sudo
