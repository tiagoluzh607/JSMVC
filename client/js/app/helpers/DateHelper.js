/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class DateHelper{
    
    constructor(){
        throw new Error('DateHelper não pode ser instanciada, DateHelper not is stancied');
    }
    
    static textoParaData(texto){
        
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) //expressao regular para testar se esta no formato aaaa-mm-dd
            throw new Error ('Deve estar no formato aaa-mm-dd');
        
        return new Date( 
               ...texto // Atribui a resposta aos tres parametros da funcao
                .split('-')
                  .map((item, indice) => item - indice % 2) //Diminui 1 do mes, pos internamente o mes do date vai de 0 a 11,  Arrow  function já faz o retorno automatico
        );
    }
    
    static dataParaTexto(data){
        
        return  `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`; //sinal ` faz uma concatenação de string insplicitamente
    }
    
}