import React from 'react'
import './Main.css'
const Main = () => {
  return (
    <div className="main">
      <div className="core-network">
        <div className="head">
          Core-Network
        </div>
        <div className="docker">
          <div className="cont1">AUSF</div>
          <div className="cont2">NRF</div>
          <div className="cont3">UDM</div>
          <div className="cont4">UDR</div>
          <div className="cont5">SMF</div>
          <div className="cont6">AMF</div>
          <div className="cont7">UPF</div>
        </div>
        <div className="play">

        </div>

      </div>
      <div className="ng-ran">
        <div className="head">
          RAN/ Access Points
        </div>
        <div className="base">
          <div className="station1"></div>
          <div className="station2"></div>
          <div className="divider"></div>
          <div className="station3"></div>
          <div className="station4"></div>
        </div>
        <div className="play1">

        </div>
      </div>
      <div className="ues">
        <div className="head">
          UEs
        </div>
      </div>
      <div className="packet">
        <div className="head">
          5G Standalone Message Flow
        </div>
      </div>
    </div>
  )
}

export default Main;