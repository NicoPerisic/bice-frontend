import React from "react";
import './styles/Nav.css'

const Nav = () => {
  return (
    <div className='nav'>
      <header className="bv-header">
        <div className="containerHeader row">
          <div className="head">
            <a href="https://nicoperisic.github.io/bice-frontend/">
              <img
                src="https://ventaenlinea.bicevida.cl/pub/media/bicevida/temav2/img/LOGO_BLANCO_VERDE.png"
                width='20%'
                alt="logo"
                id="imgLogo"
              />
            </a>
          </div>
        </div>
      </header>
      ;
    </div>
  );
};

export default Nav;
