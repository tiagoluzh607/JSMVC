/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Negociacao{

    constructor(data, quantidade, valor){
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);//congela o objeto para nao poder ser alterado
    }

    get volume(){
        return this._quantidade * this._valor;
    }

    get data(){
        return new Date(this._data.getTime()); //se retornasemos this_data o programador conseguiria quebrar o encapsulamento ao inves disso retornamos para ele uma nova referencia para data, assim se ele der uma de esperto e alterar lah no código, não ira impactar aqui dentro do objeto
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }



}
