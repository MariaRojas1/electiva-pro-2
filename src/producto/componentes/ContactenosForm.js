import React from 'react';

const ContactenosForm = () => {

    return (
        <div>
            <div class="field">
                <label class="label">Nombre *</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Nombre" />
                </div>
            </div>

            <div class="field">
                <label class="label">Email *</label>
                <div class="control">
                    <input class="input" type="email" placeholder="Email" />
                </div>
            </div>

            <div class="field">
                <label class="label">Telefono *</label>
                <div class="control">
                    <input class="input" type="text" placeholder="telefono" />
                </div>
            </div>

            <div class="field">
                <label class="label">Mensaje * </label>
                <div class="control">
                    <textarea class="textarea" placeholder="Mensaje"></textarea>
                </div>
            </div>


            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-link">Enviar</button>
                </div>
            </div>
        </div>
    )

}
export default ContactenosForm;