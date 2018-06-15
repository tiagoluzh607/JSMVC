/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Negociacao{

    constructor(data, quantidade, valor){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    
    getVolume(){
        return this._quantidade * this._valor;
    }
    
    getData(){
        return this._data;
    }
    
    getQuantidade(){
        return this._quantidade;
    }
    
    getValor(){
        return this._valor;
    }
    
    
    
}
