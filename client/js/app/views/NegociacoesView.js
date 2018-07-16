/* 

 */

class NegociacoesView{
    
    
    constructor(elemento){
        this._elemento = elemento;
    }
    
    
    
    _template(model){
                
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${model.negociacoes.map(n =>        
                    `
                        <tr>
                            <td>${DateHelper.dataParaTexto(n.data)}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.volume}</td>
                        </tr>
                    `              
                ).join('')}
            </tbody>

            <tfoot>
                <td colspan="3"></td>
                <td>
                ${
                    model.negociacoes.reduce((total, n) => total + n.volume, 0.0) //aero function o n é o bjeto iterado, o total é uma variavel criada na iteracao e o 0.0 quer dizer que o total iniciará em zero é um dos parametros da funcao reduce
                }
                </td>
            </tfoot>
        </table>
        `;
        
    }
    
    update(model){
        
        this._elemento.innerHTML = this._template(model);
    }
    
}
