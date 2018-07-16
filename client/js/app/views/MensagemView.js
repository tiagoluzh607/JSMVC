/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class MensagemView{
    
    constructor(elemento){
        this._elemento = elemento;
    }
    
    _template(model){
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`;
    }
    
    update(model){
        this._elemento.innerHTML = this._template(model);
    }
}
