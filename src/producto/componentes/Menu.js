import React from 'react'

const Menu =() => {

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="#">
                    <img src="https://www.fet.edu.co/wp-content/themes/fet/images/logo.png" width="112" height="70" />
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item">Institucional</a>

                    <a className="navbar-item">
                        Investigacion</a>
                    <a className="navbar-item">
                        Noticias</a>
                    <a className="navbar-item">
                        Informese</a>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            Programas
        </a>

                        <div class="navbar-dropdown">
                            <a class="navbar-item">
                                Ingenieria de Sofware
          </a>
                            <a class="navbar-item">
                                Ingenieria Electrica
          </a>
                            <a class="navbar-item">
                                Ingenieria de Alimentos
          </a>
                        </div>
                    </div>


                </div>
            </div>
        </nav>
    )
}

export default Menu;