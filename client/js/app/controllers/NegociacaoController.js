/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class NegociacaoController{
    
    
    constructor(){
        
        let $ = document.querySelector.bind(document); //criando um atalho para chamar o queryselector com $
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
    }
    
    
    adiciona(event){
        event.preventDefault(); // tira o comportamento default do botao
                
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._limpaFormulario();
        
        console.log(this._listaNegociacoes.negociacoes);
        
        //console.log(DateHelper.dataParaTexto(negociacao.data));
        
    }
    
    _criaNegociacao(){
        
        return new Negociacao(
            //new Date (this._inputData.value.replace(/-/g,',')), // a data esta em formato Date porem do html vem uma string nesse formato yyyy-mm-dd e para criarmos uma data precisamos subtituir "-" por "," para usar no construtor de date
            DateHelper.textoParaData(this._inputData.value),   
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }
    
    _limpaFormulario(){
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        
        this._inputData.focus();
    }
}
