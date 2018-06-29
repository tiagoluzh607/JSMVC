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
            
    }
    
    
    adiciona(event){
        event.preventDefault(); // tira o comportamento default do botao
        
        let data = new Date(
                ...this._inputData.value // os tres pontos quer dizer que este array de tres posicoes cada posicao vai para um parametro do construtor de date
                .split('-')
                .map((item, indice) => item - indice % 2) //Arrow  function já faz o retorno automatico
                
        );
        
       let negociacao = new Negociacao(
            //new Date (this._inputData.value.replace(/-/g,',')), // a data esta em formato Date porem do html vem uma string nesse formato yyyy-mm-dd e para criarmos uma data precisamos subtituir "-" por "," para usar no construtor de date
            data,   
            this._inputQuantidade.value,
            this._inputValor.value
        );
        
        console.log(negociacao);
        
        
    }
}
