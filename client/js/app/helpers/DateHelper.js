/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class DateHelper{
    
    
    textoParaData(texto){
        
        return new Date( 
               ...texto // Atribui a resposta aos tres parametros da funcao
                .split('-')
                  .map((item, indice) => item - indice % 2) //Diminui 1 do mes, pos internamente o mes do date vai de 0 a 11,  Arrow  function já faz o retorno automatico
        );
    }
    
    dataParaTexto(data){
        
        return  data.getDate() 
                + "/" + (data.getMonth() + 1)
                + "/" + data.getFullYear();
        
    }
    
}