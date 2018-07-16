/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class View{
    
    
    constructor(elemento){
        this._elemento = elemento;
    }
        
    update(model){
        this._elemento.innerHTML = this._template(model);
    }
    
}
