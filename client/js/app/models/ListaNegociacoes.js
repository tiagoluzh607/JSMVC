/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class ListaNegociacoes{
    
    constructor(){
        
        this._negociacoes = [];
    }
    
    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }
    
    get negociacoes(){
        return [].concat(this._negociacoes); //retornando uma cópia da lista para o programador não conseguir alterar a lista de fora da classe
    }
}
