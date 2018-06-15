/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
]

console.log(campos);

var tbody = document.querySelector('table tbody');

//executa funcao apos o submit
document.querySelector('.form').addEventListener('submit', function(event){
    
    //não carrega a pagina ao submeter formulario
    event.preventDefault();
    
    //Prenechendo a tabela com os dados da tela
    var tr = document.createElement('tr');
    
    campos.forEach(function(campo){
        
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
        
    });
    
    //adicionando volume na tabela que é quantidade * o valor
    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    
    tr.appendChild(tdVolume); 
    tbody.appendChild(tr);
    
    //Limpa valores e joga o foco para data novamente
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;
    
    campos[0].focus();
    
});


