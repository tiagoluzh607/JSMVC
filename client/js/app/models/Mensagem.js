/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Mensagem{
    
    constructor(texto=''){ //se eu nao passar a variavel texto como parametro ele por padrao vai colocar '', mas se eu passar o parametro irá vaer o meu paramtro
        this._texto = texto;
    }
    
    get texto(){
        return this._texto;
    }
    
    set texto(texto){
        this._texto = texto;
    }
    
}