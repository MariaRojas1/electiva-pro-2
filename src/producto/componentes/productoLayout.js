import React from 'react'
import Header from './header'
import AddButton from './AddButton'
import Menu from './Menu';
import CardImagen from './CardImagen';
import BotonArchivos from './BotonArchivos';
import ContactenosForm from './ContactenosForm';

const ProductoLayout = () => {

    return (
        <>
            <Header title="Electiva" />
            <AddButton />
            <Menu />
            <br />
            <br />

            <div class="columns ">
                <div class="column">
                    <CardImagen titulo="Ingenieria de software" imagen="https://www.fet.edu.co/wp-content/uploads/2018/09/INGENIERIA-DE-SOFTWARE.jpg" />
                </div>
                <div class="column">
                    <CardImagen titulo="Ingenieria de alimentos" imagen="https://www.fet.edu.co/wp-content/uploads/2018/09/INGENIERIA-DE-ALIMENTOS.jpg" />

                </div>
                <div class="column">
                    <CardImagen titulo="Ingenieria ambiental" imagen="https://www.fet.edu.co/wp-content/uploads/2018/09/INGENIERIA-AMBIENTAL.jpg" />

                </div>
                <div class="column">
                    <CardImagen titulo="Ingenieria electrica" imagen="https://www.fet.edu.co/wp-content/uploads/2018/09/INGENIERIA-ELECTRICA.jpg" />
                </div>
            </div>
            <br />
            <div class="columns ">
                <div class="column">
                    <BotonArchivos titulo="Estatuto general" urlDescarga="#"/>
                </div>
                <div class="column">
                <BotonArchivos titulo="Estatuto docentes" urlDescarga="#"/>
                </div>
                <div class="column">
                <BotonArchivos titulo="Estatuto estudiantes" urlDescarga="#"/>
                </div>
            </div>
            <br />
            <br />
            <br />
            <ContactenosForm/>
        </>
    )
}

export default ProductoLayout