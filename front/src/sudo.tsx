import { useState, useEffect } from 'react'


function Sudo(prop: any) {
  return (
    <>
      <div className="sudo">
        <h3>Sudo</h3>
        <input id="password-input" type="password" placeholder="pswd" className="sudo-input" />
      </div>
      
    </>
  )
}

export default Sudo
